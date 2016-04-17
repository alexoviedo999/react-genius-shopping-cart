
export function formatMoney(cents){
  const dollars = (cents / 100.0).toFixed(2);
  return `$${dollars}`
}
