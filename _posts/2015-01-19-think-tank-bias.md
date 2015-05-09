---
layout: post
title:  "Think Tank Bias via Employees' Political Gifts"
author: Tom VanAntwerp
date:   2015-01-19 09:25:00
thumbnail: /images/think-tank-election-gifts-percentage.png
hide_thumbnail_in_post: true
description: "I’ve written before how various think tanks are criticized as highly biased—and therefore unreliable—based on their sources of funding. As a think tank employee, I can tell you anecdotally that my own biases are not inherited from my employer’s donors. Rather than infer a think tank’s bias via the donor base, I wanted to find a direct measure of ideological bias among the think tank staff."
tags:
  - data
  - Democratic Party
  - Libertarian Party
  - Republican Party
  - think tanks
  - 2012 Election
---

I’ve written before how various think tanks are criticized as highly biased—and therefore unreliable—based on [their sources of funding](http://tomvanantwerp.com/think-tank-funding-guilt-association/). As a think tank employee, I can tell you anecdotally that my own biases are not inherited from my employer’s donors. Rather than infer a think tank’s bias via the donor base, I wanted to find a direct measure of ideological bias among the think tank staff.

A great deal of [political contributions are public record](http://www.opensecrets.org/). Assuming that contributions to politicians and parties are a form of [revealed preference](http://en.wikipedia.org/wiki/Revealed_preference), such contributions could tell us about the actual biases of think tank employees and how strongly they hold them. Examining political contributions by the [top ten think tanks](http://gotothinktank.com/dev1/wp-content/uploads/2014/01/GoToReport2013.pdf)’ employees in the 2012 election year, I came to the following conclusions:

* Think tank employees are extremely partisan. According to OpenSecrets, [only 0.4% of Americans gave $200+ to partisan causes](https://www.opensecrets.org/bigpicture/DonorDemographics.php) in 2012. The proportion of a think tanks’ employees who give at that level ranged from 2.9% to 8.7%.
* Discussions of bias via donor base don’t match actual employee partisanship. Comparing the most obviously ideological think tanks, employees of both [Heritage Foundation](http://www.heritage.org/) and [Center for American Progress](https://www.americanprogress.org/) gave vastly more to political groups than did employees of [Cato Institute](http://www.cato.org/). While the Wikipedia discussion of Cato’s funders was over three times longer than the same discussion for either Heritage or CAP, only 3.5% of Cato’s employees made partisan donations compared to 8.7% for Heritage and 8.2% for CAP. The total amount Cato employees gave was also dwarfed by Heritage and CAP employees: $10,200 versus $76,653 and $100,747.
* Think tank employees overwhelmingly give to Democratic causes. Nearly 78% of all political contributions from think tank employees went to Democrats. 208 think tank employees gave a total of  $452,589 to Democrats in 2012; only 82 employees gave a total of $112,653 to Republicans. Predictably, no one at Heritage or Cato gave to a Democrat and no one at CAP gave to a Republican. The only donation to a Libertarian was $250 from Cato’s former president Ed Crane to the [Gary Johnson](http://en.wikipedia.org/wiki/Gary_Johnson) campaign.
* The libertarian Cato Institute doesn’t give to Libertarians. There are two possible reasons for this. The first, and probably the one advanced by people who oppose Cato’s policy positions, is that Cato isn’t really libertarian at all. I do suspect that some employees at Cato really are conservative rather than libertarian. The second explanation, and the one I find more likely from personal experience with many employees of Cato, is that they have no faith in the [Libertarian Party](http://en.wikipedia.org/wiki/Libertarian_Party_%28United_States%29) as a vehicle for policy change.

[My raw data are available on GitHub](https://github.com/tvanantwerp/think-tank-political-gifts), as is the [python script I used to scrape OpenSecrets](https://github.com/tvanantwerp/opensecrets-scraper). It’s worth noting that my data don’t include contributions under $200 as those amount are not publicly available. I had to manually clean the data to match up the same individuals over several gifts when their information was slightly different (e.g, JONES, MARTIN and JONES, MARTIN T), and to standardize the naming of the employing think tanks. I also tried to remove any false positives, e.g. only include people from this [Cato](http://cato.org/) and not that [Cato](http://www.catofashions.com/). If anyone finds errors in my data or analysis, let me know and I’ll update them.

![Percentage of Employees at Top Ten Think Tanks Giving to Political Groups During the 2012 Election Cycle and the Partisan Division of the Total Contributions](/images/think-tank-election-gifts-percentage.png)

![Total Contributions of Employees at Top Ten Think Tanks Giving to Political Groups During the 2012 Election Cycle](/images/think-tank-election-gifts-total.png)
