export type DataSource = {
  kind: "dataset" | "model" | "code";
  name: string;
  registry: "huggingface" | "github";
  description: string;
};

export const publicDataSources: DataSource[] = [
  {
    kind: "dataset",
    name: "zhang-xuefeng-data",
    registry: "huggingface",
    description: "Public dataset reference mentioned in the provided screenshot."
  },
  {
    kind: "model",
    name: "zhang-xuefeng-27b-gguf",
    registry: "huggingface",
    description: "Public model-weight reference mentioned in the provided screenshot."
  },
  {
    kind: "code",
    name: "zhang-xuefeng-sft-pipeline",
    registry: "github",
    description: "Public data-cleaning and training-code reference mentioned in the provided screenshot."
  }
];

export function formatDataSources(): string {
  return publicDataSources
    .map((source) => `- ${source.kind}: ${source.registry}/${source.name} — ${source.description}`)
    .join("\n");
}
