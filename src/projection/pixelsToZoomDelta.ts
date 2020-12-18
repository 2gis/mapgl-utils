import { tileSizePx } from './constants';

export function pixelsToZoomDelta(px: number) {
    return px / tileSizePx;
}
