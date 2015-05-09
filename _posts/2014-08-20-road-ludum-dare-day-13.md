---
layout: post
title:  "The Road to Ludum Dare, Day 13"
author: Tom VanAntwerp
date:   2014-08-20 20:26:00
description: "Not much longer now! Yesterday evening I didn’t get much practice in due to a late-night event, but tonight I worked on my practice Flappy Bird clone."
tags:
  - design
  - Ludum Dare
  - programming
  - video games
---

Not much longer now! Yesterday evening I didn’t get much practice in due to a late-night event, but tonight I worked on my practice Flappy Bird clone.

This challenge is going to be very intense. I feel confident that I can finish a game, but it won’t be very good. It might be a standard platformer or shooter with art vaguely related to the theme. I’m not happy about that, but I don’t have a lot of experience to draw on for my first LD. I just have to keep my goal in mind: build a working game. That’s it. I can keep learning after this, but for now I just need to focus on minimum viable video game.

One design choice while going through this tutorial that I may regret is that, so I could more easily align sprite tiles, I set pixels-to-Unity-units at one. The default Unity unit is treated equivalently to a meter in distance. This means that my tiny flappy bird is, according to Unity, 17 meters long. It’s not something you’ll see while playing my work-in-progress, but this has some bad effects with the built-in physics. Movement is presently controlled with scripts, but I think I’ll need to change that to use built-in physics soon. I’ll probably have to go back and change the pixels-to-units value to the default and rearrange all my sprites again.
