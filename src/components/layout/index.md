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
import { ElRow } from 'umaso'

export default () => (
  <>
    <ElRow type="flex">AAA</ElRow>
    <ElRow align="bottom">BBBB</ElRow>
  </>
)

```
