import { LngLatBounds } from './type';

export function center(out: number[], bounds: LngLatBounds): void {
    out[0] = bounds.southWest[0] + (bounds.northEast[0] - bounds.southWest[0]) / 2;
    out[1] = bounds.southWest[1] + (bounds.northEast[1] - bounds.southWest[1]) / 2;
}
