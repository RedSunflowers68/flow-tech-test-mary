export const convertToEntries = (object: any): any[] => {
  return Object.entries(object).map(([key, value]) => ({ key, value }));
}
