# MrChatGPTideas

本分支用于建设一个非官方“张雪峰风格”高考志愿顾问 App 原型。

## 产品边界

- 不是张雪峰本人或其团队的官方产品。
- 不冒充真人，不承诺录取结果。
- 所有志愿填报结论必须以各省考试院、一分一段表、当年招生计划和高校招生章程为准。

## App 目标

应用面向高考志愿、专业选择、城市取舍和就业路径咨询，核心输入包括：

- 省份
- 分数 / 位次
- 选科
- 城市偏好
- 家庭预期
- 风险偏好

核心输出包括：

- 冲稳保三档策略
- 专业适配度与避坑提醒
- 城市、学校、专业的取舍解释
- 就业出口、读研必要性和长期风险提示

## 技术方案

建议使用 Next.js 全栈结构：

```text
app/api/chat/route.ts       服务端模型调用
components/AdvisorApp.tsx   前端学生画像与聊天界面
lib/agent/                  agent prompt 与 fallback 规则
lib/data/                   专业、城市、院校参考数据
data/reference/             外部公开数据集导入目录
agents/                     agent-sdk-dev:new-agent-sdk manifest
```

后端通过服务端环境变量读取兼容 Anthropic Messages API 的 endpoint、模型名和密钥；真实密钥不得写入源码、README、issue 或 commit message。

## agent-sdk-dev:new-agent-sdk 设计

Agent 名称：`zhangxuefeng-gaokao-advisor`

Agent 工作流：

1. 先收集省份、分数/位次、选科、城市偏好、家庭预算、职业偏好、风险偏好。
2. 不给唯一答案，默认输出冲稳保三档策略。
3. 专业建议必须说明适合人群、风险、就业出口、是否建议读研。
4. 城市建议必须说明产业、实习、校友和留城机会。
5. 缺少当年官方数据时，必须明确提示不确定性。

## 公开数据集接入

用户提供的小红书公开链接在当前自动抓取环境中不可访问，因此本次没有把不可验证内容硬编码进项目。推荐后续把可验证公开数据整理为：

- `majors.csv`：专业名称、学科门类、适合人群、风险提示、典型岗位、是否建议读研。
- `schools.csv`：院校名称、城市、层级、优势学科、就业区域、注意事项。
- `admission-lines.csv`：年份、省份、科类/选科、院校、专业组、最低分、最低位次。

## 路线图

- [x] 明确张雪峰风格志愿顾问 App 的产品边界
- [x] 设计兼容 Anthropic API 的服务端调用方式
- [x] 设计 agent-sdk-dev:new-agent-sdk manifest
- [x] 设计公开数据集适配层
- [ ] 提交完整 Next.js 文件树
- [ ] 接入真实、可验证的公开录取数据
- [ ] 增加院校/专业检索与志愿表导出
- [ ] 增加省份规则和专业组规则校验
