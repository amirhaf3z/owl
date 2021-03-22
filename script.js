// hello github
//när menyn är stängd/ ska funktionen köra false statement

let toggleNavStatus = false;
//en funktion som ska öppna och stänga menyn

let toggleNav = function() {
    // vad funktionen ska hämta från html
    let getSidebar = document.querySelector(".toggle-sidebar");
    let getSidebarUl = document.querySelector(".toggle-sidebar ul");
    let getSidebarTitle = document.querySelector(".toggle-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".toggle-sidebar a");


    // vid false, menyn är stängd/ vid click sidebar blir visible

    if(toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "240px";
        getSidebarTitle.style.opacity = "0.5";
        // ta alla länkar som ingår menyn

        let arrayLength = getSidebarLinks.length;
        // loop/ repeterar koden tills man når antalet länkar
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
         
        toggleNavStatus = true;
    }
    //motsatsen till false/ när sidebar är öppen så ska true statement gälla
    else if(toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden"; 

        toggleNavStatus = false;
    }
       
}
// variabeln w är sidans bredd
function myFunction() {
    let w = window.outerWidth;
    let txt = " " ;
    document.getElementById("demo").innerHTML = txt;
    // om bredden är större än x så gäller funktionen alert
    if ( w > 768 ) {
        alert("Desktop view!!!");
    }
    // annars om den är mindre än x, gäller alert
    else if( w < 669) {
        alert("Mobil visit!");
    }
    
}


    
