filterSelection("all") // Execute the function and show all columns

//show or hide based on filter text in classname
function filterSelection(filter){
    let x = document.getElementsByClassName("project");
    for (let i = 0; i < x.length; i++) {
        if (filter == "all" || x[i].className.indexOf(filter) > -1) {
            x[i].style.display = "block";
        } 
        else {
            x[i].style.display = "none";
        }
    }
}

//set active button
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}