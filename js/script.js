
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
      document.querySelector('.navbar-collapse').classList.toggle('show');
    });
    // Execute the function and show all columns initially
    filterSelection("all");
  });

// Show or hide based on filter text in classname
function filterSelection(filter) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        const shouldDisplay = filter === "all" || project.classList.contains(filter);
        project.style.display = shouldDisplay ? "block" : "none";
    });
}

// Set active button
const btnContainer = document.getElementsByClassName("filter-buttons")[0];
if (btnContainer) {
    const btns = btnContainer.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            btnContainer.querySelectorAll(".active")[0].classList.remove("active");
            this.classList.add("active");
        });
    });
}
