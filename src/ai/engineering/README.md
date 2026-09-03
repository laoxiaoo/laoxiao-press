---

title: AI工程化

---



#  Function Call / Tool Calling

**function call = tool calling**（智能体圈子的叫法），是 OpenAI API 自带能力，**并非所有模型都支持**（不支持的用其他方法模拟）。

##  工作机制（重点，易混淆）

1. 模型先判断**是否有工具可用**。
2. 有则输出 **tool calling 的 JSON**（工具调用请求）——**不是直接执行**，也不是最终答案（与普通 response 返回结果不同）。
3. 拿到 JSON 后，把**工具返回的结果再注入大模型**，最终生成回答。
4. 这个"输出调用请求 → 工具返回 → 继续对话"的循环叫 **Agent Loop**。
