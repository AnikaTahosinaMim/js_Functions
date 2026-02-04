function searchByPrefix(phonebook, prefix) {
  //   console.log(phonebook, prefix);
  let result = [];
  for (const item in phonebook) {
    if (item.startsWith(prefix)) {
      result.push(item);
    }
  }
  return result;
}
const output = searchByPrefix(
  { mina: "013", mim: "014", rina: "015" },
  (prefix = "mi"),
);

console.log(output);
