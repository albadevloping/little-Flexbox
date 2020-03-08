//API de Google Maps//

//Código para mostrar el mapa//

function initMap() {
    // Mi localización
    const loc = { lat: 37.097599, lng: -3.648280 };

    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map:
    map });
}

//Animación con jquery 'Smooth Scrolling'//
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100 //Como tenemos un menú sticky tapaba parte del título de cada sección al hacer scroll, y con este - 100 le indicamos que haga scroll 100 píxeles más arriba para que no tape el menú//
            },
            800
        );
    }

});

//Hacer el menú Sticky transparente conforme vaya haciendo scroll hacia abajos//
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {  //Si el scroll baja 150px, tendrá una opacidad de 0.9//
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;  //De lo contrario tendrá una opacidad de 1//                
    }
});
