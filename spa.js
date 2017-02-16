/**
 * Created by uninetix on 16.02.17.
 */
/*jslint         browser : true, continue : true,
 devel  : true, indent  : 2,    maxerr   : 50,
 newcap : true, nomen   : true, plusplus : true,
 regexp : true, sloppy  : true, vars     : true,
 white  : true
 */
/*global jQuery */

// Moduł /spa/
// zapewnia funkcjonalność suwaka czatu.
//
var spa = (function ( $ ) {
    // Zmienne zakresu modułu.
    var
        // Ustawienie stałych.
        configMap = {
            extended_height  : 434,
            extended_title   : 'Nie wiem dlaczego, ale nie działa mi pokazywanie dymków',
            retracted_height : 16,
            retracted_title  : 'Kliknij, aby pokazać',
            template_html    : '<div class="spa-slider"><\/div>'
        },

        // Deklarowanie wszystkich pozostałych zmiennych zakresu modułu .
        $chatSlider,
        toggleSlider, onClickSlider, initModule;

    // Metoda DOM /toggleSlider/
    // zmienia wysokość suwaka.
    //
    toggleSlider = function () {
        var
            slider_height = $chatSlider.height();

        // Rozwijanie suwaka, jeśli jest całkowicie ukryty.
        if ( slider_height === configMap.retracted_height ) {
            $chatSlider
                .animate({ height : configMap.extended_height })
                .attr( 'tytuł', configMap.extended_title );
            return true;
        }

        // Zwijanie suwaka, jeśli jest całkowicie widoczny.
        else if ( slider_height === configMap.extended_height ) {
            $chatSlider
                .animate({ height : configMap.retracted_height })
                .attr( 'tytuł', configMap.retracted_title );
            return true;
        }
        // Nie podejmuj żadnej akcji, jeśli suwak jest w trakcie zmiany stanu.
        return false;
    };

    // Procedura obsługi zdarzeń /onClickSlider/
    // odbiera zdarzenie kliknięcia i wywołuje metodę toggleSlider.
    //
    onClickSlider = function ( event ) {
        toggleSlider();
        return false;
    };

    // Metoda publiczna /initModule/
    // ustawia stan początkowy i dostarcza funkcję.
    //
    initModule = function ( $container ) {

        // Renderowanie HTML.
        $container.html( configMap.template_html );
        $chatSlider = $container.find( '.spa-slider' );

        // Inicjowanie wysokości oraz tytułu suwaka.
        // Wiązanie zdarzenia kliknięcia przez użytkownika do procedury obsługi zdarzeń.
        $chatSlider
            .attr( 'tytuł', configMap.retracted_title )
            .click( onClickSlider );

        return true;
    };

    return { initModule : initModule };

}( jQuery ));

// Uruchomienie aplikacji SPA, gdy gotowy jest model DOM.
//
jQuery(document).ready(
    function () { spa.initModule( jQuery('#spa') ); }
);