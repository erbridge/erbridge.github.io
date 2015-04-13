---
title: Blog
permalink: /blog/
---
{% for post in site.posts %}

{{ post.date | date: "%-d %B %Y" }}

# [{{ post.title }}]({{ post.url | prepend: site.baseurl }}){% if post.subtitle %} - {{ post.subtitle }}{% endif %}

> {{ post.excerpt }}

{% endfor %}
