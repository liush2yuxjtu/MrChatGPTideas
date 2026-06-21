# AGENTS.md

本项目使用下面两个 Anthropic 官方公开仓库作为 Claude 插件与 skill 来源：

- `anthropics/knowledge-work-plugins`
- `anthropics/claude-plugins-official`

这些资源可以作为本项目中的工具来源。需要使用时，先读取本文件，再按相对地址查看对应插件、commands、agents、skills 和 marketplace 清单。

## 官方来源

| 来源 | 仓库 | 项目内相对地址 |
|---|---|---|
| Knowledge Work Plugins | `https://github.com/anthropics/knowledge-work-plugins` | `vendor/anthropics/knowledge-work-plugins/` |
| Claude Plugins Official | `https://github.com/anthropics/claude-plugins-official` | `vendor/anthropics/claude-plugins-official/` |

## Knowledge Work Plugins

官方仓库说明中列出的 11 个插件如下。相对地址均以 `vendor/anthropics/knowledge-work-plugins/` 为根目录：

| 插件 | 相对地址 |
|---|---|
| productivity | `vendor/anthropics/knowledge-work-plugins/productivity/` |
| sales | `vendor/anthropics/knowledge-work-plugins/sales/` |
| customer-support | `vendor/anthropics/knowledge-work-plugins/customer-support/` |
| product-management | `vendor/anthropics/knowledge-work-plugins/product-management/` |
| marketing | `vendor/anthropics/knowledge-work-plugins/marketing/` |
| legal | `vendor/anthropics/knowledge-work-plugins/legal/` |
| finance | `vendor/anthropics/knowledge-work-plugins/finance/` |
| data | `vendor/anthropics/knowledge-work-plugins/data/` |
| enterprise-search | `vendor/anthropics/knowledge-work-plugins/enterprise-search/` |
| bio-research | `vendor/anthropics/knowledge-work-plugins/bio-research/` |
| cowork-plugin-management | `vendor/anthropics/knowledge-work-plugins/cowork-plugin-management/` |

每个 Knowledge Work 插件通常包含：

- `.claude-plugin/plugin.json`
- `.mcp.json`
- `commands/`
- `skills/`

## Claude Plugins Official

官方 marketplace 仓库入口：

| 资源 | 相对地址 |
|---|---|
| marketplace manifest | `vendor/anthropics/claude-plugins-official/.claude-plugin/marketplace.json` |
| internal plugins | `vendor/anthropics/claude-plugins-official/plugins/` |
| external plugins | `vendor/anthropics/claude-plugins-official/external_plugins/` |
| plugin-dev | `vendor/anthropics/claude-plugins-official/plugins/plugin-dev/` |
| example-plugin | `vendor/anthropics/claude-plugins-official/plugins/example-plugin/` |
| security-guidance | `vendor/anthropics/claude-plugins-official/plugins/security-guidance/` |

## 使用提醒

- 这些插件和 skills 可以作为 Claude / agent 的工具来源。
- 需要角色型工作流时，优先查看 Knowledge Work Plugins。
- 需要 Claude Code 插件市场、插件开发、MCP 集成或 skill 结构说明时，优先查看 Claude Plugins Official。
- 运行任何外部插件前，先确认来源、权限、依赖和配置。

## Claude Code 安装提示

Knowledge Work marketplace：

```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install productivity@knowledge-work-plugins
claude plugin install sales@knowledge-work-plugins
claude plugin install customer-support@knowledge-work-plugins
claude plugin install product-management@knowledge-work-plugins
claude plugin install marketing@knowledge-work-plugins
claude plugin install legal@knowledge-work-plugins
claude plugin install finance@knowledge-work-plugins
claude plugin install data@knowledge-work-plugins
claude plugin install enterprise-search@knowledge-work-plugins
claude plugin install bio-research@knowledge-work-plugins
claude plugin install cowork-plugin-management@knowledge-work-plugins
```

Claude Plugins Official marketplace：

```text
在 Claude Code 中使用 /plugin install {plugin-name}@claude-plugins-official。
完整插件名以 vendor/anthropics/claude-plugins-official/.claude-plugin/marketplace.json 为准。
```
