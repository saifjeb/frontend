function createNav() {
    var navButton = document.getElementById("navButton");
    if (navButton.innerHTML === "remove nav") {
    var nav = document.getElementsByTagName("nav")[0];
        nav.innerHTML = "";
        navButton.innerHTML = "create Nav";
        return;
    } 
    alert("Nav created");
    var nav = document.getElementsByTagName("nav")[0];
    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerHTML = "Home ";
    ul.appendChild(li1)
    nav.appendChild(ul);
    navButton.innerHTML = "remove nav";
}
  
function createmain() {
    var mainButton = document.getElementById("mainButton");
    var main = document.getElementsByTagName("main")[0];

    if (mainButton.innerHTML === "remove main") {
        main.innerHTML = "";
        mainButton.innerHTML = "create main";
        return;
    }
    alert("Main created");
    for (let index = 0; index <= 10; index++) {
        var p = document.createElement("p");
        p.innerHTML = "this is paragraph " + (index + 1);
        main.appendChild(p);
    }
    mainButton.innerHTML = "remove main";
}


function createfooter() {
    alert("footer created");
}

