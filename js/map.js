var world_map;
/* Ningbo
29.8697803,121.5719604 */
/* Lhasa
29.6488156,91.1453247 */
/* Worcester
42.275435,-71.808442 */
/* Beijing
39.9388838,116.3974589 */
/* Harbin
45.75723,126.6520214 */
/* Weihai
37.4820357,122.0824814 */
/* Shanghai
31.2243489,121.4767528 */
/* Kanas Lake
48.7736984,87.02419 */
/* Dunhuang
40.6071947,94.1041415 */
/* Sanya
18.2589089,109.5185852 */
/* Haikou
20.0119457,110.3181839 */
/* Changsha
28.1761294,113.0245972 */
/* Zhangjiajie
29.1155453,110.5265808 */
/* Mohe
52.9081446,122.7343087 */
/* Taipei
25.0172264,121.506378 */
/* Xiamen
24.4791977,118.1092072 */
/* Los Angeles
34.0204989,-118.4117325 */
/* Key West
24.5583574,-81.7802537 */

var Ningbo_latlng = new google.maps.LatLng(29.8697803, 121.5719604);
var Lhasa_latlng = new google.maps.LatLng(29.6488156, 91.1453247);
var Worcester_latlng = new google.maps.LatLng(42.275435, -71.808442);
var Beijing_latlng = new google.maps.LatLng(39.9388838, 116.3974589);
var Harbin_latlng = new google.maps.LatLng(45.75723, 126.6520214);
var Weihai_latlng = new google.maps.LatLng(37.4820357, 122.0824814);
var Shanghai_latlng = new google.maps.LatLng(31.2243489, 121.4767528);
var Kanas_Lake_latlng = new google.maps.LatLng(48.7736984, 87.02419);
var Dunhuang_latlng = new google.maps.LatLng(40.6071947, 94.1041415);
var Sanya_latlng = new google.maps.LatLng(18.2589089, 109.5185852);
var Haikou_latlng = new google.maps.LatLng(20.0119457, 110.3181839);
var Changsha_latlng = new google.maps.LatLng(28.1761294, 113.0245972);
var Zhangjiajie_latlng = new google.maps.LatLng(29.1155453, 110.5265808);
var Mohe_latlng = new google.maps.LatLng(52.9081446, 122.7343087);
var Taipei_latlng = new google.maps.LatLng(25.0172264, 121.506378);
var Xiamen_latlng = new google.maps.LatLng(24.4791977, 118.1092072);
var Los_Angeles_latlng = new google.maps.LatLng(34.0204989, -118.4117325);
var Key_West_latlng = new google.maps.LatLng(24.5583574, -81.7802537);
var Tokyo_latlng = new google.maps.LatLng(35.673343,139.710388);
var Shizuoka_latlng = new google.maps.LatLng(35.120271,138.3252255);
var Nagoya_latlng = new google.maps.LatLng(35.16805,136.9116);
var Yokohama_latlng = new google.maps.LatLng(35.46195,139.61925);
var Kyoto_latlng = new google.maps.LatLng(35.0061,135.76095);
var Osaka_latlng = new google.maps.LatLng(34.6784,135.49515);
var Dalian_latlng = new google.maps.LatLng(38.9298558,121.6107559);

