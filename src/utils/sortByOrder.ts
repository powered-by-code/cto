export const sortByOrder = (a: any, b: any) =>
  (a?.order ?? Infinity) - (b?.order ?? Infinity);
