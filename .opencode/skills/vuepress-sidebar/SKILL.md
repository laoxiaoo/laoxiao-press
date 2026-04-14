---
name: vuepress-sidebar
description: VuePress侧边栏配置和markdown文件处理 - 自动生成侧边栏配置、提取标题、修复标签格式、调整图片路径
---

# VuePress 侧边栏配置与 Markdown 处理

这个 skill 用于处理 VuePress 侧边栏配置和 markdown 文件的批量处理。

## 功能概述

1. **侧边栏配置生成**: 根据用户输入的 ts 文件路径和目标路径，生成侧边栏配置
2. **标题提取与添加**: 从用户输入的 markdown 链接中提取标题，添加到对应的 md 文件开头
3. **HTML 标签修复**: 将未闭合的 HTML 标签转为 markdown 代码格式
4. **图片路径修复**: 将 `![](image/xxx)` 改为 `![](image/xxx)`

## 使用流程

### 步骤 1: 收集信息

请用户提供以下信息：
- **侧边栏 ts 文件路径**: 例如 `src/.vuepress/sidebar/java_sidebar.ts`
- **目标路径**: 存放 md 文件的目录，例如 `src/java/java-base/jvm/doc/`
- **侧边栏标题列表**: 用户输入的 markdown 链接列表，格式如下：
  ```
  * [jvm基础](/java/java-base/jvm/doc/1-jvm)
  * [类加载子系统](/java/java-base/jvm/doc/2-jvm)
  ```

### 步骤 2: 生成侧边栏配置

根据用户输入的信息，生成如下格式的侧边栏配置：

```typescript
{
    text: 'JVM',
    prefix: 'java-jvm/',
    collapsible: true,
    children: [
        '1-jvm',
        '2-jvm',
        '3-rundata',
    ],
}
```

并将其添加到指定的 ts 文件中。

### 步骤 3: 提取标题并添加

解析用户输入的 markdown 链接，提取标题和文件名：

- `[jvm基础](/java/java-base/jvm/doc/1-jvm)` → 标题: `jvm基础`, 文件名: `1-jvm`
- `[类加载子系统](/java/java-base/jvm/doc/2-jvm)` → 标题: `类加载子系统`, 文件名: `2-jvm`

然后在目标路径下的对应 md 文件开头添加：

```yaml
---
类加载子系统
---
```

### 步骤 4: 修复 HTML 标签

扫描目标路径下的所有 md 文件，查找未闭合的 HTML 标签，并转换为 markdown 代码格式：

**修复前:**
```markdown
- 函数型接口 Function<T,R>   R apply(T t)
- List<String>
- SimpleChannelInboundHandler<I>这种泛型 
```

**修复后:**
```markdown
- 函数型接口 `Function<T, R>`   `R apply(T t)`
- `List<String>`
- `SimpleChannelInboundHandler<I>`
```

使用正则表达式匹配：
- `Function<T,R>` → `Function<T, R>`
- `List<String>` → `List<String>`
- 其他类似的泛型或接口类型

### 步骤 5: 修复图片路径

扫描目标路径下的所有 md 文件，将相对图片路径改为相对路径：

**修复前:**
```markdown
![](image/xxx.png)
```

**修复后:**
```markdown
![](./image/xxx.png)
```

## 详细步骤

### 第一步：询问用户获取必要信息

1. 询问用户要修改的侧边栏 ts 文件路径
2. 询问目标路径（md 文件所在目录）
3. 询问侧边栏标题列表（用户粘贴的 markdown 链接）

### 第二步：解析输入并生成配置

1. 解析 markdown 链接列表，提取标题和文件名
2. 生成侧边栏配置对象
3. 将配置添加到 ts 文件中

### 第三步：处理 md 文件

1. 遍历目标路径下的所有 .md 文件
2. 对每个文件执行以下操作：
   - 根据文件名匹配对应的标题，添加 frontmatter
   - 修复 HTML 标签为代码格式
   - 修复图片路径

## 注意事项

1. 确保 ts 文件路径和目标路径存在
2. md 文件名需要与链接中的路径匹配
3. 处理前可以先备份原文件
4. 使用 glob 工具查找目标路径下的 md 文件
5. 使用 read 工具读取文件内容，使用 edit 工具修改文件