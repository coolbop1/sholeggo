let mobile_overlay = document.getElementById("mobile_overlay");
let inner_mobile_overlay = document.getElementById("inner_overlay");

const openmenu = () => {
    mobile_overlay.classList.replace("myhide", "myshow");
    setTimeout(() => {
        inner_mobile_overlay.classList.replace("menu_slideout", "menu_slidein");
    }, 500);
}

const closemenu = () => {
    inner_mobile_overlay.classList.replace("menu_slidein", "menu_slideout");
    setTimeout(() => {
        mobile_overlay.classList.replace("myshow", "myhide");
    }, 1000);
}