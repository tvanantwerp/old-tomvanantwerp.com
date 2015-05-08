---
layout: post
title:  "Welcome to Jekyll!"
author: Tom VanAntwerp
date:   2015-02-16 08:16:19
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

1. blah
2. blah
3. blah

* yadda
* yadda
* yadda

This is a blockquote:

> Keffiyeh Blue Bottle 90's, Shoreditch blog typewriter lomo XOXO mixtape DIY tousled ethical twee disrupt. Fashion axe umami chia cray Echo Park, blog shabby chic mixtape Schlitz pug letterpress cliche. Small batch fap chambray, try-hard crucifix _Neutra narwhal tote bag_ cred viral literally twee kitsch. Pour-over brunch single-origin coffee, **keffiyeh flexitarian** migas lomo blog sustainable street art. Banjo pork belly brunch pour-over sustainable cold-pressed. Fashion axe PBR&B polaroid ***try-hard Schlitz***, pork belly church-key trust fund roof party seitan. Twee farm-to-table mlkshk, Godard synth street art lomo Intelligentsia biodiesel jean shorts sriracha put a bird on it polaroid blog.

Table test:

| One | Two | Three | Four | Aardvark |
| --- | --- | --- | --- | --- |
| 123 | 456 | Mastodon | $5,000 | Poop |
| 789 | 000 | Coniferous | Lolipop | Jeans |

Jekyll also offers powerful support for code snippets:

{% highlight python %}
# prints recursive count of lines of python source code from current directory
# includes an ignore_list. also prints total sloc

import os
cur_path = os.getcwd()
ignore_set = set(["__init__.py", "count_sourcelines.py"])

loclist = []

for pydir, _, pyfiles in os.walk(cur_path):
    for pyfile in pyfiles:
        if pyfile.endswith(".py") and pyfile not in ignore_set:
            totalpath = os.path.join(pydir, pyfile)
            loclist.append( ( len(open(totalpath, "r").read().splitlines()),
                               totalpath.split(cur_path)[1]) )

for linenumbercount, filename in loclist: 
    print "%05d lines in %s" % (linenumbercount, filename)

print "\nTotal: %s lines (%s)" %(sum([x[0] for x in loclist]), cur_path)
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
