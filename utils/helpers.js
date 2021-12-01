export function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}

export function upperFirst(str) {
  const strToArr = str.split(' ');
  return strToArr
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function truncate(value, length) {
  if (value.length <= length) {
    return value;
  }
  return `${value.substring(0, length)}...`;
}
