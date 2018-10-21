var dataView = function(parent){
    const id = parent.getAttribute('id');

    var cityName = parent.getAttribute('data-iladi');

    var cityAddress = cityName + ', Turkey';
    dataTitle.innerHTML = cityAddress;

    httpGetAsync( "https://www.radcheck.app/api/query?address="+ cityAddress, function( data ) {
        dataList.innerHTML = '<li>Radyasyon seviyesi: '+data.rad_value+' µSv/h ±0.00 µSv/h</li>'
      });
};

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}