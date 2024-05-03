export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toTwoDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const hoursToMiliseconds = (h) => {
  return h * 60 * 60 * 1000;
};

export const formattedTime = (time) => {
  const h = Math.floor(time / 1000 / 60 / 60);
  const m = Math.floor((time / 1000 / 60 / 60 - h) * 60);
  const s = Math.floor(((time / 1000 / 60 / 60 - h) * 60 - m) * 60);

  const hh = h < 10 ? `0${h}` : h;
  const mm = m < 10 ? `0${m}` : m;
  const ss = s < 10 ? `0${s}` : s;

  const formattedTime = `${hh}:${mm}:${ss}`;

  return formattedTime;
};
