function searchByPrefix(phonebook, prefix) {
  //   console.log(phonebook, prefix);
  let result = [];
  for (const menu in phonebook) {
    // console.log(menu);
    if (menu.startsWith(prefix)) {
      result.push(menu);
    }
  }
  return result;
}
const output = searchByPrefix(
  { rahim: "0181", karim: "0172", rafi: "0193" },
  (prefix = "ra"),
);
console.log(output)
