define( [ "qlik", "./popper.min", "./tippy-bundle.iife.min"
],
function ( qlik,Popper, tippys ) {

	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element) {
			//add your rendering code here
			$element.append( $("<button>").text("123").attr("data-tippy-content", "41213123") );
			//needed for export
			tippy('button');
			return qlik.Promise.resolve();
		}
	};

} );

