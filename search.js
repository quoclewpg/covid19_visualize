function search(){
	var inputSearch, data, filterSearch, table, th, tr, td;

	inputSearch = document.getElementById("search");
	filterSearch = inputSearch.value.replace(/[, ]+/g, " ").trim().toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	th = document.getElementsByTagName("th");
	data = "";

	for(var i = 0; i < tr.length; i++)
	{
		for(var j = 0; j < th.length; j++)
		{
			td = tr[i].getElementsByTagName("td")[j];
			if(td)
			{
				if(td.innerText.match(/[a-z]/g))
				{
					data += td.innerText;
					if(data.replace(/[, ]+/g, " ").trim().toUpperCase().indexOf(filterSearch) > -1)
					{
						tr[i].style.display = "";
					}
					else
					{
						tr[i].style.display = "none";
					}
				}
			}
		}
		data = "";
 	}
}