document.addEventListener('DOMContentLoaded', function() {
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 86400000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    let count = parseInt(getCookie("pageCount") || 0) + 1;
    setCookie("pageCount", count, 7);
    document.getElementById("count").textContent = count;
});
