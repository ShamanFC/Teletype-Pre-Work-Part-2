var cities = [
  "Denver",
  "Boulder",
  "Black Hawk",
  "Aurora"
];

var cityList = document.querySelector("ul.list-cities");


for (var i = 0; i < cities.length; i++) {
  var city = document.createElement('li');
  console.log(city);
  city.innerHTML = cities[i];
  cityList.append(city);
};
