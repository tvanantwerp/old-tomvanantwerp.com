---
layout: post
title:  "US Companies' Foreign Taxes Visualized with D3"
author: Tom VanAntwerp
date:   2014-05-20 09:07:00
description: "The Tax Foundation has just published my first data visualization for them, showcasing IRS data on foreign taxes paid by US corporations. It’s an interactive map / bar chart combination that lets you explore taxable income, taxes paid, and effective tax rates across the world for US companies between 1992 and 2010. I wrote this with D3.js."
tags:
  - d3
  - data
  - javascript
  - Tax Foundation
  - taxes
---
The Tax Foundation has just published [my first data visualization](http://taxfoundation.org/blog/interactive-map-where-do-us-multinational-corporations-report-foreign-taxable-income-and-foreign) for them, showcasing IRS data on foreign taxes paid by US corporations. It’s an interactive map / bar chart combination that lets you explore taxable income, taxes paid, and effective tax rates across the world for US companies between 1992 and 2010. I wrote this with [D3.js](http://d3js.org/).

This is my first attempt to build something in D3, so I’ve got lots of room to improve. The code needs plenty of refactoring, but it does what it’s supposed to. I’m looking forward to improving on this and making more visualizations for Tax Foundation!

Some things to notes: Some countries have very high effective tax rates in some years. (I’ve seen as high as 400%.) This is atypical, and doesn’t usually happen in developed countries. In some years, taxable income was negative in some countries. Also, the IRS has tracked this data haphazardly. Some countries have no data, or missing data. The USSR broke up, and all former Soviet countries (including Russia) were tracked as the Former Soviet Union from 1994 to 2004. Only after 2005 were they broken out, and only Russia, Ukraine and Kazakhstan made the cut.

Also, check out Bermuda. They have zero corporate income tax, and it looks like companies have started to notice.
