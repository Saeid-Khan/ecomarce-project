// @ts-nocheck
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

// @ts-ignore
menuIcon.addEventListener("click", ()=>{
    if(menu.className==="hidden"){
        menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
});