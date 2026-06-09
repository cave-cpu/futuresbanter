---
title: "Trailing Drawdown Explained: What Actually Moves the Line"
description: "How a trailing drawdown really works — the difference between end-of-day and intraday trailing, why unrealized profits matter, and what most traders get wrong before it costs them an account."
pubDate: 'Apr 27 2026'
heroImage: ''
---

The trailing drawdown is the rule that ends most funded accounts before traders fully understand how it works. Not because it's complicated, but because the way it moves doesn't match how most people instinctively track their P&L.

This post is the explanation I wish I'd had when I first funded an account. It applies to both evaluation and funded accounts — the mechanics are identical — with a few small differences flagged where they matter. We'll use a $50K one-step account with a $2,000 drawdown as the running example.

## What the trailing drawdown is

The trailing drawdown is a moving liquidation threshold. It starts a fixed dollar amount below your account's starting balance, and as your balance climbs, it follows you up — but never down.

For a $50K one-step account, the drawdown is $2,000. So you start with:

- **Starting balance**: $50,000
- **Liquidation threshold**: $48,000

That gap of $2,000 is your buffer. If your balance ever touches the threshold, the account is liquidated. On an evaluation, you lose the eval fee and have to start over. On a funded account, the account is closed and any pending profits are forfeited.

The threshold can move up over time. It cannot move down. Ever.

What counts as "balance" for purposes of the trail depends on your account type — and that's where most traders get burned. On ETF, one-step and fast-track accounts trail on **intraday (unrealized)** profit, EOD accounts trail at the **close**, and static accounts don't trail at all. Here's what each means.

## Intraday trailing (one-step / fast-track)

On intraday-trailing accounts, the trailing drawdown tracks your account's **highest unrealized balance** in real time. Every tick your open position moves in your favor moves the threshold up with it. Every tick it moves against you does *not* move the threshold back down.

The threshold is a one-way ratchet. Up only.

### Worked example

You're long ES on a $50K one-step account. You enter at 5200. Threshold starts at $48,000.

| Event | Account peak | Threshold | Cushion |
|---|---|---|---|
| Enter long at 5200 | $50,000 | $48,000 | $2,000 |
| Price runs to 5210 | $50,500 | $48,500 | $2,000 |
| Price runs to 5215 | $50,750 | $48,750 | $2,000 |
| Price reverses to 5208 | $50,750 (peak holds) | $48,750 (no reset) | $1,650 |
| Close trade at 5208 (+$400 realized) | $50,400 actual | $48,750 | $1,650 |

That trade made $400 in your pocket. It also moved your liquidation threshold $750 closer to your live balance. The market gave you $400 and silently took $350 of cushion.

Now imagine you do that all day. Five winners that each peak higher than where they close. By session's end, you might be up $1,500 realized — but your threshold has trailed up $2,400. You're sitting $900 closer to liquidation than you were at the open. One bad trade tomorrow and the account is gone.

This is what most traders eventually figure out the hard way: **the dollar amount that closes their account isn't what they lost on the losing trade — it's the cushion they gave up while their winners peaked and reversed.**

## End-of-day (EOD) trailing

EOD accounts work the same way, with one critical difference: the threshold only updates **once per day, at market close (4:59 PM ET)**, and only based on your **realized end-of-day balance**.

Same scenario as above on an EOD account:

| Event | Threshold |
|---|---|
| Enter long at 5200 | $48,000 |
| Price runs to 5215 (intraday peak ignored) | $48,000 |
| Close trade at 5208 (+$400 realized) | $48,000 |
| Market closes at 4:59 PM with $50,400 realized | $48,400 |

Same $400 trade. EOD took $400 of cushion. Intraday took $750. That difference compounds across every trade you take.

For most traders, EOD is the math-friendlier choice. If you let winners run and give back any portion before exiting — which is how most strategies actually work — intraday trailing will eat your cushion faster than your P&L grows.

There's a tradeoff worth knowing about: some account types add a **daily loss limit** that pauses trading for the rest of the session if you hit it, while one-step accounts don't. So the choice is more flexibility within a session versus a gentler trail. Pick based on how you actually trade, not how you wish you traded. And if you'd rather the line never move at all, a **static** account uses a fixed drawdown that doesn't trail — simpler, at the cost of a smaller buffer.

## When the trail stops trailing

