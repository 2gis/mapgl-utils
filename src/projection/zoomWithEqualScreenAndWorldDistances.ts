import { tileSizePx, worldSize } from './constants';

/**
 * Calculates zoom where screen distance in logical pixels and world distance in map points are equal
 */
export function zoomWithEqualScreenAndWorldDistances(px: number, world: number): number {
    if (px === 0) {
        return -Infinity;
    }

    return -Math.log((world * tileSizePx) / (px * worldSize)) / Math.LN2;
}
