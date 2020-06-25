window.onload = function loadServers(){
	var xHttp = new XMLHttpRequest();
	xHttp.open('GET', 'https://covid19manitobaapi.herokuapp.com', true);

	xHttp.onload = function(){
		if(this.status == 200)
		{
			var data = JSON.parse(this.responseText);
			var table = "";
			var total = 20;
			
			for(var i = 0; i < data.length; i++)
			{
				table += "<tr><td>" + data[i].id + "</td><td>"
					  + data[i].date + "</td><td>"
					  + data[i].cases + "</td></tr>";
			  	total +=data[i].cases;
				document.getElementById("sortable").innerHTML = table;		
			}
			document.getElementById("total").insertAdjacentHTML("beforeend",total);	
		}
	}
	xHttp.send();
}