The trailing drawdown isn't infinite. It only trails until it reaches a fixed point, then locks in place. That point is the **Safety Net**.

Once your realized profit reaches your drawdown amount + $100 — that's **$2,100** on this $50K account, i.e. a $52,100 balance — the drawdown stops trailing and your liquidation floor locks permanently at your **starting balance + $100 ($50,100)**. From then on:

- Your liquidation floor is permanently $50,100
- The drawdown stops following you up
- Any profit above that is fully yours to keep without it ratcheting the floor

This is the milestone every trader is grinding toward. The first dollar past the Safety Net is where the account stops feeling like a minefield and starts feeling like a real trading account.

### Account size reference (ETF one-step)

| Account | Drawdown | Profit to lock Safety Net | Locked floor |
|---|---|---|---|
| $50K | $2,000 | $2,100 | $50,100 |
| $100K | $3,000 | $3,100 | $100,100 |
| $250K | $6,500 | $6,600 | $250,100 |

Other ETF account types (fast-track, EOD, static) use different drawdown amounts — plug your exact account into the calculator to see your real numbers.

## Two rules of thumb that change everything

If you internalize only two things from this post, make it these.

### 1. The trail moves on every tick of unrealized profit (on intraday accounts)

Not when you close the trade. Not at session close. Right now, while the trade is open. If you let a winner run to a peak and then give back half of it before exiting, you've given up the *full retail value* of that peak in threshold movement and only walked away with the realized half. Train yourself to think of the trail as a ratchet, not as a function of your closing P&L.

This is why scaling out matters. A position that peaks at +$600 and you close half there has locked in that threshold movement no matter what the runner does. A position that peaks at +$600 and you hold all of it back to +$300 has cost you $300 of cushion that the trade didn't produce.

### 2. The trail does not care about your stop-loss

A common belief: "My stop is $200, so I can only lose $200 of cushion." That's only true if the trade goes immediately against you.

If the trade first runs $400 in your favor, then reverses through your stop:

- The threshold has moved $400 up (intraday) — that cushion is gone
- Your stop locks in another $200 loss
- **Total impact: $600 of cushion gone on a "$200 risk" trade**

Position-size against the trail, not against the stop. On an intraday account specifically, every dollar of unrealized profit is a dollar of cushion you've put at risk until the trade is closed.

## A note on evaluations vs funded accounts

The trailing drawdown rules are identical on both. What differs:

**On an evaluation** — the trail is the main liquidation rule that matters. Hit your profit target without breaching the threshold and you pass.

**On a funded account** — the trail still applies the same way until it locks at the Safety Net. After that, additional rules layer in around getting paid: the consistency rule (no single day more than your firm's limit of total profit at payout), balance thresholds for your first payouts, and payout caps. The exact numbers vary by firm — check yours.

For the purposes of understanding the trail itself, treat them the same. The mechanics don't change between account states.

## Run your own numbers

If you want to see exactly where your threshold is and how much cushion you have, [the Trailing Drawdown Calculator](/tools/trailing-drawdown-calculator) shows your real-time threshold, distance to Safety Net, and what your cushion looks like by account size and type. Plug in your account size and current balance.

Once your account clears the Safety Net and the floor locks, you'll start running into the rules that govern getting paid — consistency, payout thresholds, payout caps. The [Consistency Calculator](/tools/consistency-calculator) handles that math if you're already there, and the [consistency rule explainer](/blog/apex-consistency-rule-explained) walks through it in detail.

If you're shopping for a firm, [Elite Trader Funding](/go/apex) runs funded accounts from $10K to $250K across one-step, fast-track, EOD, and static formats.

## The takeaway

Most traders manage their account against the visible loss on the chart. The visible loss is what you can see — red numbers on a stopped-out position. The trail movement is what you can't see — there's no indicator that says "you just gave up $300 of cushion" when a winner peaks and rolls over.

But the cushion is what gets you liquidated. Not the loss on any single trade.

Once you understand that the threshold is the real account balance — and the number on your platform is a temporary number that hasn't been corrected by the next reversal — the trail starts to make sense. Until you do, you're playing a game with rules you can't see.

*Rules vary by firm and account type — always confirm current numbers on the official Elite Trader Funding site before trading.*

---

*If you found this useful, the [trailing drawdown calculator](/tools/trailing-drawdown-calculator) is the fastest way to apply this to your own account. Bookmark it.*