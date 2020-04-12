(function($) {
    "use strict";

    // Menu Items Limit

    var maxItems = 10; // Change Number of Items here
    var totalItems = jQuery('.navigation>ul').find('>li').length;
    if (totalItems > maxItems) {
        jQuery('.navigation>ul>li:nth-child(' + maxItems + ') ~ li').wrapAll('<li></li>').wrapAll('<ul class="sub-dropdown"></ul>');
        jQuery('.navigation>ul>li:last-child').prepend('<a href="#">More</a>');
    }

    // Responsive Menu

    jQuery(document).ready(function() {
        jQuery('.navigation>ul').slicknav();

    // JPlatyer

        if (jQuery('#jquery_jplayer_1').length != '') {
            new jPlayerPlaylist({
                jPlayer: "#jquery_jplayer_1",
                cssSelectorAncestor: "#jp_container_1"
            }, [{
                title: "Cro Magnon Man",
                mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
            }, {
                title: "Your Face",
                mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
                oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
            }, {
                title: "Cyber Sonnet",
                mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
                oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
            }, {
                title: "Tempered Song",
                mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
            }, {
                title: "Hidden",
                mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
            }, ], {
                swfPath: "../../dist/jplayer",
                supplied: "oga, mp3",
                wmode: "window",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true
            });
        }
    });

    jQuery(window).load(function() {
   if(jQuery('.flexslider').length != ''){
      jQuery('.flexslider').flexslider({
       slideshowSpeed: 4000,
       animationDuration: 1100,
       animation: 'slide',
       directionNav: false,
       controlNav: false,
       pausePlay: false,
	    
        start: function(slider) {
              jQuery('.flexslider').removeClass('px-loading');
              jQuery('.flexslider').find('.loader').remove();
          }
   });
   }
});
})(jQuery);



