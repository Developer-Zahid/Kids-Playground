//=========Mobile Menu Toggler js=========//
let navToggler = document.querySelector(".navbar__toggler");
let navMenu = document.querySelector(".navbar__menu");
navToggler.addEventListener("click", ()=>{
    navToggler.classList.toggle("show")
    navMenu.classList.toggle("show")
})
//=========Custom Cursor js=========//
window.addEventListener("mousemove", (e)=>{
    let cursorInner = document.querySelector("#cursor-inner");
    let cursorOuter = document.querySelector("#cursor-outer");
    cursorInner.style.top = e.clientY + "px";
    cursorInner.style.left = e.clientX + "px";
    cursorOuter.style.top = e.clientY + "px";
    cursorOuter.style.left = e.clientX + "px";
})
//=========Hide the Inspect tool js=========//
document.onkeydown = (e)=>{
    const inspectTool = e.charCode || e.keyCode;
    if(inspectTool == 123 || inspectTool == 85 || inspectTool == 83 || inspectTool == 73){
        e.preventDefault();
    }
}