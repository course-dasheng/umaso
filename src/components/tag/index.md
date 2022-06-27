---
group:
  title: 基础组件
---

## 标签
### 基本用法
通过 `size` 控制大小，通过传入 `onClick` 回调捕获点击事件
Demo:

```tsx
import React, { useState } from 'react'
import { Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return <div>
    <Tag>标签 0</Tag>
    <Tag size="mini">标签 1</Tag>
    <Tag size="small">标签 2</Tag>
    <Tag size="medium">标签 3</Tag>
    <Tag visible={visible} >标签 4</Tag>
    <Tag closeable={true} visible={visible} >标签 5</Tag>
    <Tag onClick={() => { console.log('click tag') }} >标签 6</Tag>
  </div>
}
```
### 颜色方案
通过 `type` 可以配置几种基本颜色，通过 `color` 可以传递想要的背景颜色，通过 `effect` 控制配色主题方案

Demo:

```tsx
import React, { useState } from 'react'
import { Tag } from 'umaso'

export default () => {
  return <div>
    <div>type</div>
    <Tag type="success">success</Tag>
    <Tag type="info">info</Tag>
    <Tag type="warning">warning</Tag>
    <Tag type="danger">danger</Tag>
    <br/>
    <div>color</div>
    <Tag effect=" " color="red">red</Tag>
    <Tag effect="plain" color="green">green</Tag>
    <Tag effect="plain" color="magenta">magenta</Tag>
    <Tag effect="dark" color="#2db7f5">#2db7f5</Tag>
    <Tag effect="dark" color="#87d068">#87d068</Tag>
    <br/>
    <div>effect</div>
    <Tag effect="dark" >dark effect</Tag>
    <Tag effect="plain" >plain effect</Tag>
    <Tag effect="light" >light effect</Tag>
  </div>
}
```


### 可移除标签
`visible` 控制开启和关闭，`onClose` 回调，`closeable` 开启关闭按钮，`closeIcon` 传入 `Icon Component`

Demo: 

```tsx
import React, { useState } from 'react'
import { Button, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return <div>
    <Tag visible={visible} >测试</Tag>
    <br/>
    <button onClick={() => {
      setVisible((vis) => {
        console.log(vis)
        return !vis
      })
    }} >关闭</button>
  </div>
}

```

<API />
