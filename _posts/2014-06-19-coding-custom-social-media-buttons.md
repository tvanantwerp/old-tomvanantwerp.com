---
layout: post
title:  "Coding Custom Social Media Buttons"
author: Tom VanAntwerp
date:   2014-06-19 11:25:00
description: "Recently for work, I decided to customize our social sharing buttons on our website. Googling for custom buttons proved difficult; most results were about drawing crappy buttons in Photoshop that link to your Facebook page. I wanted buttons that were styled purely with CSS, could display share counts of the current web page (CMS-agnostic), and would actually allow the reader to share the page when they clicked them."
tags:
  - programming
  - social media
  - Tax Foundation
---
Let’s be honest: most social media buttons are ugly. They clash with the sites they’re on, and they clash with each other. Custom social media buttons, like the ones on [vox.com](http://www.vox.com/) for example, are much easier on the eyes.

Recently for work, I decided to customize our social sharing buttons on our website. Googling for custom buttons proved difficult; most results were about drawing crappy buttons in Photoshop that link to your Facebook page. I wanted buttons that were styled purely with CSS, could display share counts of the current web page (CMS-agnostic), and would actually allow the reader to **share** the page when they clicked them. Thankfully, after a few lucky search results and some time on Stack Overflow, I was able to build exactly what I wanted.

I’ve open-sourced the results [here](https://gist.github.com/tvanantwerp/6708c0bf818637bf2a50), so that anyone else may use my code and modify it for their own purposes.

I’ll eventually implement a version of these buttons on this blog, but for now, you can see them in action at the Tax Foundation blog. [Check it out](http://taxfoundation.org/blog/interactive-map-where-do-us-multinational-corporations-report-foreign-taxable-income-and-foreign)!
