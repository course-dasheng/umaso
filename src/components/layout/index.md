---
group:
  title: 布局组件
---

## Layout 布局

通过基础的 24 分栏，迅速简便的创建布局。


### 基础布局

使用单一分栏创建基础的栅格布局。

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局，col组件的 `span` 属性默认是24。

### 常见页面布局

```tsx
import React from 'react'
import { ElCol, ElRow } from 'umaso'

export default () => (
  <>
    {/* 在 el-row中，el-col直接占 24份 */}
    <ElRow className="row-bg">
      <ElCol span={24}><div className="grid-content bg-purple-dark"></div></ElCol>
    </ElRow>

    {/* 在 el-row中，左 右 el-col占 12份 */}
    <ElRow className="row-bg">
      <ElCol span={12}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={12}><div className="grid-content bg-purple-light"></div></ElCol>
    </ElRow>

    {/* 在 el-row中，左 中 右 el-col各占 8份 */}
    <ElRow className="row-bg">
      <ElCol span={8}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={8}><div className="grid-content bg-purple-light"></div></ElCol>
      <ElCol span={8}><div className="grid-content bg-purple"></div></ElCol>
    </ElRow>

    {/* 在 el-row中，四个 el-col各占 6份 */}
    <ElRow className="row-bg">
      <ElCol span={6}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={6}><div className="grid-content bg-purple-light"></div></ElCol>
      <ElCol span={6}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={6}><div className="grid-content bg-purple-light"></div></ElCol>
    </ElRow>

    {/* 在 el-row中，六个 el-col各占 4份 */}
    <ElRow className="row-bg">
      <ElCol span={4}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={4}><div className="grid-content bg-purple-light"></div></ElCol>
      <ElCol span={4}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={4}><div className="grid-content bg-purple-light"></div></ElCol>
      <ElCol span={4}><div className="grid-content bg-purple"></div></ElCol>
      <ElCol span={4}><div className="grid-content bg-purple-light"></div></ElCol>
    </ElRow>

    <br/>

    <style>{FillStyles()}</style>
  </>
)

function FillStyles() {
  return `
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 5px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  `
}
```
