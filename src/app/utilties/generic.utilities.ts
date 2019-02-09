export function mapArrayOfObjectsToEntity<T>(
  array: T[],
  reducerFunc: (t: T) => string
): { [key: string]: T } {
  return array.reduce((accumulator, currentObj) => {
    accumulator[reducerFunc(currentObj)] = currentObj;

    return accumulator;
  }, {});
}
