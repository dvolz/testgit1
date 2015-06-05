$(document).ready(function($){ 

	winHeight = window.innerHeight;
	winWidth = window.innerWidth;

	console.log (winHeight);
	console.log (winWidth);

	$('button').hover(
		function () {
			$this = $(this);
			$this.css('position', 'absolute');
			$this.css('top', winHeight * Math.random());
			$this.css('left', winWidth * Math.random());
		}
	)

});