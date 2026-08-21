/** Assumes `rupeesStr` already matches the price format validated by createProductSchema. */
export function rupeesToPaise(rupeesStr: string): number {
  const [rs = "0", ps = ""] = rupeesStr.trim().split(".");
  const rupeesInt = parseInt(rs, 10);
  const paiseInt = parseInt((ps + "00").slice(0, 2), 10);
  return (rupeesInt * 100) + paiseInt;
}
