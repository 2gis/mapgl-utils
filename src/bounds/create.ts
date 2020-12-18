import { Bounds } from './type';

export function create(): Bounds {
    return {
        min: [Infinity, Infinity],
        max: [-Infinity, -Infinity],
    };
}
