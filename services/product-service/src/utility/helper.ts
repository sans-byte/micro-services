export function rupeesToPaisa(rupeesStr: string): number {
  const cleanStr = rupeesStr.trim();
  const [rs = "0", ps = "0"] = cleanStr.split(".");
  const rupeesInt = parseInt(rs, 10) || 0;
  const paddedPaisa = (ps + "00").slice(0, 2);
  const paisaInt = parseInt(paddedPaisa, 10) || 0;
  return (rupeesInt * 100) + paisaInt;
}