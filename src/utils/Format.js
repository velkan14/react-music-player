const formatPrice = (price, currency) => {
  if (price < 0) return "-";

  const formated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price);

  return String(formated);
};

const formatDate = (date) => {
  return String(
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
  );
};

const formatMillis = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export { formatPrice, formatDate, formatMillis };
