
## formatTime


| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------  | ---- | ---- | ---- | ------ | ---- |
|  time  |  时间      |   |  string number   |    new Date().getTime()    |      |
|  format  |  format 类型  |    |   string   |   'YYYY-MM-DD hh:mm:ss' 'YYYY-MM-DD'  'YYYY-MM' 'YYYY'  'MM-DD'  'hh:mm:ss'  'hh:mm' 'computed'   |   |



Demo:

```tsx | pure
import React from 'react';
import { formatTime } from '@developer-ones/utils';

type formatType = 'YYYY-MM-DD hh:mm:ss' | 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY' | 'MM-DD' | 'hh:mm:ss' | 'hh:mm' | 'computed';

export default () => {
  return (
    /**
     * @description 时间戳格式转换以及计算
     * @param time: number | string
     * @param format: string
     * @return string
     */
    <div>formatTime(new Date(), 'YYYY-MM-DD hh:mm')</div>
    <div>formatTime(new Date(), 'YYYY-MM-DD')</div>
    <div>formatTime(new Date() - 100000, 'computed')</div> => '2小时之前'
  )
};
```