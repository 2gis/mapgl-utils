# MapGL Utils

Utility funtions to use with [MapGL API](https://docs.2gis.com/ru/mapgl/overview).

⚠ There are many functions without guarantees of stability with the main MapGL API script. These functions are marked with `WARNING` in their descriptions. You shouldn't use them in production code.

## Usage

Install with NPM

```sh
npm install mapgl-utils
```

Import the function you need to your project and use it:

```js
import { positionFromLngLatBoundsSizeRotation } from '@2gis/mapgl-utils/lngLatBounds/positionFromLngLatBoundsSizeRotation';
import { create } from '@2gis/mapgl-utils/lngLatBounds/create';
import { extend } from '@2gis/mapgl-utils/lngLatBounds/extend';

const map = new mapgl.Map('map', {
    center: [82.897983, 54.980052],
    zoom: 13,
    key: 'Your API access key',
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

map.setCenter(center, { animate: false });
map.setZoom(zoom, { animate: false });
```

## Contributing principles

1. **One function — one file.**
2. **Zero dependencies.**
3. **Mark unstable functions.** If a function depends on internal map logic that might change in the future (e.g MVP matrix), it should have an instability warning with the main map script.
