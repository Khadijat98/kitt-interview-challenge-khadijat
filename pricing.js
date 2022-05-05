export const calculatePricing = (bookingLength) => {
  const pricePerMin = 2;
  const pricePerHour = 22;
  const pricePerDay = 60;
  const pricePerWeek = 105;

  let price;

  if (Number.isInteger(bookingLength) && bookingLength > 0) {
    if (bookingLength <= 60) { // check if duration is less than or equal to 60 mins
      price = pricePerMin * bookingLength;
      if (price > pricePerHour) {
        price = pricePerHour;
      }
    }
    else if (bookingLength > 60 && bookingLength <= 1440) { // check if duration is between 1 hour and 24 hours
      price = Math.round(pricePerHour * (bookingLength / 60));
      if (price > pricePerDay) {
        price = pricePerDay;
      }
    }
    else if (bookingLength > 1440 && bookingLength <= 10080) { // check if duration is between 1 day and 1 week
      price = Math.round(pricePerDay * (bookingLength / 1440));
      if (price > pricePerWeek) {
        price = pricePerWeek;
      }
    }
    else {
      price = Math.round(pricePerWeek * (bookingLength / 10080));
    }
    return price;
  }
  else {
    return "Error. Please enter the booking duration as a whole number.";
  }
}