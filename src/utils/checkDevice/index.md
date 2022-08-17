
## checkDevice

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------  | ---- | ---- | ---- | ------ | ---- |


Demo:

```tsx | pure
import React from 'react';
import { checkDevice } from '@developer-ones/utils';


/**
 * checkDevice
 * isIos() isAndroid() isMobile() isIE() isXp()
 * @return boolean
 */ 

export default () => {
  if (checkDevice.isIos()) {
    console.log("in iOS device");
  }

  if (checkDevice.isMobile()) {
    console.log("in mobile device");
  }
};
```