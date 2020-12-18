import { LngLatBounds } from './type';

export function create(): LngLatBounds {
    return {
        southWest: [Infinity, Infinity],
        northEast: [-Infinity, -Infinity],
    };
}
