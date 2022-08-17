/**
 * 
 * @param amount 
 * @param symbol 
 * @param decimalCount 
 * @param decimal 
 * @param thousands 
 * @returns 
 */
export const formatMoney = function(amount: any,  symbol = "¥",  decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i: any = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j: number = (i.length > 3) ? i.length % 3 : 0;

    return symbol + negativeSign + (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};