$(document).ready(function($){ 

	winHeight = window.innerHeight;
	winWidth = window.innerWidth;

	$('button').hover( //this game is not very smooth, needs work David.
		function () {
			var $this = $(this);
			var roll = (Math.random() - 0.1);
			var newHeight = winHeight * roll;
			var newWidth = winWidth * roll;
			$this.css({
				'top': newHeight,
				'left': newWidth
					});
			console.log(newHeight);
			console.log(newWidth);
		}
	);

});