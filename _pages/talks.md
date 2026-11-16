---
layout: page
permalink: /talks/
title: talks & press
description: Podcasts, classes, and mentions.
nav: true
nav_order: 6
---

{% comment %}
  Cards are built from _data/talks.yml and _data/mentions.yml so each entry can
  carry its own thumbnail. Entries without an `img` render as text-only cards;
  add one by dropping a file in drop-images/.
  Markup mirrors the theme's project cards (card h-100 hoverable + card-img-top).
{% endcomment %}

{% assign card_groups = "" | split: "" %}

### Podcasts and classes

<div class="projects">
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
    {% for item in site.data.talks %}
      <div class="col mb-4">
        <a href="{{ item.url }}" target="_blank" rel="noopener">
          <div class="card h-100 hoverable">
            {% if item.img %}
              {% if item.logo %}{% include figure.liquid loading="eager" path=item.img sizes="250px" alt=item.outlet class="card-img-top logo-tile" %}{% else %}{% include figure.liquid loading="eager" path=item.img sizes="250px" alt=item.outlet class="card-img-top" %}{% endif %}
            {% endif %}
            <div class="card-body">
              <p class="card-text text-uppercase mb-1" style="font-size: 0.75rem; letter-spacing: 0.04em; color: var(--global-text-color-light)">
                {{ item.outlet }} &middot; {{ item.year }}
              </p>
              <h2 class="card-title" style="font-size: 1.1rem">{{ item.title }}</h2>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

### Mentions

<div class="projects">
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
    {% for item in site.data.mentions %}
      <div class="col mb-4">
        <a href="{{ item.url }}" target="_blank" rel="noopener">
          <div class="card h-100 hoverable">
            {% if item.img %}
              {% if item.logo %}{% include figure.liquid loading="eager" path=item.img sizes="250px" alt=item.outlet class="card-img-top logo-tile" %}{% else %}{% include figure.liquid loading="eager" path=item.img sizes="250px" alt=item.outlet class="card-img-top" %}{% endif %}
            {% endif %}
            <div class="card-body">
              <p class="card-text text-uppercase mb-1" style="font-size: 0.75rem; letter-spacing: 0.04em; color: var(--global-text-color-light)">
                {{ item.outlet }} &middot; {{ item.year }}
              </p>
              <h2 class="card-title" style="font-size: 1.1rem">{{ item.title }}</h2>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
