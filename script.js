function isMpTrueInUrl() {
    // Get the query string from the current URL
    const queryString = window.location.search;

    // Parse the query string
    const urlParams = new URLSearchParams(queryString);

    // Check if 'mp' is present and set to 'true'
    return urlParams.get('mp') === 'true';
}

// Usage
if (isMpTrueInUrl()) {
    document.getElementById("divMP").style.display = 'block';
}
else{
    document.getElementById("divMP").style.display = 'none';
}
