import { max } from '../vec2/max';
import { min } from '../vec2/min';
import { Bounds } from './type';

export function extend(bounds: Bounds, point: number[]): void {
    min(bounds.min, bounds.min, point);
    max(bounds.max, bounds.max, point);
}
