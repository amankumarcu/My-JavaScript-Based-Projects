const users = [
    {
        name : "Aman Kumar",
        url : "https://images.unsplash.com/photo-1764712754791-8627ebded3f6?q=80&w=990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        info : "I am a Software Developer"
    },
    {
    name: "Rohan Mehta",
    url: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "I am a Backend Developer"
},                      
{
    name: "Kunal Sharma",
    url: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "I am a Mobile Developer"
},
{
    name: "Aman Verma",
    url: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "I am a Creative Designer"
},
{
    name: "Priya Nair",
    url: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: "I am a Cloud Engineer"
}
];
// create main wrapper
const wholePage = document.createElement("div");
wholePage.classList.add("whole-page");

// create heading
const heading = document.createElement("h1");
heading.id = "heading";
heading.textContent = "Search Filter";
heading.id = "heading";

// create search box container
const searchBox = document.createElement("div");
searchBox.classList.add("search-box");

// create input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search";
input.classList.add("input");

// create button
const button = document.createElement("button");
button.textContent = "Search";
button.classList.add("button");

// append input + button into searchBox
searchBox.appendChild(input);
searchBox.appendChild(button);

// append heading + searchBox into the page
wholePage.appendChild(heading);
wholePage.appendChild(searchBox);

function showCards(arr){
    let container = document.createElement("div");
    container.classList.add("card-container");
    arr.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundImage = `url(${element.url})`;
        let bottom = document.createElement("div");
        bottom.classList.add("bottom");
        let h3 = document.createElement("h3");
        h3.textContent = element.name;
        h3.classList.add("name");
        let h4 = document.createElement("h4");
        h4.textContent = element.info;
        h4.classList.add("info");
        bottom.appendChild(h3);
        bottom.appendChild(h4);
        card.appendChild(bottom);
        container.appendChild(card);
    });
    wholePage.appendChild(container);
}
showCards(users);
// create div
const noteDiv = document.createElement("div");
noteDiv.id = "note";
noteDiv.classList.add("note");
// create h5
const h5 = document.createElement("h5");
h5.textContent = "This project is made for my learning phase : Aman Kumar";
h5.classList.add("h5");
// append h5 -> div -> footer
noteDiv.appendChild(h5);
wholePage.appendChild(noteDiv);
document.body.appendChild(wholePage);

// Main Filtering Code
let btn = document.querySelector("button");
let inp = document.querySelector("input");
btn.addEventListener("click",()=>{
    const old = wholePage.querySelector(".card-container");
    if (old) old.remove();
    const note = wholePage.querySelector("#note");
    if (note) note.remove();
    const newusers = users.filter(function(user){
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    })
    if(newusers.length === 0) alert("no such name is available");
    showCards(newusers);
});

