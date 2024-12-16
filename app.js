const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

const milks = [
  {
    id: 1,
    name: "Azersud",
    price: 5,
    FatPercent: 1.5,
    MadeIn: "Azerbaijan",
  },
  {
    id: 2,
    name: "Palsud",
    price: 4,
    FatPercent: 2,
    MadeIn: "Azerbaijan",
  },
  {
    id: 3,
    name: "Atena",
    price: 2,
    FatPercent: 3,
    MadeIn: "Georgia",
  },
];

// 1.
// const expensiveProducts = products.filter((product) => product.price > 50);
// console.log(expensiveProducts);

// 2.
// const categoryFilter = products.filter((product) => product.category == "Electronics");
// console.log(categoryFilter);

// 3.
// const categoryFilterFirst = products.find((product) => product.category == "Clothes");
// console.log(categoryFilterFirst);

// 4.
// const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
// console.log(totalPrice);

// 5.
// const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
// const averagePrice = totalPrice / products.length;

// console.log(averagePrice);
