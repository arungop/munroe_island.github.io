var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain background',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://stamen-tiles-{a-c}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})]
    })
})
]
});
var format_lannew = new ol.format.GeoJSON();
var features_lannew = format_lannew.readFeatures(geojson_lannew, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lannew = new ol.source.Vector();
jsonSource_lannew.addFeatures(features_lannew);var lyr_lannew = new ol.layer.Vector({
                source:jsonSource_lannew, 
                style: style_lannew,
                title: "lannew"
            });

lyr_lannew.setVisible(true);
var layersList = [baseLayer,lyr_lannew];
lyr_lannew.set('fieldAliases', {'Class_Name': 'Class_Name', 'CODE': 'CODE', 'area_m': 'area_m', });
lyr_lannew.set('fieldImages', {'Class_Name': 'TextEdit', 'CODE': 'TextEdit', 'area_m': 'TextEdit', });
lyr_lannew.set('fieldLabels', {'Class_Name': 'header label', 'CODE': 'no label', 'area_m': 'header label', });
lyr_lannew.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});