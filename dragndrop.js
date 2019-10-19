var id, id1, id2, id3;
var co_ordinates = [];
var intervel = 0;
var drop_count = 0;

function allowDrop(ev)
{
	ev.preventDefault();
}

function dragStart(ev)
{
	
	id = ev.target.id;
}

function drop(ev){	

	drop_count++;
	ev.target.append(document.getElementById(id));
	pushArray('coordinate'+drop_count);	
	co_ordinates.splice(0, co_ordinates.length);
		
}

function dragging(ev){
	 var x = event.clientX;     // Get the horizontal coordinate
	 var y = event.clientY;     // Get the vertical coordinate
	co_ordinates.push({"x":x , "y":y});
	intervel = elementSpacing(co_ordinates.length);
}
function elementSpacing(length){
	return Math.ceil(length/20);
}
function pushArray(key){
	var co_ordinate_points = [];
	for(var i = 0; i<co_ordinates.length; i+=intervel ){
		co_ordinate_points.push(co_ordinates[i]);
	}
	return window.localStorage.setItem(key,JSON.stringify(co_ordinate_points));
	
}
