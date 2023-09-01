const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

console.log(burgerMenu);

if(burgerMenu) {
  burgerMenu.addEventListener('click', function(e) {
    burgerMenu.classList.toggle("_open");
    menu.classList.toggle("_open");
    document.body.classList.toggle("_lock");
  })
}

// ===========  select-box  ======================================
const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

[].forEach.call(selected, function(item) {
  item.addEventListener("click", function(item) {
    let optionsContainer = item.path[0].previousSibling.previousSibling;
    optionsContainer.classList.toggle("active");                   //  options-container
  });
});

console.log(selected);
// ---------------------------------------------------------------------------------------------------------------   \\
optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});



