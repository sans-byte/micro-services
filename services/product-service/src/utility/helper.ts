/** Assumes `rupeesStr` already matches the price format validated by createProductSchema. */
export function rupeesToPaisa(rupeesStr: string): number {
  const [rs = "0", ps = ""] = rupeesStr.trim().split(".");
  const rupeesInt = parseInt(rs, 10);
  const paisaInt = parseInt((ps + "00").slice(0, 2), 10);
  return (rupeesInt * 100) + paisaInt;
}
