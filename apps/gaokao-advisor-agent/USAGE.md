# 使用说明

这是一个基于 Claude Agent SDK 的高考志愿与升学规划问答应用原型。

## 数据参考

用户截图中提到的公开资源名称：

- `zhang-xuefeng-data`
- `zhang-xuefeng-27b-gguf`
- `zhang-xuefeng-sft-pipeline`

使用前请自行核对资源页面、许可证、数据来源和使用边界。

## 定位

该 app 是问答助手原型，不代表任何现实人物、机构或平台。它用于解释高考志愿填报、专业选择、院校层次、城市选择和就业方向等问题。

## 运行方式

```bash
cd apps/gaokao-advisor-agent
npm install
npm run dev -- "我在河南，理科，想学计算机，应该怎么选？"
```

请在本地环境中配置模型服务密钥，不要把真实密钥提交到仓库。

## 开发命令

```bash
npm run typecheck
npm run build
npm start -- "你的问题"
```
