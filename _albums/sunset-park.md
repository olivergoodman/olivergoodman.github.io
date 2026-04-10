---
layout: post
name:  Sunset Park tree study
---

# Sunset Park tree study
<br>
{% for image in site.static_files %}
   {% if image.path contains 'images/sunset-park' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" width="100%" style="padding-bottom: 25px"/>
    {% endif %}
{% endfor %}