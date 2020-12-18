/**
 * Returns the maximum of two vec2's
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 */
export function max(out: number[], a: number[], b: number[]) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
}
