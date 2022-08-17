
## formatMoney

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------  | ---- | ---- | ---- | ------ | ---- |
|  amount  |  金额      |   true |  string number   |        |      |
|  symbol  |  货币符号    |    |   string   |    ¥    |      |
|  decimalCount  |  保留几位    |    |   number   |    2    |      |
|  decimal  |  小数点符号    |    |   string   |    .   |      |
|  thousands  |  千位分割符    |    |   string   |    ,    |      |


Demo:

```tsx | pure
import { formatMoneys } from '@developer-ones/utils';


formatMoney(12345, "¥") => // ¥12,345
formatMoney(12345.6789, "¥", 3) => // ¥12,345.678

```