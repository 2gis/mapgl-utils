import { max } from '../vec2/max';
import { min } from '../vec2/min';
import { LngLatBounds } from './type';

export function extend(bounds: LngLatBounds, point: number[]): void {
    min(bounds.southWest, bounds.southWest, point);
    max(bounds.northEast, bounds.northEast, point);
}
