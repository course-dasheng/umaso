---
group:
  title: 基础组件
---

## 标签

Demo:

```tsx
import React, { useState } from 'react'
import { Button, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return <div>
    <Tag color="magenta" closeable={true} visible={visible} >测试</Tag>
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