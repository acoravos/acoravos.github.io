---
layout: page
permalink: /writing/
title: writing
description: I occasionally write at <a href='https://blog.andreacoravos.com'>blog.andreacoravos.com</a>. Peer-reviewed manuscripts are <a href='/publications/'>over here</a>.
nav: true
nav_order: 3
---

{% comment %}
  Built from _data/writing.yml in the same row layout as the research page:
  an outlet badge in the left column (with a thumbnail under it when the entry
  has an `img`), title and year on the right. File order is display order.
{% endcomment %}

<div class="publications">
  <ol class="bibliography">
    {% for item in site.data.writing %}
      <li>
        <div class="row">
          <div class="col col-sm-2 abbr">
            <abbr class="badge rounded w-100">{{ item.outlet }}</abbr>
            {% if item.img %}
              {% include figure.liquid loading="eager" path=item.img sizes="200px" class="preview z-depth-1 rounded" zoomable=true avoid_scaling=true alt=item.outlet %}
            {% endif %}
          </div>
          <div class="col-sm-8">
            <div class="title">
              <a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a>
            </div>
            <div class="periodical"><em>{{ item.outlet }}</em>, {{ item.year }}</div>
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
</div>
