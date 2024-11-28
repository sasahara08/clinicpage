function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}

document.addEventListener('DOMContentLoaded', function() {
    const queryParams = getQueryParams();
    document.getElementById('confirm-reservation').textContent = queryParams['reservation'] || '';
    document.getElementById('confirm-first-choice').textContent = queryParams['first-choice'] || '';
    document.getElementById('confirm-second-choice').textContent = queryParams['second-choice'] || '';
   [_{{{CITATION{{{_1{](https://github.com/buribalazs/smooth-drag-order/tree/7b40d21d076c3e31765f61481f537beaf4c5ec9f/README.md)[_{{{CITATION{{{_2{](https://github.com/Parasiteneet/Reiko_reservation/tree/0c38f8ff5383c92a78d31e6eaf021c52446edfa5/register%2Fregister.php)