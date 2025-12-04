let form = document.querySelector("form");
let body = document.querySelector("body");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submitted");

    let div = document.createElement("div");
    div.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);
    let h1 = document.createElement("h1");
    h1.textContent = inputs[1].value;
    let h3 = document.createElement("h3");
    h3.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;
    body.appendChild(div);
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(p);

    inputs.forEach(function(e){
        if(e.type !== "submit") e.value = "";
    })


})
