import { LngLatBounds } from './type';
import { clamp } from '../common/clamp';

export function clampPoint(out: number[], bounds: LngLatBounds, point: number[]): void {
    out[0] = clamp(point[0], bounds.southWest[0], bounds.northEast[0]);
    out[1] = clamp(point[1], bounds.southWest[1], bounds.northEast[1]);
}
