var id, id1, id2, id3;

function allowDrop(ev)
{
	ev.preventDefault();
}

function dragStart(ev)
{
	id = ev.target.id;
}

function drop(ev)
{
	ev.target.append(document.getElementById(id));
}