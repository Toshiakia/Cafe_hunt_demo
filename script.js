// script.js

// 加载头部内容
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

// 加载底部内容
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
