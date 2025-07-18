const dropdown = document.getElementById("channels-dropdown");
const submenu = document.getElementById("channels-nav");

dropdown.addEventListener("mouseenter", () => {
    submenu.classList.add("show");
});

document.addEventListener("click", (event) => {
    const isInside = dropdown.contains(event.target);
    if (!isInside) {
        submenu.classList.remove("show");
    }
});
