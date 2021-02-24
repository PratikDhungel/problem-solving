const bigIntN = BigInt(100);
let product = 1n;

for (let i = 2n; i <= bigIntN; i++) {
  product = product * i;
}

product = product.toString();
console.log(product);
