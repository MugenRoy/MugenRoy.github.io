function switchTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    for (let content of contents) {
      content.classList.remove("active-content");
    }

    const buttons = document.querySelectorAll('.nav-btn');
    for (let btn of buttons) {
      btn.classList.remove("active");
    }

    document.getElementById(tabId).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});
