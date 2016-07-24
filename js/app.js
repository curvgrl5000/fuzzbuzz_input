$(document).ready(function() {
	$('#preferences').submit(function() {
		$('#printout').empty(); //Clear the contents of the section
		printNumbers($('#divBy3Word').val(), $('#divBy5Word').val(), $('#numToPrint').val() );
		event.preventDefault();
	});
});

var printNumbers = function(divBy3, divBy5, inputNum) {
	for (var i = 1; i <= inputNum; i++) {
		if ( i % 3 === 0 && i % 5 === 0 ) {
			$("#printout").append('<p class="hotpink">' + divBy3 + '<span class="pwderblue">' + divBy5 + '</p>');
		} else if ( i % 3 === 0 ) {
			$("#printout").append('<p class="hotpink">' + divBy3 + '</p>');
		} else if ( i % 5 === 0 && i % 5 === 0 ) {
			$("#printout").append('<p class="pwderblue">' + divBy5 + '</p>');
	 	} else {
			$("#printout").append('<p>' + i + '</p>');
	 	}
	 }
};




