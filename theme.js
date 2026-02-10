const darkIcon = document.getElementById("darkIcon");
const lightIcon = document.getElementById("lightIcon");

const updateToggleUI = () => {
    if (document.body.classList.contains("light")) {
        lightIcon.classList.add("active");
        darkIcon.classList.remove("active");
    } else {
        darkIcon.classList.add("active");
        lightIcon.classList.remove("active");
    }
};

const toggleTheme = () => {
    document.body.classList.toggle("light");

    const theme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);

    updateToggleUI();
};

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    updateToggleUI();
};
