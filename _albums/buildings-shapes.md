---
layout: post
name:  Buildings, shapes
---

# Buildings, shapes
<br>
{% for image in site.static_files %}
   {% if image.path contains 'images/buildings-shapes' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" width="100%" style="padding-bottom: 25px"/>
    {% endif %}
{% endfor %} 