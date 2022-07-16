---
group:
  title: 基础组件
---

## 间距
### 基本用法
通过 `size` 控制大小，通过传入 `onClick` 回调捕获点击事件

```tsx
import React, { useState } from 'react'
import { Space, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <Space>
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
        <Tag visible={visible} >标签 4</Tag>
        <Tag closeable={true} visible={visible} >标签 5</Tag>
        <Tag onClick={() => { console.log('click tag') }} >标签 6</Tag>
      </Space>
    </div>
  )
}
```

### 垂直间距

通过调整 `direction` 属性设置为 `vertical`，调整间距和排版为垂直型
```tsx
import React, { useState } from 'react'
import { Space, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <Space direction="vertical">
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
        <Tag visible={visible} >标签 4</Tag>
        <Tag closeable={true} visible={visible} >标签 5</Tag>
        <Tag onClick={() => { console.log('click tag') }} >标签 6</Tag>
      </Space>
    </div>
  )
}
```

### 间距大小
通过 `size` 控制间距大小，分别为 `small`、`middle` 和 `large`，默认为 `large`，也可以传入数字，自定义间距尺寸

```tsx
import React, { useState } from 'react'
import { Button, Space, Tag } from 'umaso'

export default () => {

  return (
    <div>
      <div>
        <Space size={'small'}>
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
      <div>
        <Space size={'middle'}>
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
      <div>
        <Space size={'large'}>
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
    </div>
  )
}
```
### 对齐
通过 `align` 属性设置对齐方式

```tsx
import React, { useState } from 'react'
import { Space, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <div>
        <Space align="center">
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
      <div>
        <Space align="start">
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
      <div>
        <Space align="end">
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
      <div>
        <Space align="baseline">
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>
    </div>
  )
}
```

### 自动换行
通过 `size` 控制大小，通过传入 `onClick` 回调捕获点击事件

```tsx
import React, { useState } from 'react'
import { Space, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <Space wrap>
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
        <Tag visible={visible} >标签 4</Tag>
        <Tag closeable={true} visible={visible} >标签 5</Tag>
        <Tag onClick={() => { console.log('click tag') }} >标签 6</Tag>
        <Tag size="mini">标签 7</Tag>
        <Tag size="small">标签 8</Tag>
        <Tag size="medium">标签 9</Tag>
        <Tag size="mini">标签 10</Tag>
        <Tag size="small">标签 11</Tag>
        <Tag size="medium">标签 12</Tag>
      </Space>
    </div>
  )
}
```
### 分隔符
通过 `split` 传入组件或字符对内容分隔

```tsx
import React, { useState } from 'react'
import { Space, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <Space split={'|'}>
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
        <Tag visible={visible} >标签 4</Tag>
        <Tag closeable={true} visible={visible} >标签 5</Tag>
        <Tag onClick={() => { console.log('click tag') }} >标签 6</Tag>
      </Space>
    </div>
  )
}
```
