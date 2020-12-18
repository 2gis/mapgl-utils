import { Bounds } from './type';

export function center(out: number[], bounds: Bounds): void {
    out[0] = bounds.min[0] + (bounds.max[0] - bounds.min[0]) / 2;
    out[1] = bounds.min[1] + (bounds.max[1] - bounds.min[1]) / 2;
}
