export function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay * 1000));
}
