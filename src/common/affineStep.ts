import { clamp } from './clamp';

export function affineStep(min: number, max: number, value: number): number {
    return clamp((value - min) / (max - min), 0, 1);
}
