import { tileSizePx, worldSize } from './constants';

/**
 * Calculates world distance in map points from screen distance in logical pixels
 * @param px Logical pixels
 * @param zoom Map zoom
 */
export function screenToWorldDistance(px: number, zoom: number): number {
    return (px * Math.pow(2, -zoom) * worldSize) / tileSizePx;
}
