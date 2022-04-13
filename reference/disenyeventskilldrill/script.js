
function update() {
    var dropdownMenu = d3.select("#diseny").node();
    console.log(dropdownMenu.value);
}

// Event trigger
d3.select("body").on("change",update)