function initialize() {
    var mapOptions = {
        zoom: 1,
        center: Ningbo_latlng
    };
    world_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var Ningbo_info = "<strong>Ningbo(My Hometown)</strong>";
    var Ningbo_infowindow = new google.maps.InfoWindow({
        content: Ningbo_info
    });
    var Ningbo_marker = new google.maps.Marker({
        position: Ningbo_latlng,
        map: world_map,
        title: 'Ningbo'
    });
    google.maps.event.addListener(Ningbo_marker, 'click', function () {
        Ningbo_infowindow.open(world_map, Ningbo_marker);
    });

    var Lhasa_info = "<strong>Lhasa</strong>";
    var Lhasa_infowindow = new google.maps.InfoWindow({
        content: Lhasa_info
    });
    var Lhasa_marker = new google.maps.Marker({
        position: Lhasa_latlng,
        map: world_map,
        title: 'Lhasa'
    });
    google.maps.event.addListener(Lhasa_marker, 'click', function () {
        Lhasa_infowindow.open(world_map, Lhasa_marker);
    });

    var Worcester_info = "<strong>Worcester</strong>";
    var Worcester_infowindow = new google.maps.InfoWindow({
        content: Worcester_info
    });
    var Worcester_marker = new google.maps.Marker({
        position: Worcester_latlng,
        map: world_map,
        title: 'Worcester'
    });
    google.maps.event.addListener(Worcester_marker, 'click', function() {
        Worcester_infowindow.open(world_map, Lhasa_marker);
    });

    var Beijing_info = "<strong>Beijing</strong>";
    var Beijing_infowindow = new google.maps.InfoWindow({
        content: Beijing_info
    });
    var Beijing_marker = new google.maps.Marker({
        position: Beijing_latlng,
        map: world_map,
        title: 'Beijing'
    });
    google.maps.event.addListener(Beijing_marker, 'click', function () {
        Beijing_infowindow.open(world_map, Beijing_marker);
    });

    var Harbin_info = "<strong>Harbin</strong>";
    var Harbin_infowindow = new google.maps.InfoWindow({
        content: Harbin_info
    });
    var Harbin_marker = new google.maps.Marker({
        position: Harbin_latlng,
        map: world_map,
        title: 'Harbin'
    });
    google.maps.event.addListener(Harbin_marker, 'click', function () {
        Harbin_infowindow.open(world_map, Harbin_markerker);
    });

    var Weihai_info = "<strong>Weihai</strong>";
    var Weihai_infowindow = new google.maps.InfoWindow({
        content: Weihai_info
    });
    var Weihai_marker = new google.maps.Marker({
        position: Weihai_latlng,
        map: world_map,
        title: 'Weihai'
    });
    google.maps.event.addListener(Weihai_marker, 'click', function () {
        Weihai_infowindow.open(world_map, Weihai_marker);
    });

    var Shanghai_info = "<strong>Shanghai</strong>";
    var Shanghai_infowindow = new google.maps.InfoWindow({
        content: Shanghai_info
    });
    var Shanghai_marker = new google.maps.Marker({
        position: Shanghai_latlng,
        map: world_map,
        title: 'Shanghai'
    });
    google.maps.event.addListener(Shanghai_marker, 'click', function () {
        Shanghai_infowindow.open(world_map, Shanghai_marker);
    });

    var Kanas_Lake_info = "<strong>Kanas Lake</strong>";
    var Kanas_Lake_infowindow = new google.maps.InfoWindow({
        content: Kanas_Lake_info
    });
    var Kanas_Lake_marker = new google.maps.Marker({
        position: Kanas_Lake_latlng,
        map: world_map,
        title: 'Kanas Lake'
    });
    google.maps.event.addListener(Kanas_Lake_marker, 'click', function () {
        Kanas_Lake_infowindow.open(world_map, Kanas_Lake_marker);
    });

    var Dunhuang_info = "<strong>Dunhuang</strong>";
    var Dunhuang_infowindow = new google.maps.InfoWindow({
        content: Dunhuang_info
    });
    var Dunhuang_marker = new google.maps.Marker({
        position: Dunhuang_latlng,
        map: world_map,
        title: 'Dunhuang'
    });
    google.maps.event.addListener(Dunhuang_marker, 'click', function () {
        Dunhuang_infowindow.open(world_map, Dunhuang_marker);
    });
    
    var Sanya_info = "<strong>Sanya</strong>";
    var Sanya_infowindow = new google.maps.InfoWindow({
        content: Sanya_info
    });
    var Sanya_marker = new google.maps.Marker({
        position: Sanya_latlng,
        map: world_map,
        title: 'Sanya'
    });
    google.maps.event.addListener(Sanya_marker, 'click', function() {
        Sanya_infowindow.open(world_map, Sanya_marker);
    });

    var Haikou_info = "<strong>Haikou</strong>";
    var Haikou_infowindow = new google.maps.InfoWindow({
        content: Haikou_info
    });
    var Haikou_marker = new google.maps.Marker({
        position: Haikou_latlng,
        map: world_map,
        title: 'Haikou'
    });
    google.maps.event.addListener(Haikou_marker, 'click', function() {
        Haikou_infowindow.open(world_map, Haikou_marker);
    });

    var Changsha_info = "<strong>Chnangsha</strong>";
    var Changsha_infowindow = new google.maps.InfoWindow({
        content: Changsha_info
    });
    var Changsha_marker = new google.maps.Marker({
        position: Changsha_latlng,
        map: world_map,
        title: 'Changsha'
    });
    google.maps.event.addListener(Changsha_marker, 'click', function() {
        Changsha_infowindow.open(world_map, Changsha_marker);
    });
    
    var Zhangjiajie_info = "<strong>Zhangjiajie</strong>";
    var Zhangjiajie_infowindow = new google.maps.InfoWindow({
        content: Zhangjiajie_info
    });
    var Zhangjiajie_marker = new google.maps.Marker({
        position: Zhangjiajie_latlng,
        map: world_map,
        title: 'Zhangjiajie'
    });
    google.maps.event.addListener(Zhangjiajie_marker, 'click', function() {
        Zhangjiajie_infowindow.open(world_map, Zhangjiajie_marker);
    });
    
    var Mohe_info = "<strong>Mohe</strong>";
    var Mohe_infowindow = new google.maps.InfoWindow({
        content: Mohe_info
    });
    var Mohe_marker = new google.maps.Marker({
        position: Mohe_latlng,
        map: world_map,
        title: 'Mohe'
    });
    google.maps.event.addListener(Mohe_marker, 'click', function() {
        Mohe_infowindow.open(world_map, Mohe_marker);
    });
    
    var Taipei_info = "<strong>Taipei</strong>";
    var Taipei_infowindow = new google.maps.InfoWindow({
        content: Taipei_info
    });
    var Taipei_marker = new google.maps.Marker({
        position: Taipei_latlng,
        map: world_map,
        tittle: 'Taipei'
    });
    google.maps.event.addListener(Taipei_marker, 'click', function() {
       Taipei_infowindow.open(world_map, Taipei_marker); 
    });
    
    var Xiamen_info = "<strong>Xiamen</strong>";
    var Xiamen_infowindow = new google.maps.InfoWindow({
        content: Xiamen_info
    });
    var Xiamen_marker = new google.maps.Marker({
        position: Xiamen_latlng,
        map: world_map,
        title: 'Xiamen'
    });
    google.maps.event.addListener(Xiamen_marker, 'click', function() {
        Xiamen_infowindow.ope(world_map, Xiamen_marker);
    });
    
    var Los_Angeles_info = "<strong>Los Angeles</strong>";
    var Los_Angeles_infowindow = new google.maps.InfoWindow({
        content: Los_Angeles_info
    });
    var Los_Angeles_marker = new google.maps.Marker({
        position: Los_Angeles_latlng,
        map: world_map,
        title: 'Los Angeles'
    });
    google.maps.event.addListener(Los_Angeles_marker, 'click', function() {
        Los_Angeles_infowindow.open(world_map, Los_Angeles_marker);
    });
    
    var Key_West_info = "<strong>Key West</strong>";
    var Key_West_infowindow = new google.maps.InfoWindow({
        content: Key_West_info
    });
    var Key_West_marker = new google.maps.Marker({
        position: Key_West_latlng,
        map: world_map,
        title: 'Key West'
    });
    google.maps.event.addListener(Key_West_marker, 'click', function() {
        Key_West_infowindow.open(world_map, Key_West_marker);
    });
    
    var Tokyo_info = "<strong>Tokyo</strong>";
    var Tokyo_infowindow = new google.maps.InfoWindow({
        content: Tokyo_info
    });
    var Tokyo_marker = new google.maps.Marker({
        position: Tokyo_latlng,
        map: world_map,
        title: 'Tokyo'
    });
    google.maps.event.addListener(Tokyo_marker, 'click', function() {
        Tokyo_infowindow.open(world_map, Tokyo_marker);
    });
}  
google.maps.event.addDomListener(window, 'load', initialize);
