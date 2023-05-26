function createCalendar() {
  const person = {
    firstName: "Zelito",
    lastName: "Saide",
    address: {
      city: "Maputo",
      province: "Maputo",
    },
  };

  return function () {
    console.log(`Hello ${person.firstName}`);
    console.log(`Are you from ${person.address.city}?`);
  };
}
