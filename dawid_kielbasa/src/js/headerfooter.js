window.addEventListener('load', function() {
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');

    header.innerHTML="<div class=\"Logo\"><a href=\"index.html\"><img src=\"../resources/logo.png\" width=\"110\" height=\"27\"></a></div><div><ul class=\"Header_Links\"><li><a href=\"struktura_kodu.html\">Stuktura kodu</a></li><li><a href=\"typy_zmiennych.html\">Typy zmiennych</a></li><li><a>Strona 3</a></li><li><a>Strona 4</a></li></ul></div>";
    footer.innerHTML="<div><h5>Strona wykonana przez:<br>Dawid Kiełbasa<br>Nr albumu: 42388<br>Kierunek: informatyka<br>Semestr: II<br>Tryp: niestacjonarny</h5><div>";
});