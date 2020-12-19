import { positionFromLngLatBoundsSizeRotation } from '@2gis/mapgl-utils/lngLatBounds/positionFromLngLatBoundsSizeRotation';
import { create } from '@2gis/mapgl-utils/lngLatBounds/create';
import { extend } from '@2gis/mapgl-utils/lngLatBounds/extend';
import { pixelsToZoomDelta } from '@2gis/mapgl-utils/projection/pixelsToZoomDelta';

const map = new mapgl.Map('map', {
    center: [82.897983, 54.980052],
    zoom: 13,
    key: '042b5b75-f847-4f2a-b695-b5f58adc9dfd',
    rotation: 30,
});

const points = [
    [82.87171881085453, 54.97138219586408],
    [82.92029898028024, 54.98862144462748],
    [82.91009658839778, 54.980784310969064],
];

const bounds = create();
points.forEach((point) => extend(bounds, point));

const { center, zoom } = positionFromLngLatBoundsSizeRotation(
    bounds,
    map.getSize(),
    map.getRotation(),
);

const padding = 100;
const zoomWithPadding = zoom - pixelsToZoomDelta(padding) * 2;

map.setCenter(center, { animate: false });
map.setZoom(zoomWithPadding, { animate: false });

// Draw bounds
new mapgl.Polyline(map, {
    coordinates: [
        bounds.southWest,
        [bounds.southWest[0], bounds.northEast[1]],
        bounds.northEast,
        [bounds.northEast[0], bounds.southWest[1]],
        bounds.southWest,
    ],
});

// Draw points
points.forEach((coordinates) => {
    new mapgl.Marker(map, {
        coordinates,
    });
});
