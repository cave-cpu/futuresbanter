---
title: "Apex Consistency Rule Explained: The 50% Rule and How to Stay Eligible for Payouts"
description: "Apex's consistency rule blocks payouts when one trading day makes up too much of your total profit. Here's exactly how the 50% rule works, the math behind it, and how to plan trading days that keep you eligible."
pubDate: 'Apr 30 2026'
heroImage: ''
---

You can hit your profit target on an Apex PA, clear the Safety Net, and still get your payout request denied. The rule that blocks it is the **consistency rule**, and it surprises new traders almost every time.

The mechanic is simple: no single trading day can make up too much of your total profit when you request a payout. The number that defines "too much" changed in March 2026 from 30% to 50%, which makes the rule significantly easier to live with — but only if you understand how it works.

This post is the explanation, with the math worked out and a quick reference for legacy 30% accounts at the end.

## What the consistency rule actually checks

When you request a payout, Apex looks at your profit history since your last approved payout (or since the account opened, if it's your first). For every day you've traded:

> **No single day's profit can be more than 50% of your total profit at the time of the request.**

That's the entire rule.

If your biggest single day was $1,000 and your total profit since the last payout is $2,500, your biggest day is 40% of total — under 50%, you pass. If your biggest day was $1,500 and your total is the same $2,500, your biggest day is 60% — over 50%, the request gets denied until you trade more days and bring that percentage down.

The rule resets after every approved payout. Each payout cycle is its own clean slate of profit data.

## Why this rule exists

Apex's argument is that the rule is there to prove you're trading a real strategy, not getting lucky on one massive day and trying to cash out before reverting to losses. From their perspective, a trader who scores $5,000 on a single news event then immediately requests a payout looks like luck. A trader whose $5,000 profit was spread across ten $500 days looks like skill.

You don't have to agree with the philosophy to live with the rule. But it's worth knowing why it exists, because the way you fix a consistency violation is by trading the kind of days that the rule is trying to incentivize — smaller, more uniform profit days that dilute the big one.

## Worked example: passing and failing

Let's walk through a $50K PA with two scenarios.

### Scenario A: Passes the consistency rule

You've traded these five days since your last payout:

| Day | Profit |
|---|---|
| Day 1 | +$400 |
| Day 2 | +$600 |
| Day 3 | +$800 |
| Day 4 | +$1,200 |
| Day 5 | +$500 |

**Biggest day: $1,200. Total profit: $3,500.**

Biggest day percentage: 1,200 ÷ 3,500 = **34.3%**.

That's under the 50% threshold. Payout request approved (assuming Safety Net is also clear, which we'll come back to).

### Scenario B: Fails the consistency rule

Same trader, different distribution:

| Day | Profit |
|---|---|
| Day 1 | +$300 |
| Day 2 | +$200 |
| Day 3 | +$2,500 |
| Day 4 | +$400 |
| Day 5 | +$100 |

**Biggest day: $2,500. Total profit: $3,500.**

Biggest day percentage: 2,500 ÷ 3,500 = **71.4%**.

Over 50%. Payout request denied.

Notice that both scenarios produce the same total profit. The difference is entirely in distribution. The rule isn't "did you make enough money" — it's "is your profit spread across multiple days."

## How to fix a consistency violation

If you have a day that's over 50% of your total profit, you have two paths to get back into compliance:

### Path 1: Trade more days to dilute the big day

Keep trading. Add more profitable days. Each new day grows the denominator (total profit) without growing the numerator (your biggest day). Eventually the percentage drops below 50%.

The math: to dilute a biggest day of `X` to exactly 50%, you need a total profit of `2X`. To dilute it under 50% comfortably, aim for `2.2X` or higher.

In Scenario B above:

- Biggest day = $2,500
- Required total profit to hit 50%: 2,500 × 2 = **$5,000**
- Required total profit to hit a comfortable 45%: 2,500 ÷ 0.45 = **$5,556**

So if your $2,500 day was day 3 and you want to request a payout this cycle, you need to trade enough additional days to add at least $1,500 more profit (to bring the total from $3,500 to $5,000). More if you want a buffer.

### Path 2: Wait it out — the rule resets after the next approved payout

If you've got a clean payout cycle behind you, the rule starts over from zero. So one option is to take a smaller payout that doesn't include your big day in the consistency check, then trade a fresh cycle.

This isn't always possible (the timing depends on payout windows and account state), but it's worth knowing as an option.

## How to plan around the rule going forward

If you're trading a PA and you know about the rule from day one, the strategic move is simple: **target a steady distribution from the start**.

Some practical guardrails:

- **Set a daily profit target you stop at.** If your account size suggests aiming for $3,000 over a payout cycle, that's roughly $300/day across 10 trading days, or $500/day across 6 days. Pick a daily cap and stop when you hit it. The cap doesn't have to be tight — just a number you don't blast through on green days.
- **Treat unusually big days as a signal to pause, not double down.** If you happen to have a $1,500 day in an account where your typical day is $300, you've now created a consistency problem you'll have to work to fix. Trading bigger the next day to "build on momentum" usually creates a *bigger* day, which makes the percentage worse.
- **Track your consistency percentage in real time.** Knowing where you stand each day prevents surprise denials. The [Consistency Checker](/tools/apex-consistency-checker) does this calculation for you — plug in your biggest day and total profit, and it tells you exactly where you stand.

## A note for legacy account holders

Accounts purchased **before March 2026** still operate under the old 30% consistency rule. Same mechanic, stricter threshold:

> No single day's profit can be more than 30% of total profit at the time of the request.

The math is the same, just less forgiving:

- $1,000 biggest day on legacy 30% rule = need $3,333 minimum total profit to pass
- Same $1,000 biggest day on current 50% rule = need $2,000 minimum total profit to pass

If you bought your account in 2025 or earlier, this is your number. The Consistency Checker has a toggle for legacy accounts — make sure it's on the right setting before you trust the result.

## Consistency rule vs Safety Net rule — they're not the same thing

This trips traders up constantly because both involve thresholds for getting paid. They're separate gates.

The **consistency rule** is about *how* your profit is distributed. The check happens at payout request time. Pass it by spreading your profit across multiple days.

The **Safety Net rule for payouts** is about your *minimum account balance* at payout request time. For your first three payouts on a PA, your balance must be at or above your starting balance + drawdown + $100 (e.g., $52,600 on a $50K account). After three successful payouts, this requirement disappears.

Both have to be true to get paid. Failing either one denies the payout. We'll cover the Safety Net rule and the full payout process in a separate post.

For now, the simple summary: **clear the consistency check (50% rule), clear the Safety Net (balance threshold), and you can request a payout.**

## The takeaway

The consistency rule isn't designed to trap traders. It's designed to filter for traders whose strategies actually scale across multiple days, not just lottery-ticket trades that happen to hit. Once you understand the math, planning around it becomes part of how you run a PA rather than a surprise that denies your first payout.

The two-line version of the rule:

1. No single day can be more than 50% of your total profit since your last payout (or 30% on legacy accounts)
2. Fix violations by adding more profit days, not by manipulating the big day

Run your numbers in the [Consistency Checker](/tools/apex-consistency-checker) before requesting a payout. It'll tell you in two seconds whether you're clear or how much profit you still need.

---

*If you're still working through the trailing drawdown side of the equation, the [trailing drawdown explainer](/blog/apex-trailing-drawdown-explained) covers the rule that gets accounts liquidated before they ever reach a payout request.*