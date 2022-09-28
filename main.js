var map = L.map('map').setView([27.2, 83.95], 5);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:
	"&copy: <a href='https://openstreetmap.org/copyright'> Openstreetmap </a> contributors"});

var darklayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
		maxZoom: 20,
		attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
	});

darklayer.addTo(map);




var baselayers ={
	'base layer': osm,
	'dark layer': darklayer
}

//GeoJson
var GeoJson = L.geoJson(nepdata,{
	onEachFeature: function(feature,layer){
		var district = feature.properties.FIRST_DIST;
		layer.bindPopup(`District: ${district}`);
		
	},
	style: {
		color: 'red',
		fillOpacity: 0,
	}
}).addTo(map);

map.fitBounds(GeoJson.getBounds());



var marker1 = L.marker([27.2,83.95],{
	draggable: true,
	title: 'hello',
}
	)
	.bindPopup("<h1>marker</h1><p>This is marker</p>").openPopup();

var marker2 = L.marker([26.2,83.55]);
var marker3 = L.marker([25.2,84.55]);
		
var markers = L.layerGroup([marker1, marker2,marker3]);


var overlayers = {
	Markers: markers,
	'Geojson layer':GeoJson,
	};

L.control.layers(baselayers,overlayers).addTo(map);



