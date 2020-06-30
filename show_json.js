window.onload = function loadServers(){
	var xHttp = new XMLHttpRequest();
	xHttp.open('GET', 'https://covid19manitobaapi.herokuapp.com', true);

	xHttp.onload = function(){
		if(this.status == 200)
		{
			var data = JSON.parse(this.responseText);
			var table = "";
			var total = 20;
			var day = 10;
			var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			var d;

			for(var i = 0; i < data.length; i++)
			{
				d = new Date(data[i].date);
				table += "<tr><td>" + day + "</td><td>"
					  + days[d.getDay()] + "</td><td id='dates'>"
					  + data[i].date + "</td><td>"
					  + data[i].cases + "</td></tr>";
			  	total +=data[i].cases;
				document.getElementById("sortable").innerHTML = table;	
				day++;	
			}
			document.getElementById("total").insertAdjacentHTML("beforeend",total);	
		}
	}
	xHttp.send();
}
