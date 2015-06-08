$(document).ready(function($){ 

	winHeight = window.innerHeight;
	winWidth = window.innerWidth;

	$('button').hover( //this game is not very smooth, needs work David.
		function () {
			var $this = $(this);
			var roll = Math.random();
			$this.css('top', winHeight * roll);
			//$this.css('left', winWidth * roll);
		}
	);

});