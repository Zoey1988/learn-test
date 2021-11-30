export function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}

export function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(value, length) {
  if (value.length <= length) {
    return value;
  }
  return `${value.substring(0, length)}...`;
}
