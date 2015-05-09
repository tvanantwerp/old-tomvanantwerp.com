---
layout: post
title:  "The Road to Ludum Dare, Day 11"
author: Tom VanAntwerp
date:   2014-08-18 19:39:00
thumbnail: /images/flappy-bird.png
description: "Continuing my Ludum Dare prep, I’ve decided I need to complete one entire game before the main event. I’ve decided to make what is quickly becoming the “Hello World” of game development: a Flappy Bird clone."
tags:
  - design
  - Ludum Dare
  - programming
  - video games
---

Continuing my Ludum Dare prep, I’ve decided I need to complete one entire game before the main event. I’ve watched lots of YouTube tutorials for making all kinds of games. It’s a bit overwhelming. I need to focus on just one type of game to start learning more advanced principles. I’ve decided to make what is quickly becoming the “Hello World” of game development: a Flappy Bird clone. I’ve become a big fan of the Unity3D tutorials on YouTube by [quill18creates](https://www.youtube.com/channel/UCPXOQq7PWh5OdCwEO60Y8jQ), and I’ll be following his [Flappy Bird clone series](https://www.youtube.com/watch?v=T7Nz_AulrrA&list=UUPXOQq7PWh5OdCwEO60Y8jQ).

While I’m not far along in the series yet, he’s unintentionally given me a bonus: I now know why my previous attempt at parallaxing went [horribly wrong](/road-ludum-dare-day-10/)! I wasn’t paying attention to the axes set up by Unity3D for 2D game, and just assumed that the further back from the camera was, the more negative its Z axis. This was totally backwards. The camera defaults to a Z of -10, which means things are further from the camera when they have a more positive Z axis. All I had to do to get my parallaxing script to work correctly was to reverse the signs on all the Z axes of my game objects!

Slowly crawling out of the Trough of Sorrow…
