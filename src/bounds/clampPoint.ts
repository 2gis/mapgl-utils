import { Bounds } from './type';
import { clamp } from '../common/clamp';

export function clampPoint(out: number[], bounds: Bounds, point: number[]): void {
    out[0] = clamp(point[0], bounds.min[0], bounds.max[0]);
    out[1] = clamp(point[1], bounds.min[1], bounds.max[1]);
}
