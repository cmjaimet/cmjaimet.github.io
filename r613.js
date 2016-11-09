console.log(' Time to deliver a pizza ball!' + r613_event_cat);
//http://r613.calmseamedia.com/?feed=r613_events
//http://r613.calmseamedia.com/cmj.php
$.ajax({
  url: "http://r613.calmseamedia.com/?feed=r613_events",
  dataType: "jsonp",
  jsonpCallback: "r613_events_cb"
});
function r613_events_cb( data_ ) {
  console.log('ok r613_events_cb');
	$.each( data_, function( _index, _value ) {
		_wrapper = document.getElementById( 'r613_events' );
		_event = document.createElement( 'div' );
		_title = document.createElement( 'h2' );
		_title.innerHTML = _value.title;
		_date = document.createElement( 'p' );
		_date.innerHTML = 'Date: ' + _value.date + ' ' + _value.time;
		_location = document.createElement( 'p' );
		_location.innerHTML = 'Location: ' + _value.location;
		_details = document.createElement( 'p' );
		_details.innerHTML = _value.details;
		_link = document.createElement( 'a' );
		_link.innerHTML = 'More...';
		_link.href = _value.link;
		_image = document.createElement( 'img' );
		_image.src = _value.image;
		_image.style.width = '200px';
		_image.style.float = 'right';
		_event.appendChild( _image );
		_event.appendChild( _title );
		_event.appendChild( _date );
		_event.appendChild( _location );
		_event.appendChild( _details );
		_event.appendChild( _link );
		_wrapper.appendChild( _event );
	   // console.log(value);
	});
}
