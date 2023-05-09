window.addEventListener('load', function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modimg");
    var captionText = document.getElementById("caption");

    var images = document.querySelectorAll(".modalable");

    images.forEach(function (img) {
        img.addEventListener("click", function (event) {
            modalImg.src = event.target.src;
            captionText.innerHTML = event.target.alt;
            modal.style.display = "block";
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
});