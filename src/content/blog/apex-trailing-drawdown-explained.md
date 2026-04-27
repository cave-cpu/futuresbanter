---
title: "Apex Trailing Drawdown Explained: What Actually Moves the Line"
description: "How Apex's trailing drawdown really works — the difference between EOD and Intraday, why unrealized profits matter, and what most traders get wrong before it costs them an account."
pubDate: 'Apr 27 2026'
heroImage: ''
---

The trailing drawdown is the rule that ends most Apex accounts before traders fully understand how it works. Not because it's complicated, but because the way it moves doesn't match how most people instinctively track their P&L.

This post is the explanation I wish I'd had when I first funded an account. It applies to both Evaluation and PA accounts — the mechanics are identical — with a few small differences flagged where they matter.

## What the trailing drawdown is

The trailing drawdown is a moving liquidation threshold. It starts a fixed dollar amount below your account's starting balance, and as your balance climbs, it follows you up — but never down.

For a $50K account, the drawdown is $2,500. So you start with:

- **Starting balance**: $50,000
- **Liquidation threshold**: $47,500

That gap of $2,500 is your buffer. If your balance ever touches the threshold, the account is liquidated. On an Evaluation, you lose the eval fee and have to start over. On a PA, the account is closed and any pending profits are forfeited.

The threshold can move up over time. It cannot move down. Ever.

What counts as "balance" for purposes of the trail is where Intraday and EOD diverge — and where most traders get burned.

## Intraday Trailing Drawdown

On Intraday accounts, the trailing drawdown tracks your account's **highest unrealized balance** in real time. Every tick your open position moves in your favor moves the threshold up with it. Every tick it moves against you does *not* move the threshold back down.

The threshold is a one-way ratchet. Up only.

### Worked example

You're long ES on a $50K Intraday account. You enter at 5200. Threshold starts at $47,500.

| Event | Account peak | Threshold | Cushion |
|---|---|---|---|
| Enter long at 5200 | $50,000 | $47,500 | $2,500 |
| Price runs to 5210 | $50,500 | $48,000 | $2,500 |
| Price runs to 5215 | $50,750 | $48,250 | $2,500 |
| Price reverses to 5208 | $50,750 (peak holds) | $48,250 (no reset) | $2,150 |
| Close trade at 5208 (+$400 realized) | $50,400 actual | $48,250 | $2,150 |

That trade made $400 in your pocket. It also moved your liquidation threshold $750 closer to your live balance. The market gave you $400 and silently took $350 of cushion.

Now imagine you do that all day. Five winners that each peak higher than where they close. By session's end, you might be up $1,500 realized — but your threshold has trailed up $2,400. You're sitting $900 closer to liquidation than you were at the open. One bad trade tomorrow and the account is gone.

This is what most Apex traders eventually figure out the hard way: **the dollar amount that closes their account isn't what they lost on the losing trade — it's the cushion they gave up while their winners peaked and reversed.**

## EOD Trailing Drawdown

EOD ("end of day") accounts work the same way, with one critical difference: the threshold only updates **once per day, at market close (4:59 PM ET)**, and only based on your **realized end-of-day balance**.

Same scenario as above on an EOD account:

| Event | Threshold |
|---|---|
| Enter long at 5200 | $47,500 |
| Price runs to 5215 (intraday peak ignored) | $47,500 |
| Close trade at 5208 (+$400 realized) | $47,500 |
| Market closes at 4:59 PM with $50,400 realized | $47,900 |

Same $400 trade. EOD took $400 of cushion. Intraday took $750. That difference compounds across every trade you take.

For most traders, EOD is the math-friendlier choice. If you let winners run and give back any portion before exiting — which is how most strategies actually work — Intraday will eat your cushion faster than your P&L grows.

There's a tradeoff worth knowing about: **EOD accounts have a daily loss limit (DLL)** that pauses trading for the rest of the session if you hit it. Intraday accounts don't have a DLL. So Intraday gives you more flexibility within a single session in exchange for a more punishing trail. Pick based on how you actually trade, not how you wish you traded.

## When the trail stops trailing

The trailing drawdown isn't infinite. It only trails until it reaches a fixed point, then locks in place.

