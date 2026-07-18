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
