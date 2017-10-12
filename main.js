window.onload = function() {
var Viewer = window.Viewer;
var options = {
	navbar:false,
	title:false,
	toolbar:false,
	movable:false,
	tooltip:false,
	movable:false,
	rotatable:false,
	transition:false,
	keyboard:false,
	
	viewed:function(e)
	{
		console.log(e.type);
	}
};
var viewer = new Viewer(document.getElementById('image'), options);
};