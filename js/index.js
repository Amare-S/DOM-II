// Your code goes here
const navBar = document.querySelectorAll('nav a');
    Array.from(navBar).forEach(elem => {
        elem.addEventListener('click', function(event){
            event.target.style.color = 'red';
                event.stopPropagation();
        });
   
 });

 const navLinks = document.getElementsByTagName("nav a");
navLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    navLinks.innerHTML += "Sorry can't do that!";
    event.preventDefault();
  });
});