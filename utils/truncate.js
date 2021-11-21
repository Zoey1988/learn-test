export function truncate(value, length) {
  if (value.length <= length) {
    return value
  }
  return `${value.substring(0, length)}...`
}
