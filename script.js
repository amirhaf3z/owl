

let toggleNavStatus = false;


let toggleNav = function() {

    let getSidebar = document.querySelector(".toggle-sidebar");
    let getSidebarUl = document.querySelector(".toggle-sidebar ul");
    let getSidebarTitle = document.querySelector(".toggle-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".toggle-sidebar a");



    if(toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "240px";
        getSidebarTitle.style.opacity = "0.5";
        // ta alla länkar som ingår menyn

        let arrayLength = getSidebarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
         
        toggleNavStatus = true;
    }

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

function myFunction() {
    let w = window.outerWidth;
    let txt = " " ;
    document.getElementById("demo").innerHTML = txt;

    if ( w > 768 ) {
        alert("Desktop view");
    }

    else if( w < 669) {
        alert("Mobil visit!");
    }
    
}


    
