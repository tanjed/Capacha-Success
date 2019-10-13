var id, id1, id2, id3;
var co_ordinates = [];

function allowDrop(ev)
{
	ev.preventDefault();
}

function dragStart(ev)
{
	id = ev.target.id;
	getPositions(id);
}

function drop(ev)
{	
	ev.target.append(document.getElementById(id));
	getPositions(id);
	console.log(co_ordinates);

}
function getPositions(id){

	
	
}
function dragging(ev){
	var x = event.clientX;     // Get the horizontal coordinate
	var y = event.clientY;     // Get the vertical coordinate
	co_ordinates.push({"x":x , "y":y});
}
