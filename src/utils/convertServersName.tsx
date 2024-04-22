export const convertServerNames = (name: string) => {
  const names = [
    {
      name: "Vidstreaming",
      convert: "vidstreaming",
    },
    {
      name: "Gogo server",
      convert: "gogocdn",
    },
    {
      name: "streamsb",
      convert: "streamsb",
    },
  ];

  const matchedNames = names.map((n) => {
    if (n.name === name) return n.convert;
    return "";
  });

  return matchedNames;
};
