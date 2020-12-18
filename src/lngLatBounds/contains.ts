import { LngLatBounds } from './type';

export function contains(bounds: LngLatBounds, point: number[]): boolean {
    return (
        point[0] <= bounds.northEast[0] &&
        point[0] >= bounds.southWest[0] &&
        point[1] <= bounds.northEast[1] &&
        point[1] >= bounds.southWest[1]
    );
}
