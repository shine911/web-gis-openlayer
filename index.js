import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

var map = new Map({
  view: new View({
    center: [11774357.4,1122639.4],
    zoom: 20
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map'
});

var khoaKt = new ImageLayer({
  source: new ImageWMS({
    url: 'http://localhost:8600/geoserver/myworkspace/wms',
    params: {'LAYERS': 'myworkspace:KhoaKinhTe'},
    serverType: 'geoserver'
  })
});

map.addLayer(khoaKt);
