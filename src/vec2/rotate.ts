export function rotate(out: number[], point: number[], angle: number) {
    const x = Math.cos(angle) * point[0] - Math.sin(angle) * point[1];
    const y = Math.sin(angle) * point[0] + Math.cos(angle) * point[1];

    out[0] = x;
    out[1] = y;
}
