---
title: VsCode 食用
---
#

# 修改快捷方式

打开默认键盘快捷方式设置：
File -> Preferences -> Keyboard Shortcuts

# 几个常见的快捷键修改

## 格式化

![image-20231227193512022](./image/vscode/image-20231227193512022.png)

## 搜索文件

![image-20231227193544000](./image/vscode/image-20231227193544000.png)

## 方法提示

![image-20231227193931177](./image/vscode/image-20231227193931177.png)

## 触发提示

![image-20231227194113440](./image/vscode/image-20231227194113440.png)

# 字体调整

File -> Preferences -> setting

![image-20231227200545726](./image/vscode/image-20231227200545726.png)

# 插件

## GIT

### Git Graph

1. 点击Graph图标，进入界面

![image-20260227223408137](./image/vscode/image-20260227223408137.png)

2. 显示git分支相关信息

![image-20231231114229889](./image/vscode/image-20231231114229889.png)

### Git History

显示历史

![image-20231231114433747](./image/vscode/image-20231231114433747.png)

### Git Brains

> 可以对Git 冲突合并类似jetbrains一样的操作

1. 借助git graph对冲突分支合并

![image-20260227223910989](./image/vscode/image-20260227223910989.png)

2. 进入冲突解决界面

![image-20260227224159606](./image/vscode/image-20260227224159606.png)

![image-20260227224219860](./image/vscode/image-20260227224219860.png)

3. 冲突解决的界面和jetbrains一样

![image-20260227224400168](./image/vscode/image-20260227224400168.png)

# 折叠代码块

右键进入命令行

![image-20240713163452631](./image/vscode/image-20240713163452631.png)

搜索fold

![image-20240713163511683](./image/vscode/image-20240713163511683.png)

## Idea 快捷键

搜索 `IntelliJ IDEA Keybindings`。进行安装

## idea 主题

<b id="gray">IntelliJ IDEA Darcula Theme</b> 插件



# json处理

> json 树结构处理

<b id="gray">JSON Tree Editor</b>

安装完后，点击右上角

![image-20240731142445976](./image/vscode/image-20240731142445976.png)

<b id="gray">JSON Tools</b>

json格式化/压缩

![image-20241023155630517](./image/vscode/image-20241023155630517.png)

## 文件对比

<b id="gray">Compare View</b>

![image-20241023155725031](./image/vscode/image-20241023155725031.png)



# 配置终端为Git

> 如何在vscode上将终端配置成git命令行

1. 在设置中搜索：profiles.windows

2. 在json中配置
```json
   "terminal.integrated.profiles.windows": {
       "PowerShell -NoProfile": {
         "source": "PowerShell",
         "args": [
           "-NoProfile"
         ]
       },
       "Git-Bash": {
         "path": "D:\\softinstall\\Git\\bin\\bash.exe",
         "args": []
       }
     },
   "terminal.integrated.defaultProfile.windows": "Git-Bash",
```

# 多行操作

1. 此时，光标在第一行

![image-20250618210038125](./image/vscode/image-20250618210038125.png)

2. 按住alt+shift,点击最后一行，这样就可以选中多个光标了

![image-20250618210236353](./image/vscode/image-20250618210236353.png)

3. 如果想要批量跳到最后一行，则可以按住Ctrl+->键盘

![image-20250618210418300](./image/vscode/image-20250618210418300.png)

4. 同时批量的操作

![image-20250618210437409](./image/vscode/image-20250618210437409.png)

# 以第三方软件打开

以第三方的软件打开某个文件

安装：<b id="blue">Open in External App</b>插件

配置：

配置setting.json

```json

    "openInExternalApp.openMapper": [
        {
            "extensionName": "md",
            "apps": [
                {
                    "title": "typora",
                    "isElectronApp": true,
                    // following config item is not work
                    // "openCommand": "C:\\Program Files\\Typora\\Typora.exe",
                    // "args": ["--xxx"]
                }
            ]
        }
    ],

```

这个插件目前对于中文路径的文件不友好，所以，可以选择替代品：<b id="blue">open-file-in-external-app</b>

配置示例

```json
"openInTerminalApp": [
        // 使用Typora打开Markdown文件
        {
            "extensionName": ".md",
            "appName": "Typora",
            "appPath": "C:\\Program Files\\Typora\\Typora.exe",
            "args": [
                "${file}"
            ]
        }

```

