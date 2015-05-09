---
layout: post
title:  "Building a Picture Book for the Web"
author: Tom VanAntwerp
date:   2014-11-12 16:57:00
description: "The Tax Foundation recently published a new book of charts (as we call them internally, a chartbook) titled Business in America Illustrated, describing the business tax environment in the United States. In the past, the PDF of the print version was just uploading to taxfoundation.org. This was never ideal, as it limited individuals’ ability to share specific charts and navigation the publication easily. So this year, I was tasked with building a digital chartbook to solve those problems. This post goes into gory detail about how I did it."
tags:
  - AngularJS
  - chartbook
  - Polymer
  - programming
  - reveal.js
  - Tax Foundation
  - web components
---

The Tax Foundation recently published a new book of charts (as we call them internally, a chartbook) titled [Business in America Illustrated](http://interactive.taxfoundation.org/business-in-america), describing the business tax environment in the United States. In the past, the PDF of the print version was just uploading to taxfoundation.org. This was never ideal, as it limited individuals’ ability to share specific charts and navigation the publication easily. So this year, I was tasked with building a digital chartbook to solve those problems. This post goes into gory detail about how I did it.

The digital chartbook had several requirements which evolved over the course of the project. They were, in rough order of importance:

1. Display individual pages of content from the print edition with the same basic style, adapted for device size.
2. Make each page individually shareable.
3. Make the entire book easily navigable through menus, with keyboard navigation, and with mobile gestures.

About halfway through the process, we looked at [Vox.com’s card stacks](http://www.vox.com/cardstacks) and realized that what we really wanted was, more or less, a clone of that. So that’s roughly what we had in mind while putting this together. (From what I can tell, Vox built their card stacks on backbone.js.)

## Prototype 1

Our first idea was to build our digital chartbook on top of [reveal.js](https://github.com/hakimel/reveal.js/). If you’re not familiar with it, it’s a JavaScript-based presentation tool. Think PowerPoint, but viewed in any browser instead of expensive Office software. I’ve used it for presentations before, and I rather like it. The plan was to build out a theme for reveal.js that would display each page of the chartbook similarly to the print edition.

After a week of hacking at reveal.js’s source code, I decided that we couldn’t use it. It’s been very cleverly designed as a web-based presentation tool, but it’s not meant to be much else. The code relied too heavily on the assumption that you were presenting a slide deck. It was particularly a mess on mobile. It only scaled content rather than being truly responsive, resulting in 20% of the phone’s screen filled with incomprehensibly tiny text. While I fixed that particular problem, it only introduced others. I very rapidly realized that continuing with reveal.js would require a massive rewrite of its source. Instead of trying to rewrite someone else’s code, I decided it would be better to write my own from scratch.

![Reveal.js is not responsive.](/images/revealjs-not-responsive.jpg)

## Prototype 2

I had tried my hand at [AngularJS](https://github.com/angular/angular.js) through the [Shaping Up with Angular](https://www.codeschool.com/courses/shaping-up-with-angular-js) course on [Code School](https://www.codeschool.com/), so I decided to give it a try for building the digital chartbook. I also decided to use Foundation for managing styles and layout, which I was already familiar with from previous projects.

I spent nearly a month trying to build our chartbook app with AngularJS. I had no idea what I was getting into.

![AngularJS is hard.](/images/angularjs-is-hard.png)

The first two weeks were mostly spent creating the layout and styles in Foundation with the help of static dummy content. I decided that each page would be a `<section>`, and any page except the active one would be hidden just out of view with CSS classes. To do this, each section was given a fixed position and 100% width and height. The active page was translated to (0, 0), while

I originally changed these CSS classes with jQuery, and I succeeded in getting pages to fly in or out from the correct direction.

Images in the chartbook are all SVGs. This kept filesize low (kept lower still with [SVGO](https://github.com/svg/svgo)) and allowed for perfect scaling of the images. Unfortunately, the chart text scales as well and becomes unreadable on mobile devices. I have considered using `<svg>` instead of `<img>` with text size defined in the CSS. But I’m afraid that doing so would just result in the text being so large and clustered together on some charts that they would only be ugly in addition to unreadable. I’m not well satisfied with any solutions for responsive data graphics currently available to me.

After getting the basic layout settled, I started building the AngularJS app around the static content. This is where the project started to become a huge pain. AngularJS can be extremely baffling. I’ve learned a lot about it during this project, but I still struggle with several concepts.

My first major challenge was generating my page `<section>`s by fetching JSON data with AngularJS. It was somewhat tricky figuring out factories and [promises](http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/), but not too bad. Where things got really tricky was using different templates for each section depending on whether the accompanying chart was wide or squared. I ended up using `$compile` to combine the JSON data returned via a promise with the corresponding template html, all attached to the link property of a directive.

Building and displaying the pages correctly turned out to be the easy part. Navigation was proving nearly impossible. AngularJS has the ability to handle transitions within the app’s `ng-view`, but I never got them working as smoothly as my hacked-together jQuery for changing CSS styles. Pages wouldn’t flow from one to another, but just blinked into and out of existence. And Foundation’s built-in slide-out menu found something about AngularJS disagreeable and simply wouldn’t work.

Aside from the presentation of navigation, I also needed to implement three types of input to trigger page change: clickable buttons, anchor URLs, and keyboard presses. The first two I got to work, but I never could figure out the latter. I even started building a new AngularJS app from scratch to try new approaches to making it work. I started to get very close to something that worked, and I was sure I would have a breakthrough soon.

## Prototype 3

One morning about two weeks ago, I randomly came across a tutorial for building single-page apps with [Polymer](https://www.polymer-project.org/). If you haven’t looked into it, Polymer is Google’s attempt at implementing and the web components and necessary polyfills for older browsers. I had seen Polymer before but not investigated too deeply. I thought, “Maybe this tutorial will be useful for something. I’ll take a peek.”

I nearly had a heart attack! The demo Polymer app was 95% of the way to being my chartbook app!

That day, I stopped all development of the AngularJS chartbook and started working my way through the Polymer tutorial. It was, naturally, more complicated than it seemed at first. Not every step of the way had been filled in, so I spent a lot of time figuring out those missing pieces. Also, because Polymer is so relatively new and unused, there wasn’t as much information floating around the web to help me learn it. Those small challenges, however, didn’t stop me from having a basic prototype working by the end of the day. Routing, keyboard navigation, mobile gestures—everything worked!

I’m pretty blown away with what I was able to build using web components. Conditional templates were much easier to implement than with AngularJS. Whereas with AngularJS I had factories, directives, templates, and controllers all coming together to update a view with the correct styles for a particular page, with Polymer it was as easy as this:

{% highlight handlebars %}{% raw %}
<template if="{{page.format == "special-type"}}">
  <div class="special-type-styles">
    {{page.content}}
  </div>
</template>
{% endraw %}{% endhighlight %}

I also didn’t need Foundation anymore, since the default styles of the web components were close enough to what I wanted. All it needed was a little bit of CSS touch-up work to look just right.

The code for the final version of the chartbook is [currently on GitHub](https://github.com/tvanantwerp/polymer-chartbook). I’ll likely replace this repo in the future with a cleaned-up general purpose version.

## Takeaways

While I’ve learned a lot about AngularJS, I’ve also come to hate it. Shortly after moving to Polymer, I read a blog post by a more experienced AngularJS developer who [expresses it’s shortcomings](http://larseidnes.com/2014/11/05/angularjs-the-bad-parts/) better than I ever could. I think I’ll play around with some other JavaScript MV* frameworks to see if there’s anything else I like better. I tried really hard to build this app “the Angular way”, and it made everything more difficult.

Polymer and web components, by contrast, are awesome. I can’t wait to see more browsers support web components natively. It’s a bit of an apples and oranges comparison between it and AngularJS, so I won’t really attempt that.

My one main gripe against web components is dependency management. Components can depend on other components, which then depend on other components, and so on and so on. These dependencies are defined within each web component itself, so you’ll end up going from file to file to trace dependency issues. It’s very easy to start breaking things because you’re unable to keep track of what depends on what. The list of dependencies can grow quickly.

I may write follow-up posts going over some of the specific challenges I faced and solutions I devised (when I could) for both Angular and Polymer.

![Polymer is pretty.](/images/polymer-is-pretty.png)
