var size = 0;
function categories_lannew(feature, value) {
                switch(value) {case "barren":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,244,199,1.0)'})
    })];
                    break;
case "coco":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(186,221,105,1.0)'})
    })];
                    break;
case "road":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})
    })];
                    break;
case "SMT":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(221,121,54,1.0)'})
    })];
                    break;
case "water":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,133,132,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(165,191,221,1.0)'})
    })];
                    break;}};
var styleCache_lannew={}
var style_lannew = function(feature, resolution){
    var value = feature.get("Class_Name");
    var style = categories_lannew(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_lannew[key]){
        var text = new ol.style.Text({
              font: '11.7px \'Noto Sans\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_lannew[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_lannew[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};