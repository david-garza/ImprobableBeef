// Skill Drill 12.3.2
d3.json("samples.json").then(function(data){
    let person = Object.entries(data.metadata[0]);
    person.forEach(([first,last]) => console.log(first+ ':'+last));
});