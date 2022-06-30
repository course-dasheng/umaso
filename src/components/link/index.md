---
group:
  title: 基础组件
---

## Link

### Type

```tsx
import React from 'react'
import { Link } from 'umaso'

export default () => <div>
  <Link>默认</Link>
  <Link type="primary">测试</Link>
  <Link type="success">测试</Link>
  <Link type="warning">测试</Link>
  <Link type="danger">测试</Link>
  <Link type="info">测试</Link>
</div>
```

### Disabled

```tsx
import React from 'react'
import { Link } from 'umaso'

export default () => <div>
  <Link disabled>默认</Link>
  <Link type="primary" disabled>测试</Link>
  <Link type="success" disabled>测试</Link>
  <Link type="warning" disabled>测试</Link>
  <Link type="danger" disabled>测试</Link>
  <Link type="info" disabled>测试</Link>
</div>
```

### 文字下划线

```tsx
import React from 'react'
import { Link } from 'umaso'

export default () => <div>
  <Link>百度</Link>
  <Link href="https://www.baidu.com" underline={false}>百度</Link>
</div>
```


### Link跳转

```tsx
import React from 'react'
import { Link } from 'umaso'

export default () => <div>
  <Link href="https://www.baidu.com">百度</Link>
</div>
```

### Slot

```tsx
import React from 'react'
import { Link } from 'umaso'

export default () => <div>
  <Link>
    <span>这是个props.children</span>
  </Link>
</div>
```

<API />
