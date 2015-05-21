---
title: Fiction
categories:
  - toplevel
permalink: /fiction/
---
{% for post in site.posts %}
{% if post.categories contains "fiction" %}

# [{{ post.title }}]({{ post.url | prepend: site.baseurl }}){% if post.subtitle %} - {{ post.subtitle }}{% endif %}

> {{ post.excerpt }}

{% endif %}
{% endfor %}
