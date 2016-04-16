
function freeQty(x){
  return function (qty){
     if (x > 0){
       return Math.floor(qty / x);
     }
     else {
       return 0;
     }
  }
}

const Products = [
  {
    code: 'FR1',
    price: '$3.11',
    name: 'Fruit tea',
    promo: 'BOGO - Buy One Get One Free!',
    freeQty: freeQty(2),
    price : (qty) => 311
  },
  {
    code: 'AP1',
    price: '$5.00',
    name: 'Apple',
    promo: 'Only $4.50 when buying 3 or more!',
    freeQty: freeQty(0),
    price : (qty) => qty >= 3 ? 450 : 500
  },
  {
    code: 'CF1',
    price: '$11.23',
    name: 'Coffee',
    promo: null,
    freeQty : freeQty(0),
    price : (qty) => 1123
  }
];

export default Products;
