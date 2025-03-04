// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Dynamic tooltips on hover
document.querySelectorAll("ul li").forEach(item => {
    item.addEventListener("mouseenter", function () {
        const detailText = this.getAttribute("data-detail");
        if (detailText) {
            let tooltip = document.createElement("span");
            tooltip.className = "tooltip";
            tooltip.innerText = detailText;
            this.appendChild(tooltip);
        }
    });

    item.addEventListener("mouseleave", function () {
        const tooltip = this.querySelector(".tooltip");
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Theme Toggle Functionality
const themeToggleBtn = document.createElement("button");
themeToggleBtn.innerText = "Toggle Theme";
themeToggleBtn.className = "theme-toggle";
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggleBtn.innerText = document.body.classList.contains("dark-theme") ? "Light Theme" : "Dark Theme";
});
