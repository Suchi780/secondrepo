document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Toggle Theme';
    document.body.appendChild(themeButton);

    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

// In your CSS, add styles for the dark theme
/* Add this to your CSS */
body.dark-theme {
    background-color: #333;
    color: #fff;
}

body.dark-theme header {
    background-color: #555;
}

body.dark-theme footer {
    background-color: #555;
}

body.dark-theme nav ul li a {
    color: #fff;
}
