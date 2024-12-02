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
    document.getElementById('confirm-second-choice').textContent = queryParams['second-choice'] || '';}
)