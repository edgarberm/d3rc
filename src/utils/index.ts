/**
 * @returns {string} An UUID v4
 */
export function uuidv4() {
  // @ts-ignore
  const pattern = [1e7] + -1e3 + -4e3 + -8e3 + -1e11
  // @ts-ignore
  return pattern.replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  )
}
