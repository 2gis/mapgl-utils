import { Bounds } from './type';

export function contains(bounds: Bounds, point: number[]): boolean {
    return (
        point[0] <= bounds.max[0] &&
        point[0] >= bounds.min[0] &&
        point[1] <= bounds.max[1] &&
        point[1] >= bounds.min[1]
    );
}
