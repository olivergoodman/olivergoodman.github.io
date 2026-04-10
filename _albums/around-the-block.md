---
layout: post
name:  Around the block
---

# Around the block
<br>
{% for image in site.static_files %}
   {% if image.path contains 'images/around-the-block' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" width="100%" style="padding-bottom: 25px"/>
    {% endif %}
{% endfor %}