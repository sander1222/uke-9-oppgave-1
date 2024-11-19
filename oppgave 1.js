const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//1 filters out products that are less than 200 kr
const affordableProducts = products.filter((product) => product.price < 200);
// consol logger affordelbeProducts
console.log(affordableProducts);

//2   maps through and grabs only the names
const productNames = products.map((product) => product.name);

// logs the names
console.log(productNames);

//3 filters the products to only include (electronics) and maps to just the names
const electronicProductNames = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.name);

// logs electronic products
console.log(electronicProductNames);

//4 checks if there is any product that costs more than 1000
const hasExpensiveProduct = products.some((product) => product.price > 1000);

// Logs true if there's a product over 1000 false otherwise
console.log(hasExpensiveProduct);

//5  reduces the products array to get the total cost
const totalCost = products.reduce((sum, product) => sum + product.price, 0);

// logs the total cost of all products
console.log(totalCost);
