export function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay * 1000));
}

export const getAnimeSubName = (name: string) => {
  const arr = name.split("-dub");

  return arr;
};
