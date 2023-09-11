export const refreshPage = () => window.location.reload();

/**
 * This function is used to deep clone an object.
 * It is used in the context to avoid the mutation of the state.
 * @param {T} value - The object to clone.
 * @template T
 * @returns {T} - The cloned object.
 */
export const deepClone = <T>(value: T): T =>
    JSON.parse(JSON.stringify(value)) as T;
