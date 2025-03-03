/* JS enabled so we can remove that class (show the button) */
document.documentElement.classList.remove('no-js');

/* constants */
const button = document.getElementById("toggleButton");

/* check local storage for preference */
if (localStorage.getItem('theme') === 'drk') {
    document.body.classList.add('drk-theme');
}



button.addEventListener("click", () => {
    document.body.classList.toggle("drk-theme");
    /* set preference/last theme used in local storage */
    if (document.body.classList.contains('drk-theme')) {
        localStorage.setItem('theme', 'drk');
    } else {
        localStorage.removeItem('theme');
    }
});