function carInfo(manufacturer: string, model: string, ...options: any[]) {
  const car = {
    manufacturer: manufacturer,
    model: model,
  };

  // Add any additional options to the car object
  options.forEach((option) => {
    const key = Object.keys(option)[0];
    const value = option[key];
    car[key] = value;
  });

  return car;
}

// Call the function with required and optional arguments
const car1 = carInfo("civi", "2019", { color: "blue" }, { sunroof: true });
console.log(car1);