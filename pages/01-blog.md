---
title: Blog
categories:
  - toplevel
permalink: /blog/
---
{% for post in site.posts %}
{% if post.categories contains "blog" %}

{{ post.date | date: "%-d %B %Y" }}

# [{{ post.title }}]({{ post.url | prepend: site.baseurl }}){% if post.subtitle %} - {{ post.subtitle }}{% endif %}

> {{ post.excerpt }}

{% endif %}
{% endfor %}
