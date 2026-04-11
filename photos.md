---
title: photography
<!-- layout: home -->
layout: page
permalink: /photography
---

{% for album in site.albums %}
  <h2><a href="{{ album.url }}">{{ album.name }}</a></h2>
{% endfor %}

<br>

<div class="center">Photos taken with Olympus OM-2n, Olympus XA, Canon FTb, or disposable.  </div>

<br>
  
<img class="bottom-img" src="/assets//images/photo.jpg" alt="02"/>
