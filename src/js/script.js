const nav = document.querySelector("nav.menu");
const toggle = document.querySelector("button.menu-btn");

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    document.body.classList.toggle("noscroll", !isOpen);
});