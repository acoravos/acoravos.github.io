---
layout: page
title: Photography
description: I love how photographers see the world. Been taking photos since I was little, and I promise to share more in the next few months.
importance: 1
category: present
img: assets/img/photography.jpg
---

{% comment %}
  Photos come from _data/photos.yml — one block per image with title, location,
  year and description. Drop the image files in drop-images/ and Claude will
  resize them, move them to assets/img/photos/, and add the entries.
{% endcomment %}

{% if site.data.photos and site.data.photos.size > 0 %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for photo in site.data.photos %}
      <div class="col mb-4">
        {% include figure.liquid loading="lazy" path=photo.img class="img-fluid rounded z-depth-1" zoomable=true alt=photo.title %}
        <p class="mt-2 mb-0"><strong>{{ photo.title }}</strong></p>
        <p class="text-muted mb-1" style="font-size: 0.85rem">{{ photo.location }}{% if photo.year %}, {{ photo.year }}{% endif %}</p>
        {% if photo.description %}<p>{{ photo.description }}</p>{% endif %}
      </div>
    {% endfor %}
  </div>
{% endif %}
