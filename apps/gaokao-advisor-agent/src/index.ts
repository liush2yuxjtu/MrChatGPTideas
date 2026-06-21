import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";
import { buildUserPrompt, systemPrompt } from "./prompt.js";

function extractText(message: unknown): string {
  if (!message || typeof message !== "object") {
    return "";
  }

  const record = message as Record<string, unknown>;
  const nested = record.message;

  if (nested && typeof nested === "object") {
    const nestedRecord = nested as Record<string, unknown>;
    const content = nestedRecord.content;

    if (Array.isArray(content)) {
      return content
        .map((part) => {
          if (part && typeof part === "object" && "text" in part) {
            const text = (part as Record<string, unknown>).text;
            return typeof text === "string" ? text : "";
          }
          return "";
        })
        .filter(Boolean)
        .join("\n");
    }
  }

  if (typeof record.result === "string") {
    return record.result;
  }

  return "";
}

async function main(): Promise<void> {
  const question = process.argv.slice(2).join(" ").trim() || "请介绍这个高考志愿助手能做什么。";
  const prompt = `${systemPrompt}\n\n${buildUserPrompt(question)}`;

  for await (const message of query({
    prompt,
    options: {
      cwd: process.cwd(),
      maxTurns: 3,
      env: {
        ...process.env,
        CLAUDE_AGENT_SDK_CLIENT_APP: "gaokao-advisor-agent"
      }
    }
  })) {
    const text = extractText(message);
    if (text) {
      process.stdout.write(text);
    }
  }

  process.stdout.write("\n");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
