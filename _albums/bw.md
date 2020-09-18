---
layout: post
name:  Black and White
---

# Black and white photography
<br>
{% for image in site.static_files %}
   {% if image.path contains 'images/bw' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" width="100%" style="padding-bottom: 25px"/>
    {% endif %}
{% endfor %}