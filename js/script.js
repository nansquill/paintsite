//
mapboxgl.accessToken = 'pk.eyJ1IjoiYXV0b2xhY2toZyIsImEiOiJjanc5NGxseGkybnM2NDlwbGxzYTh1ZDdyIn0.YUsnCDfn39gF9zcKWjdZbQ';

function initMap()
{	
	if(!mapboxgl.supported())
	{
		alert('Hinweis: Ein Browser der aktuellen Generation (IE Edge, Firefox, Chrome) zeigt Ihnen Inhalte schneller an, und ist zudem sicherer. Mit Ihrem Browser funktioniert aus Sicherheitsgruenden bspw. diese Kartenansicht nicht.');
	}
	else
	{
		var map=new mapboxgl.Map({
			container:'map',
			center:[7.138701,51.369107],
			minZoom:7,
			maxZoom:19,
			zoom:14,
			style:'mapbox://styles/mapbox/streets-v11'
		});
		map.on('load',function(){
			map.addSource("points",{"type":"geojson","data":{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[7.138575,51.368711]},"properties":{"title":"H&G Autolackiererei","icon":"car","line-color":"black"},}]}});
			map.addLayer({"id":"points","type":"symbol","source":"points","layout":{"icon-image":"{icon}-15","text-field":"{title}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0.2,-2.0],"text-anchor":"top"}});
		});
		map.addControl(new mapboxgl.NavigationControl());
		map.scrollZoom.disable();
	}
}

function initCookieDsgvo()
{
	window.addEventListener("load", function(){
	window.cookieconsent.initialise({
	  "palette": {
		"popup": {
		  "background": "#efefef",
		  "text": "#404040"
		},
		"button": {
		  "background": "#8ec760",
		  "text": "#ffffff"
		}
	  },
	  "content": {
		"message": "Wir verwenden Cookies auf unserer Website, um Ihren Besuch effizienter zu gestalten.",
		"link": "Mehr lesen"
	  }
	})});
}
initCookieDsgvo();
initMap();