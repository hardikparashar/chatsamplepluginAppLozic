window.onload = function() {
var Viewer = window.Viewer;
var options = {
	navbar:false
	title:false,
	toolbar:false,
	movable:false,
	tooltip:false,
	movable:false,
	zoomable:false,
	rotatble:false,
	scalable:false,
	transition:false,
	fullscreen:false,
	keyboard:false
	
	viewed:function()
	{
		
	}
};
var viewer = new Viewer(document.getElementById("image"),options);
}