That fixed point is the **Safety Net**, calculated as:

> **Account starting balance + drawdown amount + $100**

For a $50K account: $50,000 + $2,500 + $100 = **$52,600**.

Once your balance exceeds $52,600 *and* the threshold catches up to your starting balance ($50,000), the threshold stops moving. From then on:

- Your liquidation threshold is permanently $50,000
- The drawdown stops following you up
- Any profit above $50,000 is fully yours to keep without it ratcheting the threshold

This is the milestone every Apex trader is grinding toward. The first dollar above $52,600 is where the account stops feeling like a minefield and starts feeling like a real trading account.

### Account size reference

Drawdown amounts and Safety Nets by account size:

| Account | Drawdown | Safety Net |
|---|---|---|
| $25K | $1,500 | $26,600 |
| $50K | $2,500 | $52,600 |
| $100K | $3,000 | $103,100 |
| $150K | $5,000 | $155,100 |

(Larger accounts existed under legacy pricing and follow the same formula. New evaluations top out at $150K as of 2026.)

## Two rules of thumb that change everything

If you internalize only two things from this post, make it these.

### 1. The trail moves on every tick of unrealized profit (on Intraday)

Not when you close the trade. Not at session close. Right now, while the trade is open. If you let a winner run to a peak and then give back half of it before exiting, you've given up the *full retail value* of that peak in threshold movement and only walked away with the realized half. Train yourself to think of the trail as a ratchet, not as a function of your closing P&L.

This is why scaling out matters. A position that peaks at +$600 and you close half there has locked in that threshold movement no matter what the runner does. A position that peaks at +$600 and you hold all of it back to +$300 has cost you $300 of cushion that the trade didn't produce.

### 2. The trail does not care about your stop-loss

A common belief: "My stop is $200, so I can only lose $200 of cushion." That's only true if the trade goes immediately against you.

If the trade first runs $400 in your favor, then reverses through your stop:

- The threshold has moved $400 up (Intraday) — that cushion is gone
- Your stop locks in another $200 loss
- **Total impact: $600 of cushion gone on a "$200 risk" trade**

Position-size against the trail, not against the stop. On an Intraday account specifically, every dollar of unrealized profit is a dollar of cushion you've put at risk until the trade is closed.

## A note on Evaluations vs PAs

The trailing drawdown rules are identical on both. What differs:

**On an Evaluation** — the trail is the only liquidation rule that matters. Hit your profit target without breaching the threshold and you pass. There's no Consistency Rule, no payout Safety Net, no contract scaling.

**On a PA** — the trail still applies the same way until it locks at the Safety Net. After that, additional rules layer in: Consistency Rule (no single day more than 50% of total profit at payout request, or 30% on legacy accounts), the Safety Net rule for first 3 payouts, contract scaling until you clear the threshold, and the 6-payout limit before the PA closes.

For the purposes of understanding the trail itself, treat them the same. The mechanics don't change between account states.

## Run your own numbers

If you want to see exactly where your threshold is and how much cushion you have, [the Apex Drawdown Calculator](/tools/apex-drawdown-calculator) shows your real-time threshold, distance to Safety Net, and what your cushion looks like for both EOD and Intraday account types. Plug in your account size and current balance.

Once your account clears the Safety Net and the threshold locks, you'll start running into the rules that govern getting paid — Consistency Rule, payout Safety Net, payout caps. I'll cover those in a separate post. For now, the [Consistency Rule Checker](/tools/apex-consistency-checker) handles the math if you're already there.

## The takeaway

Most traders manage their account against the visible loss on the chart. The visible loss is what you can see — red numbers on a stopped-out position. The trail movement is what you can't see — there's no indicator that says "you just gave up $300 of cushion" when a winner peaks and rolls over.

But the cushion is what gets you liquidated. Not the loss on any single trade.

Once you understand that the threshold is the real account balance — and the number on your platform is a temporary number that hasn't been corrected by the next reversal — Apex starts to make sense. Until you do, you're playing a game with rules you can't see.

---

*If you found this useful, the [drawdown calculator](/tools/apex-drawdown-calculator) is the fastest way to apply this to your own account. Bookmark it.*