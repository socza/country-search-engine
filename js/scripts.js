$(function() {

	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {

		var countryName = $('#country-name').val();
		
		if(!countryName.length) 
			countryName = 'Poland';

	
		$.ajax({

			url: url + countryName,
			method: 'GET',
			success: showCountriesList

		});

	}

	function showCountriesList(resp) {

		countriesList.empty();
		
		resp.forEach(function(item) {

			$("#countries").append('<tr><td>'+ item.name + '</td><td>' + item.altSpellings[1] + '</td><td>' + item.capital + '</td><td>' + item.population + '</td><td>' + item.subregion + '</td></tr>');
			// $('<td>').text(item.name).appendTo(countriesList);
			// $('<td>').text(item.altSpellings[2]).appendTo(countriesList);
			// $('<td>').text(item.capital).appendTo(countriesList);
			

		});


	}

});