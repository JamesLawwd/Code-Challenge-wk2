document.addEventListener("DOMContentLoaded", function () {
    fetchAndListAnimals();
});



 //Data for the animals
 let animals = [
    {id: 1, name:"Mr.Cute", image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif", "votes": 0},
    {id: 2, name:"Mx. Monkey", image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",  "votes": 0},
    {id: 3, name:"Ms. Zebra", image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",  "votes": 0},
    {id: 4, name:"Dr. Lion", image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",  "votes": 0},
    {id: 5, name:"Mme. Panda", image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",  "votes": 0},
 ]

const fetchAndListAnimals = () => {
    fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(data => {            
            const animals = data.map((animal) => animal.name);

            let listHtml = "";

            for (const animal of animals) {
                listHtml += `<li id="${animal}">${animal}</li>`;
            }
            document.getElementById("list").innerHTML = listHtml;
            
            for (const animal of animals) {
                document.getElementById(animal).addEventListener("click", function () {
                    fetchAndListAnimal(animal)
                });                
            }
        })
        .catch((error) => console.log(error));
};

const fetchAndListAnimal = (input) => {
    fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(data => {
            const animal = data.find(animal => animal.name === input);
            document.getElementById("name").innerHTML = animal.name;
            document.getElementById("image").src = animal.image;
            document.getElementById("votes").innerHTML = animal.votes;
        })
        .catch((error) => console.log(error));
};






