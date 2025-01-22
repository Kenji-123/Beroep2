const divs = document.querySelectorAll(".grid-item");

divs.forEach(div => {
    div.addEventListener('click', () => {
        alert("Bestelling is geplaatst");
    });
});
