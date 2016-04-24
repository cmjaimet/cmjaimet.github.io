var wrapper_class = false;
var changeCSS = function() {
	wrapper_class = ! wrapper_class;
	if ( wrapper_class ) {
		$( '#wrapper' ).addClass( 'wrapper_class' );
	} else {
		$( '#wrapper' ).removeClass( 'wrapper_class' );
	}
};
