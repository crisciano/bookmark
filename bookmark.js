
(function($){
	// selector e o elemento q vai ser marcado como marcador
    $.fn.Bookmark = function(options){
    	//element e o elemento que vem da function
    	// nesse caso .marcador
    	var elem = $(this);
    	//array de posições de cada elementos
    	var position = [];
    	// var de configurações 
    	// sera implementado na seguencia
        var config = {
        	'delay' : '0s',
        	'duration' : '2.25s',
        };
        if (options){$.extend(config, options);}
	        $(elem).each(function() {
	        	position.push($(this).position().top);
	        });
	        $(document).on('mousemove', function(event) {
				$.each(position ,function(i) {
					if ( event.pageY >= position[i] ) {
						$(elem).slice(i , i+1).addClass('effect animate');
					}				
				});
			});
        return this;
    };
})(jQuery);