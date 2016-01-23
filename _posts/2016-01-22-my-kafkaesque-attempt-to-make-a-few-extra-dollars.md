---
layout: post
title:  "My Kafkaesque Attempt to Make a Few Extra Dollars"
author: Tom VanAntwerp
date:   2016-01-22 2:24:00
description: "I try repeatedly, with zero success, to register to bid on 18F Micro-purchases."
tags:
  - "18F"
  - programming
---
[18F][18f]'s [Micro-purchase Marketplace][micropurchase] has gotten lots of positive attention. I'm generally very impressed with a lot what 18F does, and I wanted to see if I could participate in their next round of bidding. I'm always looking for opportunities, and I figured there must be something that will come up that I could work on. So I set out to sign up.

That hasn't really worked out yet...

I've watched presenters from 18F talk about [bureaucracy hacking][bhack]: tackling tough problems of the federal bureaucracy that make innovation difficult or impossible and finding creative ways around them. And while I'm sure the ideas and the tech behind their micro-purchase platform are a great extension of that idea, the registration process is not.

I was very confused at first, but thankfully [Will Slack][wslack] pointed me toward a [video by Joshua Tauberer][tauberer] on how to get through all of this. (Spoiler alert: Josh's experience is going to go a lot better than mine does.)

To register to bid on the micro-purchase platform, you need to be an approved contractor on [SAM.gov][sam]. I'm not a fed and I don't really know what SAM.gov is or does, though I'm sure there's some regulation that requires they use it. Going from an 18F site to SAM.gov is a jarring experience--it's clearly not a system they've touched yet. But I press on and set up an account there.

Next it tells me I need to register an entity. To do this, I'll need a D-U-N-S number. For those who don't know what that is, [Dun & Bradstreet][dnb] is a *private* company that trades in corporate information. The D-U-N-S number is an ID they give to corporations registered in their system.

I don't think that the federal government should be relying on a single private information broker to validate their contractors. I'm fairly certain that an SSN or TIN should be all they need to figure out who I am and if I really exist--especially since, you know, those are *government* identifiers. But, this is the process, and I've got no choice but to go with it.

So I follow the link to the D-U-N-S registration page and get to work. I fill out the first page of their form, where I give my full name and residential address, and then basically repeat it as a sole proprietor.

Failure.

Dun & Bradstreet can't verify that I'm a real person. Uh oh.

I try filling in the form again and again with little variations, hoping I'll get around their failure to parse my name or address or whatever it is. No luck at all. So I email their support and tell them my problems.

The next day, I get a reply which contained the following:

> Thank you for contacting Dun & Bradstreet Government Customer Response Center.  We apologize that you are having difficulty submitting your request online.  Please try the following:
>
> Ensure that you have your pop up blockers disabled on the browser you are using to access iupdate.  Chrome is not compatible with this website.
>
> The address you  are using on your individual details must have a history of residency of two or more years.  Preferably use the address that has been on your Drivers' License the longest.

Ok, first let's address the issue of not supporting Chrome. From 18F's own [analytics.usa.gov][analytics], the largest plurality of users--over 40%--are on Chrome. I can't think of any justifiable reason why their site doesn't work correctly with Chrome in the year 2016.

But whatever. I open up Internet Explorer and think to myself: "Ok, the address on my ID (which is old but valid) is still my home address where I grew up. Let me try that."

I fill out the Dun & Bradstreet form again with my childhood address, and...success! They've validated that I exist! Now I just need to complete the [knowledge-based authentication][kba] (which is [very vulnerable to ID thieves][irshack], by the way) to prove that I am, in fact, this person who exists.

But, wait, this doesn't makes sense...

I have to correctly ID the last two digits of my SSN, but none of these number-pairs are them!

And then, I have a sickening realization.

I choose the last two digits of *my father's* SSN, and sure enough, I'm passed through to the next section. Dun & Bradstreet has mistaken me for my father.

"Ok," you're thinking, "I can see how they might make that mistake. If you share his name and address, how should their system know you're not your dad?"

**My father died 15 years ago.**

So here I am, still stuck at Dun & Bradstreet, debating whether or not I should start a sole proprietorship in a dead man's name. Even if I somehow manage to get through this insanity, I'll probably get stuck again at SAM.gov. All because someone, somewhere, probably wrote a regulation that said only TRUE REDBLOODED AMERICANS<sup>TM</sup> can be government contractors ([even if it's a one-time gig to straighten out some CSS][css]) and, naturally, let's contract some other TRUE REDBLOODED AMERICANS<sup>TM</sup> to make sure that's the case. Lowest bidder, of course.

So...who wants to hack this bureaucracy for me?

[18f]: https://18f.gsa.gov/
[micropurchase]: https://micropurchase.18f.gov/
[bhack]: https://18f.gsa.gov/2014/05/14/hacking-bureaucracy-improving-hiring-and-software/
[wslack]: https://twitter.com/wslack/status/689652880186408960
[tauberer]: https://www.youtube.com/watch?v=EBM70D2g4Xc
[sam]: https://www.sam.gov/portal/SAM/##11
[dnb]: http://www.dnb.com/get-a-duns-number.html
[analytics]: https://analytics.usa.gov/
[kba]: https://en.wikipedia.org/wiki/Knowledge-based_authentication
[irshack]: http://taxfoundation.org/blog/how-hackers-breached-irs-and-stole-50-million
[css]: https://micropurchase.18f.gov/auctions/6
