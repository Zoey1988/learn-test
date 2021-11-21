export const numberUnits = [
  { value: 1, fa: '', en: '', fa_symbol: '' },
  { value: 1e3, fa: 'هزار', en: 'k', fa_symbol: 'کیلو' },
  { value: 1e6, fa: 'میلیون', en: 'M', fa_symbol: 'مگا' },
  { value: 1e9, fa: 'میلیارد', en: 'G', fa_symbol: 'گیگا' },
  { value: 1e12, fa: 'بیلیون', en: 'T', fa_symbol: 'ترا' },
  { value: 1e15, fa: 'بیلیارد', en: 'P', fa_symbol: 'پتا' },
]

export function withUnits(num, digits = 0, type = 'fa') {
  num = Number(num)
  if (isNaN(num)) {
    return NaN
  }
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = numberUnits.length - 1; i > 0; i--) {
    if (num >= numberUnits[i].value) {
      break
    }
  }
  const result = {
    count: (num / numberUnits[i].value).toFixed(digits).replace(rx, '$1'),
    unit: numberUnits[i][type],
  }
  if (result.count === '1000') {
    result.count = '1'
    result.unit = numberUnits[i + 1][type]
  }
  return result
}
