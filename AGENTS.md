# AGENTS.md

本项目已添加本地 agent 工具入口。后续在本项目中工作时，可以优先读取下面列出的插件与 skills，并把它们作为可用工具说明或工作流上下文使用。

## 已安装工具索引

| 名称 | 类型 | 相对地址 | 用途 |
|---|---|---|---|
| Knowledge Works 插件说明 | Plugin | `.claude/plugins/knowledge-works/README.md` | 记录 Knowledge Works 工作流插件的用途和使用方式 |
| Knowledge Works 插件清单 | Plugin manifest | `.claude/plugins/knowledge-works/plugin.json` | 为 agent 提供插件元数据入口 |
| Knowledge Works Skill | Skill | `.claude/skills/knowledge-works/SKILL.md` | 用于知识整理、想法归档、研究笔记结构化和复用 |
| Anthropic Official 插件说明 | Plugin | `.claude/plugins/anthropic-official/README.md` | 记录 Anthropic 和 Claude 相关工具入口 |
| Anthropic Official 插件清单 | Plugin manifest | `.claude/plugins/anthropic-official/plugin.json` | 为 agent 提供 Anthropic 工具集合元数据 |
| Anthropic Official Skill | Skill | `.claude/skills/anthropic-official/SKILL.md` | 汇总 Claude、Claude Code、MCP、Skills 等 Anthropic 生态能力说明 |
| Claude Code Skill | Skill | `.claude/skills/anthropic-official/claude-code/SKILL.md` | 面向代码阅读、编辑、测试和提交的 Claude Code 工作流说明 |
| MCP Skill | Skill | `.claude/skills/anthropic-official/mcp/SKILL.md` | 面向 Model Context Protocol 工具和数据连接的使用说明 |

## 使用提醒

- 需要知识管理、想法整理、研究笔记或项目灵感沉淀时，读取 `.claude/skills/knowledge-works/SKILL.md`。
- 需要 Claude、Claude Code、MCP、插件、skills 或 agent 工具配置时，读取 `.claude/skills/anthropic-official/SKILL.md`。
- 需要代码维护工作流时，读取 `.claude/skills/anthropic-official/claude-code/SKILL.md`。
- 需要工具或数据连接说明时，读取 `.claude/skills/anthropic-official/mcp/SKILL.md`。

## 备注

这些文件是本项目下的本地工具索引和说明。后续如果要加入某个具体第三方插件源码或官方发布包，请先确认来源、许可证和安装路径。
