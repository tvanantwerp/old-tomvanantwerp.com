---
layout: post
title:  "How to Punish People Who Hotlink iframes"
author: Tom VanAntwerp
date:   2015-07-16 11:01:00
description: "When major media outlets crashed our tiny VPS by hotlinking our iframe content, I decided to teach them a lesson."
tags:
  - iframe
  - JavaScript
  - hotlink
---
The [Tax Foundation](http://taxfoundation.org/) recently published our second annual [Real Value of $100 in Metro Areas map](http://taxfoundation.org/blog/real-value-100-metropolitan-areas-0). This included an interactive county-level map generated with D3.js and embedded into our main site through an `<iframe>`. Between the TopoJSON and the raw data, the iframe content was roughly 1MB in size. Happily, the map was successful and media outlets started picking it up. Less happily, many of them--[including Yahoo Finance](http://finance.yahoo.com/news/how-much-100-is-really-worth-in-each-state-194305774.html)--directly copied our iframe tag to embed the interactive map on their own site. We used a small VPS at a subdomain to host static content like the interactive $100 map, and typically the tiny 256MB of memory was more than sufficient for this purpose. However, the hotlinking of the iframe by heavily-trafficked sites effectively crashed the VPS. Not only did the interactive map not load, but *none* of our interactive content worked.

First, hotlinking content from a third party in an iframe is not smart. You don't know me, and you don't know what I've put into my JavaScript. You're exposing your visitors to unknown code that you should not trust. From a security standpoint, what Yahoo and others did was very risky.

Second, crashing my VPS by hotlinking my content is a good way to tick me off. And I cannot reward bad behavior.

Now, before our interactive map loads, it checks to see if it's running on a `taxfoundation.org` domain. If yes, it proceeds to call the data and draw the map. If no, it just shows our logo and a link back to our website.

To implement this check to prevent hotlinking of iframes, do this:

{% highlight javascript %}
var url = (window.location != window.parent.location)
      ? document.referrer
      : document.location.href;

if (url.indexOf('yourdomain.com') < 0) {
  // Punish the hotlinkers
} else {
  // Run the code as normal
}
{% endhighlight %}

This snippet of JavaScript checks to see if your content is being loaded independently or in an iframe. Then it records either its own URL or the parent window's URL, and checks to see if `yourdomain.com` is anywhere in it. If someone is hotlinking your iframe, then this check fails and you can run whatever code you want to thwart their hotlinking attempt.

I really do want people to be able to use Tax Foundation's tools, regardless of how they find it. I plan on moving our static files to an Amazon S3 bucket toward that end. But until I do, I have to protect that little VPS from being DDoSed by major media outlets. If you find your own resources similarly restricted, then this little bit of JavaScript can help you minimize the strain of heavy traffic caused by a hotlinked iframe.
