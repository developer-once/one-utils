
## getDomByUniquedId

待补充


| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------  | ---- | ---- | ---- | ------ | ---- |
| queryString | 查询的节点 | true | string |     |      |
| type | 查询方式的类型 | false | string |     |      |
| root | 元素 | false | element |     |      |



Demo:

```tsx | pure
import React from 'react';
import { getDomByUniquedId } from '@developer-ones/utils';

getDomByUniquedId("th.ant-table-cell:nth-child(2)", "querySelector", document);
```