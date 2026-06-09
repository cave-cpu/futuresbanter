// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'FuturesBanter — Free Trader Tools & Futures Calculators';
export const SITE_DESCRIPTION = 'Free futures trading calculators and plain-English breakdowns for prop firm traders. Built by a trader, for traders.';

// --- Affiliate link for CTAs (the firm you're currently featuring) ---
export const AFFILIATE_URL = 'https://elitetraderfunding.app/evaluations?ref=NLCave';
export const AFFILIATE_NAME = 'Elite Trader Funding';

// --- Prop firm rules: your calculators read from this ---
// OFFICIAL = verified on ETF's site. CONFIRM = double-check before publishing.
export const FEATURED_FIRM = 'etf';

export const PROP_FIRMS = {
  etf: {
    name: 'Elite Trader Funding',
    affiliateUrl: 'https://elitetraderfunding.app/evaluations?ref=NLCave',
    rulesLastChecked: '2026-06-08',
    safetyNetBuffer: 100,            // OFFICIAL
    plans: {
      '1-step': {
        label: '1 Step',
        drawdownType: 'trailing-intraday',
        dailyLossLimit: null,
        microsPerMini: 10,
        minTradingDaysEval: 5,
        minQualifiedDaysFirstPayout: 8,
        maxPayoutPerCycle: 3000,
        sizes: [
          { balance: 50000,  maxDrawdown: 2000, profitTarget: 3000,  maxMinis: 8  },
          { balance: 100000, maxDrawdown: 3000, profitTarget: 6000,  maxMinis: 14 },
          { balance: 250000, maxDrawdown: 6500, profitTarget: 15000, maxMinis: 24 },
        ],
      },
    },
    consistency: {
      evaluationMaxBestDayPct: 40,   // CONFIRM
      payoutMaxBestDayPct: 30,       // CONFIRM
    },
    atd: {
      minRealizedPerDay: 200,        // CONFIRM
      minPctOfBestDay: 23,           // CONFIRM
      qualifiedDaysFirstPayout: 8,   // OFFICIAL
      qualifiedDaysSubsequent: 10,   // CONFIRM
    },
  },
};