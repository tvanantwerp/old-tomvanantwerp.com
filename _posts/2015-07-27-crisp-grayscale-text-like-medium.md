---
layout: post
title:  "Creating Crisp Text like Medium"
author: Tom VanAntwerp
date:   2015-07-27 23:01:00
description: "Medium's text looks amazingly clean and it's a joy to read. Here's how I'm replicating it."
tags:
  - css
  - Medium
---
Medium is one of the loveliest reading experiences on the web. Their attention to typography is key to setting them apart from being just another blogging platform. [They've discussed much of their typographic styles before](https://medium.com/@mwichary/death-to-typewriters-ii-making-type-read-well-and-look-good-3874159e515a), and it's awesome to see the work they've put into the little details.

Unfortunately, it's not always clear *how* they've done what they've done. One feature in particular that I struggled to reproduce was their method of smoothing fonts. The antialiasing method Medium uses results in grayscale body text. By default, antialiasing in the browser does not limit itself to grayscale for antialiasing black text. (I'm typically using Chrome on Windows, and this may not be entirely true for other browsers and operating systems.) This difference is easy to miss at a glance, so here's a close-up.

![Medium's grayscale antialiasing versus default behavior.](/images/medium-text-comparison.png)

You can see how Medium's "the" uses only shades of gray, while the default behavior is a mix of yellows, oranges, purples, and blues. While it's hard to see exactly what's happening with the naked eye, it does feel different. I wanted to reproduce what Medium was doing, but it tough to figure it out.

Looking at the CSS applied to paragraph text on Medium didn't help--it contained very standard text styles. And if they used JavaScript to somehow apply their smoothing, I couldn't read the minified files. So I had to experiment. At first, I thought about doing something like `p { filter: grayscale(100%); }`. The problem with this approach was that it applied to all children of `<p>`, including links and images. Using this CSS style turned **everything** gray. *No me gusta*.

![Everything is gray. Oops.](/images/grayscale-blog.jpg)

Since I couldn't find any obvious CSS styles that Medium was using, and I couldn't read their minified JavaScript, I started researching DOM traversal with JavaScript.  I wanted to see if I could selectively apply styling to just the plain text in a `<p>` tag, skipping any links, images, etc. I recently implemented a small script to set all externally-facing links in my posts to open in new tabs, so I thought I could do this too.

It didn't take long to figure out how to isolate paragraph text. In the DOM, the text in a `<p>` element is a separate child node from, say, the contents of an `<a>` element inside that paragraph. So if my HTML read:`<p>Blah <a href="#">blah</a> blah <em>blah</em> blah.</p>`, then the `childNodes` property of the paragraph is `text, a, text, em, text`. I was able to isolate all of the text nodes in a page easily enough in vanilla JavaScript, but after that I got stuck. As I researched more, I discovered that these text nodes could not accept styles directly. The best I could do would be to wrap the nodes with `<span class="make-it-grayscale"></span>`, which I considered an inelegant abuse of the DOM. Another dead end.

Finally, desperately, I just started poking through the [Codrops CSS Reference](http://tympanus.net/codrops/css_reference/) for a selector or pseudo-class that might help. By chance I came across a CSS property I'd never seen before: `mix-blend-mode`. The examples of its use showed how to layer text and images much like Photoshop layer blending modes. While I didn't need to create any image blends, it struck me that setting text to `mix-blend-mode: multiply` might achieve the desired effect.

And *voila*! It worked!

![Old vs New Text on my Blog](/images/tva-grayscale-text.png)

Obviously, my little 'ole blog is still not at the level of Medium. I've got lots of work to do. And I'm quite certain that `mix-blend-mode` will not work on every browser--even my linter didn't believe me when I insisted it was a valid CSS property. But, at least for the moment, things look a little bit closer to what I want.

> **Update**: I've [tested](https://www.browserstack.com/screenshots) these changes with positive results. The only browser that I've encountered serious issues with is Firefox for Android, which renders all text grayscale and jagged. Desktop Firefox has no issues, and I can't really debug on my phone. So for now, I'm willing to accept that Firefox on Android is awful. If anyone else encounters weird rendering problems, shoot me a message on [Twitter](https://twitter.com/tvanantwerp) with your OS and browser info.
