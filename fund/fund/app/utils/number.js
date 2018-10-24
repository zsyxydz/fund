import accounting from 'accounting'

const TO_PERCENT = (value, radix = 2, abs = false, float = true, placeholder = '--') => (value && typeof value === 'number' ? `${ (abs ? Math.abs(value * (float ? 100 : 1)) : value * (float ? 100 : 1)).toFixed(radix)}%` : placeholder)

const TO_FIXED = (value, radix = 2, placeholder = '--') => (value && typeof value === 'number' ? value.toFixed(radix) : placeholder)

const FORMAT_MONEY = (value, radix = 2, symbol = '', placeholder = '0.00') => ((value && typeof value === 'number') ? accounting.formatMoney(value ? value.toFixed(radix) : 0, symbol, radix, ',') : placeholder)
// return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

const FORMAT_DATE = value => ((value && value.length === 8) ? `${value.slice(0, 4)}.${value.slice(4, 6)}.${value.slice(6, 8)}` : value)

const FORMAT_UNIT = (value) => {
  if (value && typeof value === 'number'){
    if (value.toString().split('.')[0].length >= 9){
      return (value / 100000000).toFixed(2) + '亿';
    }else if (value.toString().split('.')[0].length >= 5){
      return (value / 10000).toFixed(2) + '万';
    }else{
      return value.toFixed(2);
    }
  }else{
    return '0.00';
  }
}

const GET_UNIT = (value) => {
  if (value && typeof value === 'number'){
    if (value.toString().split('.')[0].length >= 9){
      return '亿';
    }else if (value.toString().split('.')[0].length >= 5){
      return '万';
    }else{
      return ''
    }
  }else{
    return '';
  }
}

const FIX_UNIT = (value) => {
  if (value && typeof value === 'number'){
    if (value.toString().split('.')[0].length >= 9){
      return parseFloat(TO_FIXED(value / 100000000, 2));
    }else if (value.toString().split('.')[0].length >= 5){
      return parseFloat(TO_FIXED(value / 10000, 2)) ;
    }else{
      return parseFloat(TO_FIXED(value, 2));
    }
  }else{
    return '0.00';
  }
}

module.exports = {
  TO_PERCENT,
  TO_FIXED,
  FORMAT_MONEY,
  FORMAT_DATE,
  FORMAT_UNIT,
  GET_UNIT,
  FIX_UNIT
}
