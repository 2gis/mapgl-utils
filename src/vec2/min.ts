/**
 * Returns the minimum of two vec2's
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 */
export function min(out: number[], a: number[], b: number[]) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
}
