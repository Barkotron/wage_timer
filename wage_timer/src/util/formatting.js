export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  export const toTwoDecimals = (num) => {
    return (Math.round(num * 10 ** 2) / 10 ** 2);
}