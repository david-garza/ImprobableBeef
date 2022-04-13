var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("lunch", trace, layout);

var drinkData = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini",
     "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke",
      "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];

var layout2={title: "Drink Survey",
xaxis: {title: "Drink Option"},
yaxis: {title: "Number of Respondents"}};

Plotly.newPlot("drinks",drinkData,layout2);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("pie", data, layout);

var trace =[{
    x: [1,3,-3,-5,6,7,-9],
    y: [-2,-5,-6,0,4,8,3],
    type: "scatter",
    mode:"markers"
}];

var layout = {
    title: "Scatter Plot",
    xaxis: {title: "X Values"},
    yaxis: {title: "Y Values"}
};

Plotly.newPlot("scatter",trace,layout);

// Mapping function examples
var numbers = [0,2,4,6,8];

var plusFive = numbers.map(num=>num+5);
console.log(plusFive);

// Map to retrive data
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);

// Filter example
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// Return only animals that start with S
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startWithS = words.filter(word => {
    let letters =word.split("");
    if(letters[0] === 's'){
       return word;
   }
});

console.log(startWithS);

// Slice the words
var wordSlice = words.slice(0,3);
console.log(wordSlice);