import { tileSizePx, worldSize } from './constants';

/**
 * Calculates world distance in map points from screen distance in logical pixels
 *
 * ⚠ WARNING: Stable compatibility with the MapGL API is not guaranteed. The function depends on the internal map logic that may be changed in the future.
 *
 * @param px Logical pixels
 * @param zoom Map zoom
 */
export function screenToWorldDistance(px: number, zoom: number): number {
    return (px * Math.pow(2, -zoom) * worldSize) / tileSizePx;
}
