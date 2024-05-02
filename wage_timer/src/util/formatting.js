export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toTwoDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
