M.AutoInit();

const ortho = document.querySelector("#orthotics");
const orthocont = document.querySelector("#orthocont");
const orthosym = document.querySelector("#orthosym");

const nail = document.querySelector("#nail");
const nailcont = document.querySelector("#nailcont");
const nailsym = document.querySelector("#nailsym");

const foot = document.querySelector("#footpain");
const footcont = document.querySelector("#footcont");
const footsym = document.querySelector("#footsym");

const diab = document.querySelector("#diabetic");
const diabcont = document.querySelector("#diabcont");
const diasym = document.querySelector("#diasym");


function expServices(param){
if(param == "orthotics"){
    if(ortho.style.visibility == "hidden"){
    ortho.style.visibility = "visible";
    ortho.style.opacity = 1;
    orthocont.style.height = '27vh';
    orthosym.innerHTML = "remove";
    console.log("orthotics");
    } else {
        ortho.style.visibility = "hidden";
        ortho.style.opacity = 0;
        orthocont.style.height = '14vh';
        orthosym.innerHTML = "add";
        console.log("closed");
    }
}
else if(param == "nail"){
    if(nail.style.visibility == "hidden"){
    nail.style.visibility = "visible";
    nail.style.opacity = 1;
    nailcont.style.height = "27vh";
    nailsym.innerHTML = "remove";
    console.log("nail");
    } else {
        nail.style.visibility = "hidden";
        nail.style.opacity = 0;
        nailcont.style.height = "13vh";
        nailsym.innerHTML = "add";
        console.log("closed");
    }
}

else if(param == "footpain"){
    if(foot.style.visibility == "hidden"){
    foot.style.visibility = "visible";
    foot.style.opacity = 1;
    footcont.style.height = "32vh";
    footsym.innerHTML = "remove";
    console.log("footpain");
    } else {
        foot.style.visibility = "hidden";
        foot.style.opacity = 0;
        footcont.style.height = "16vh";
        footsym.innerHTML = "add";
        console.log("closed");
    }
}

else if(param == "diabetic"){
    if(diab.style.visibility == "hidden"){
    diab.style.visibility = "visible";
    diab.style.opacity = 1;
    diabcont.style.height = "32vh";
    diasym.innerHTML = "remove";
    console.log("diabetic");
    } else {
        diab.style.visibility = "hidden";
        diab.style.opacity = 0;
        diabcont.style.height = "16vh";
        diasym.innerHTML = "add";
        console.log("closed");
    }
}

}



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  var instance = M.Parallax.getInstance(elem);