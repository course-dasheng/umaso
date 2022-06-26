---
group:
  title: 基础组件
---

## 标签

Demo: 基本用法，通过 `size` 控制大小

```tsx
import React, { useState } from 'react'
import { Button, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return <div>
    <Tag color="magenta" closeable={true} visible={visible} >测试</Tag>
  </div>
}
```

Demo: 基本用法，通过 `type` 和 `color` 控制颜色，`effect` 控制配色方案

```tsx
import React, { useState } from 'react'
import { Button, Tag } from 'umaso'

export default () => {
  const [visible, setVisible] = useState(true)

  return <div>
    <Tag color="magenta" closeable={true} visible={visible} >测试</Tag>
  </div>
}
```

Demo: `visible` 控制开启和关闭，`onClose` 回调，`closeable` 开启关闭按钮，`closeIcon` 传入 `Icon compoonent`

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

 <!-- TODO: 去掉 api 里多余的选项 -->
 <!-- key 报错 -->
<API />
