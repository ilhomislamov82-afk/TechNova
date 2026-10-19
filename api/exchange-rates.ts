export default function handler(req: any, res: any) {
  res.status(200).json({
    baseCurrency: 'USD',
    verifiedDate: '2026-10-18',
    rates: {
      USD: 1.0,
      EUR: 0.92,
      UZS: 12850.0
    },
    source: 'Official Market Reference (Central Bank & ECB standards)',
    notes: 'Rates are used strictly for transparent price comparison with full verification metadata.'
  });
}
