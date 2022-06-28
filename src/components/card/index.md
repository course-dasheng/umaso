---
group:
  title: 基础组件
---

## Card 卡片

### 基本使用

```tsx
import React from 'react'
import { Button, ElCard } from 'umaso'

export default () => {
  return (
    <>
      <ElCard
        header={<h3>header-test</h3>}
        bodyStyle={{ padding: '20px' }}
        shadow="hover"
      >
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          className="image"
        />
        <div style={{ padding: '14px' }}>
          <span>好吃的汉堡</span>
          <div className="bottom clearfix">
            <Button type="primary">
              操作按钮
            </Button>
          </div>
        </div>
      </ElCard>
    </>
  )
}
```

### Attributes

| 参数       | 说明                                           | 类型   | 可选值                 | 默认值              |
| ---------- | ---------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | 设置 header，也可以通过 `slot#header` 传入 DOM | string | —                      | —                   |
| body-style | 设置 body 的样式                               | object | —                      | { padding: '20px' } |
| shadow     | 设置阴影显示时机                               | string | always / hover / never | always              |