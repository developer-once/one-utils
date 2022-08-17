/**
 * --- 通过唯一对应的 ID 找到元素 ---
 * @param { string } id
 * @param { string } type
 * @returns { Element }
 */
var SPLIT_MODE_CODE = '  ';

export const getDomByUniquedId = (queryString: string, type?: string, root?: any): any => {
  let result = null;
  queryString = queryString ? queryString.trim() : '';
  
  try {
    let findRoot = root || document;

    if (!findRoot || !queryString) {
      return;
    }

    let splitedSelector = queryString.split(/\s{2}/);

    if (!type) {
      if (splitedSelector.length > 1) {
        type = 'split';
      }
    }

    switch (type) {
      // TODO 生成ID时避免使用 id
      case 'getElementById':
        // 仅body有
        result = findRoot.getElementById ? findRoot.getElementById(queryString) : null;
        break;

      case 'getElementsByName':
        // 仅body有
        result = findRoot.getElementsByName ? findRoot.getElementsByName(queryString)[0] : null;
        break;

      case 'querySelector':
        // getElementsByTagName
        result = findRoot.querySelector ? findRoot.querySelector(queryString) : null;
        break;

      case 'split':
        var selectors = splitedSelector.filter(function (item) {
          return item ? !!item.trim() : false;
        });

        if (selectors.length > 1) {
          var currentSelector = selectors[0];
          var matchedChildNodes = findRoot.querySelectorAll(currentSelector);
          // 只查找符合要求的子元素
          var currentTarget = matchedChildNodes[0] || getDomByUniquedId(currentSelector);

          if (root) {
            currentTarget = [].find.call(matchedChildNodes, function (item: any) {
              return item.parentNode === root;
            });
          }

          selectors.splice(0, 1);
          var nextString = selectors.join(SPLIT_MODE_CODE);
          result = getDomByUniquedId(nextString, 'split', currentTarget);
        } else {
          // 全局查找符合要求的，root 比较
          var matchedElements = document.querySelectorAll(selectors[0]);
          result = [].find.call(matchedElements, function (item: any) {
            return item.parentNode === root;
          });
        }
        break;

      default:
        result = getDomByUniquedId(queryString, 'getElementById') ||
          getDomByUniquedId(queryString, 'getElementsByName') ||
          getDomByUniquedId(queryString, 'querySelector');
    }
  } catch (err: any) {}

  return result;
}