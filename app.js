let arr = [
  { name: "test", key: 1 },
  { name: "task", key: 2 },
  { name: "tanqo", key: 3 },
  { name: "like", key: 4 },
  { name: "task", key: 5 },
  { name: "trust", key: 6 },
  { name: "test", key: 7 },
  { name: "last", key: 8 },
  { name: "tanqo", key: 9 },
  { name: "elephant", key: 10 },
  { name: "love", key: 11 },
  { name: "small", key: 12 },
  { name: "little", key: 13 },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
let startsWithT = arr.filter(obj => obj.name.startsWith("t"));
console.log("1) Starts with 't':", startsWithT);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
let countStartsAndEndsWithT = 0;
arr.forEach(obj => {
  if (obj.name.startsWith("t") && obj.name.endsWith("t")) {
    countStartsAndEndsWithT++;
  }
});
console.log("2) Count of names starting and ending with 't':", countStartsAndEndsWithT);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"lerinin cemini tapin
let sumKeys = 0;
arr.forEach(obj => {
  if (obj.name.startsWith("t") && obj.name.endsWith("t")) {
    sumKeys += obj.key;
  }
});
console.log("3) Sum of keys (starts and ends with 't'):", sumKeys);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
let replacedNames = arr.map(obj => {
  if (obj.name.endsWith("e")) {
    return { ...obj, name: "SuperDev" };
  }
  return obj;
});
console.log("4) Replace names ending with 'e':", replacedNames);

// 5) "name"-i en uzun olan obyekti tapin
let longestNameObj = arr.reduce((longest, obj) => obj.name.length > longest.name.length ? obj : longest, arr[0]);
console.log("5) Object with the longest name:", longestNameObj);

// 6) "name"-i en uzun olan obyektin key'ni tapin
console.log("6) Key of the object with the longest name:", longestNameObj.key);

// 7) "name"-i en uzun olan obyektin indexin kvadratini hesablayin
let longestNameIndex = arr.findIndex(obj => obj === longestNameObj);
console.log("7) Square of index of the longest name object:", longestNameIndex ** 2);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
let length4Names = arr.filter(obj => obj.name.length === 4);
console.log("8) Names with length 4:", length4Names);

// 9) En boyuk "key"i olan obyektin "name"-ini tapin
let maxKeyObj = arr.reduce((max, obj) => obj.key > max.key ? obj : max, arr[0]);
console.log("9) Name of the object with the largest key:", maxKeyObj.name);

// 10) Terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.
let containsTwoLs = arr.filter(obj => (obj.name.match(/l/g) || []).length === 2);
console.log("10) Objects with exactly two 'l's:", containsTwoLs);

// 11) Terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
let containsTwoTs = arr.filter(obj => (obj.name.match(/t/g) || []).length >= 2);
console.log("11) Objects with at least two 't's:", containsTwoTs);

// 12) Key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
let keyGreaterThan10AndStartsWithL = arr.filter(obj => obj.key > 10 && obj.name.startsWith("l"));
console.log("12) Objects with key > 10 and name starting with 'l':", keyGreaterThan10AndStartsWithL);