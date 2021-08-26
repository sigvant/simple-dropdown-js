// when the user clicks on the button, toggle between hiding and showing
// the dropdown content

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

let dropButton = document.querySelector('.drop-btn');
dropButton.addEventListener('click', myFunction)

// close the droppdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
