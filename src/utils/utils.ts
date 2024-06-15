export function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay * 1000));
}

export const getAnimeSubName = (name: string) => {
  const arr = name.split("-dub")[0];

  return arr;
};

export const wati = async (time: number) => {
  await new Promise((reslve) => setTimeout(() => reslve, time * 1000));
};
