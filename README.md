# topology-visualization
Design and implement the topology visualization in SDN, based on multi-controllers.

## summary
This project implemented the rest api which can collect all the basic information of sub-controllers and integrate them into a global topology data in floodlight
, based on SDN development with multi-controller. Then, the web part in this project can show topology information in the global, such as host, or topology view.
Users can also check or search for the state they want.

## structure
Set up topology-Floodlight(call rest api for overall data)-apache(php)-browser(js,html)<br>
Use php to call cmd and get topology data(json). From server to browser, we use ajax.

## environment
ubuntu,ecilpse,phpstorm,apache2,php5.5,floodlight,mininet

## technology
Rest api in floodlight: java, rest api, json serialization and deserialization, URL package, Gson.<br>
Web: json, php, js(raphael,jquery), ajax, html.


