export function capitalize(str: string) {
  if (str.length == 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.slice(1);
}
