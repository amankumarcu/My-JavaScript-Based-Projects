let progressbar = document.querySelector("#progress-bar");
let progress = document.querySelector("#progress");
let seconds = 5;
let counter = 0;
let timeout = setInterval(function(){
    if(counter <= 99){
        counter++;
        progressbar.style.width = `${counter}%`;
        progress.textContent = `${counter}%`;
    }else{
        document.querySelector("h3").textContent = "Downloaded...";
        clearInterval(timeout);
    }
},(seconds*1000)/100);