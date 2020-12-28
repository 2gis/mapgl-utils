import { tileSizePx } from './constants';

export function pixelsToZoomDelta(px: number): number {
    return px / tileSizePx;
}
