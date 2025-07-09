export function clearContent() {
    let contentDiv = document.getElementById('content');
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}