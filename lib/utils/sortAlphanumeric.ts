export const sortAlphanumeric = <T>(arr: T[], getOptionsLabel: (obj:T)=>string): T[] => {
  return [...arr].sort((a, b) => {
    const aValue: string = String(getOptionsLabel(a) ?? "").trim();
    const bValue: string = String(getOptionsLabel(b) ?? "").trim();
    const letterRegex: RegExp = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]/;
    const aStartsWithLetter: boolean = letterRegex.test(aValue);
    const bStartsWithLetter: boolean = letterRegex.test(bValue);
    if (aStartsWithLetter && !bStartsWithLetter) {
      return -1;
    }
    if (!aStartsWithLetter && bStartsWithLetter) {
      return 1;
    }
    return aValue.localeCompare(bValue, "es", {
      numeric: true,
      sensitivity: "base",
    });
  });
};
