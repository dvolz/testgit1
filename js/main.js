$(document).ready(function($){ 

	winHeight = window.innerHeight;
	winWidth = window.innerWidth;

	console.log (winHeight);
	console.log (winWidth);

	$('button').hover( //this game is not very smooth, needs work David.
		function () {
			var $this = $(this);
			var roll = Math.random();
			if(roll > 0.5){
				$this.css('top', winHeight * Math.random());
				console.log('higher!');
			} else {
				$this.css('left', winWidth * Math.random());
				console.log('lower!');
			}
		}
	)

});