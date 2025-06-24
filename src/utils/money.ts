export function formatMoney(
  amount: number,
  currency: string = 'PHP',
  locale: string = 'en-PH'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
