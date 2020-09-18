---
layout: post
name:  Color
---

# Color photography
<br>
{% for image in site.static_files %}
   {% if image.path contains 'images/color' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" width="100%" style="padding-bottom: 25px"/>
    {% endif %}
{% endfor %}