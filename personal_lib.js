function setLocal(key,value){
	return window.localStorage.setItem(key,JSON.stringify(value));
}
		
function getLocal(key){
	var data = window.localStorage.getItem(key);
	return JSON.parse(data);
}
function clearLocal(key){
	return window.localStorage.removeItem(key);
}
function setData(key){
	for( var index in key){
		$("#"+index).html(key[index]);
	}
}

function getRadioButtonData(attName){

	var element = document.getElementsByName(attName);
	for(i = 0; i < element.length; i++) { 
        if(element[i].checked) 
      		return element[i].value; 
    } 	
}

 function exportTableToExcel(tableID, filename = ''){
      console.log('Hello');
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}