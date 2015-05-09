---
layout: post
title:  "Make Passwords Easy to Remember, Hard to Guess"
author: Tom VanAntwerp
date:   2015-03-30 11:13:00
thumbnail: /images/alea-logo.svg
description: "The idea is that you’ve got a long list of words, all numbered with five digits between one and six. Then you roll a die five times, look up the number corresponding to your five rolls, and add that word to your password. Do that maybe seven times and you’ve got a password that’s easy for you to remember but hard to guess. The major problem I saw with this method of password generation was this: I don’t own any dice!"
---

Last week, I read an interesting article about [generating random passwords](https://firstlook.org/theintercept/2015/03/26/passphrases-can-memorize-attackers-cant-guess/) with a method called Diceware. The idea is that you’ve got a long list of words (7,776, precisely) all numbered with five digits between one and six. Then you roll a die five times, look up the number corresponding to your five rolls, and add that effectively random word to your password. Do that maybe seven times and you’ve got a password that’s easy for you to remember (because it’s just seven English words) but hard to guess (7,7767 ≈ 1.72 octillion possible combinations). If you could try one trillion combinations per second, it would still take tens of millions of years to test them all. It’s basically a system for creating passwords along the lines of [`correct horse battery staple`](https://xkcd.com/936/).

The major problem I saw with this method of password generation was this: I don’t own any dice!

So, being a programmer, I did what comes naturally: I built a simple program to act as dice on my behalf!

Without further ado, I introduce [Alea: Random Password Generator](http://tvanantwerp.github.io/alea/). It generates random passwords using a list of 7,776 English words taken at random from a larger list of 100k+. And unlike using a physical die, Alea spits out passwords as quickly as you can click “Generate”.

And now, to totally tear my work apart.

This program was a just-for-fun project of mine. If you’re up against a nation-state adversary, don’t rely on  Alea for passwords. Sophisticated hackers could use man-in-the-middle attacks to compromise Alea’s results. And of course, if your machine is already compromised, nothing Alea generates will be a secret. Nevertheless, it was a fun diversion for an afternoon.

Regardless of Alea’s practical limitations, password management is something you should take seriously. Many individuals have very bad password habits that could make them easy targets for identity theft and other kinds of fraud. Passwords should be:

* **Unique**: If you use the same password for many accounts, you’re [only as safe as the least secure account](https://xkcd.com/792/) that uses it. If a hacker gets your email and shared password from an insecure web forum, they could take control of your email account and then your bank accounts as well. Unique passwords between accounts help prevent this.
* **Random**: To speed up the time it takes to crack passwords, hackers have documents called rainbow tables that include lists of common passwords and permutations on them. Cracking programs go through these lists before they start guessing at random, and many passwords can be guessed this way. A truly random password will not be in anyone’s rainbow table, and is thus much more secure than passwords like `MyAlmaMaterSuperAwesome2010` that you and dozens of other people in your university class are using.
* **Lengthy**: [Short passwords are easy to crack.](http://www.ghacks.net/2012/04/07/how-secure-is-your-password/) Every additional character in a password exponentially increases the possible combinations to guess through. Many passwords under 8 characters long can be cracked within hours, if not instantly. Do not use short passwords.

I have 158 personal digital logins, and even with tools like Alea I could never remember that many passwords. To adhere to the three rules above without going mad, I use [KeePass](http://keepass.info/) to generate very long complex passwords which are unique to each account I have. Since adopting the practice of password management, my accounts are much safer and my mind has a lot more free space. KeePass makes secure passwords and [remembers them for me so that I don’t have to](https://xkcd.com/538/). Password managers are easier than Alea and more secure, too. If you’re not using a password manager, I can’t recommend them highly enough.
