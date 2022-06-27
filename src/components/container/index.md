---
group:
  title: 布局组件
---

## Container 容器组件

用于布局的容器组件，方便快速搭建页面的基本结构：

`<ElContainer>`：外层容器。当子元素中存在 `<ElHeader>` 或者 `<ElFooter>` 时，全部子元素会进行垂直从上到下的排列，反之会进行水平从左到右的排列。

`<ElHeader>`：头部顶栏的容器。

`<ElAside>`：侧边栏的容器。

`<ElMain>`：主要内容区域的容器。

`<ElFooter>`：底部底栏的容器。

> 以上组件都采用了 flex 布局，使用前请确定浏览器是否兼容。此外，`<ElContainer>` 的子元素只能是后四者以及`<ElContainer>`，后四者的父元素只能是`<ElContainer>`。后四者的子元素可以是其它元素，比如普通元素`div`、组件 `ElMenu`等。


### 常见页面布局

```tsx
import React from 'react'
import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from 'umaso'

export default () => (
  <>
    {/* 上下 */}
    <ElContainer>
        <ElHeader>Header</ElHeader>
        <ElMain>Main</ElMain>
    </ElContainer>

    <br/>

    {/* 上中下 */}
    <ElContainer>
        <ElHeader>Header</ElHeader>
        <ElMain>Main</ElMain>
        <ElFooter>Footer</ElFooter>
    </ElContainer>

    <br/>

    {/* 左右 */}
    <ElContainer>
        <ElAside width="200px">Aside</ElAside>
        <ElMain>Main</ElMain>
    </ElContainer>

    <br/>

    {/* 上中<左右> */}
    <ElContainer>
        <ElHeader>Header</ElHeader>
        <ElContainer>
            <ElAside width="200px">Aside</ElAside>
            <ElMain>Main</ElMain>
        </ElContainer>
    </ElContainer>

    <br/>

    {/* 上中<左右<中下>> */}
    <ElContainer>
        <ElHeader>Header</ElHeader>
        <ElContainer>
            <ElAside width="200px">Aside</ElAside>
            <ElContainer>
                <ElMain>Main</ElMain>
                <ElFooter>Footer</ElFooter>
            </ElContainer>
        </ElContainer>
    </ElContainer>

    <br/>

    {/* 左右<上中> */}
    <ElContainer>
        <ElAside width="200px">Aside</ElAside>
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>Main</ElMain>
        </ElContainer>
    </ElContainer>

    <br/>

    {/* 左右<上中下> */}
    <ElContainer>
        <ElAside width="200px">Aside</ElAside>
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>Main</ElMain>
            <ElFooter>Footer</ElFooter>
        </ElContainer>
    </ElContainer>

    <br/>

    <style>{FillStyles()}</style>
  </>
)

function FillStyles() {
  return `
    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
  `
}
```


### 实例

```tsx
import React from 'react'
import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from 'umaso'

export default () => {
  const asideList = Array(20).fill(1).map((_, i) => `菜单项 ${i + 1}`)
  const headerTitle = 'Hello Wrold'
  const mainContentList = Array(20).fill(1).map((_, i) => ({
    id: i + 1,
    name: `龙傲天 ${i + 1}`,
    address: `浦东新区 唐镇 ${i + 1}`,
    message: `【狗头】该交保险费了，放学后别跑，到后山等我  ${i + 1}`
  }))

  return (
    <>
      <ElContainer style={{ height: '500px', border: '1px solid #eee' }}>
        <ElAside width="250px" style={{ backgroundColor: 'rgb(238, 241, 246)' }}>
         {
            asideList.map((item) => {
              return <p key={item}
                dangerouslySetInnerHTML={{ __html: `<a href="javascript:void(0);">${item}</a>` }}>
              </p>
            })
          }
        </ElAside>

        <ElContainer>
          <ElHeader>
            <div>{ headerTitle }</div>
          </ElHeader>
          <ElMain>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>address</th>
                  <th>info</th>
                </tr>
              </thead>
              <tbody>
              {
                mainContentList.map((row) => {
                  return (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.address}</td>
                      <td>{row.info}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </ElMain>
        </ElContainer>
      </ElContainer>
      <br/>
      <style>{FillStyles()}</style>
    </>
  )
}

function FillStyles() {
  return `
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
        text-align: center;
    }

    .el-aside {
        color: #333;
        line-height: 16px;
    }
  `
}
```

## Container API

### ElContainer

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal（水平） / vertical（垂直） | 子元素中有 `ElHeader` 或 `ElFooter` 时为 vertical，否则为 horizontal |

### ElHeader

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### ElAside

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### ElFooter

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |

