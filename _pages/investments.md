---
layout: page
permalink: /investments/
title: investments
nav: true
nav_order: 5
---

{% comment %}
  Entries come from _data/investments.yml, split into advising / backed / funds.
  Advising rows carry a start year; the others are plain names.
{% endcomment %}

{% if site.data.investments.advising and site.data.investments.advising.size > 0 %}

### Advising

<p class="list-note">Year shown is when I started</p>

<ul class="entry-list">
  {% for item in site.data.investments.advising %}
    <li>
      <span class="entry-name">{% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}</span>
      <span class="entry-year">{{ item.year }}</span>
      {% if item.note %}<span class="entry-note">{{ item.note }}</span>{% endif %}
    </li>
  {% endfor %}
</ul>
{% endif %}

{% if site.data.investments.backed and site.data.investments.backed.size > 0 %}

### Companies

<p class="list-note">A partial list as not every investment I've made is public. See more details on <a href="https://www.crunchbase.com/person/andrea-coravos" target="_blank" rel="noopener">Crunchbase</a></p>

<ul class="entry-list columns">
  {% for item in site.data.investments.backed %}
    <li>
      {% comment %}
        When an entry has a note, its `url` is the announcement backing that
        note — so the note carries the link and the name stays plain. Otherwise
        `url` is the company's own site and the name links to it.
      {% endcomment %}
      <span class="entry-name">{% if item.url and item.note == nil %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}</span>
      {% if item.year %}<span class="entry-year">{{ item.year }}</span>{% endif %}
      {% if item.note %}
        <span class="entry-note">{% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.note }}</a>{% else %}{{ item.note }}{% endif %}</span>
      {% endif %}
    </li>
  {% endfor %}
</ul>
{% endif %}

{% if site.data.investments.funds and site.data.investments.funds.size > 0 %}

### Funds

<ul class="entry-list">
  {% for item in site.data.investments.funds %}
    <li>
      <span class="entry-name">{% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}</span>
    </li>
  {% endfor %}
</ul>
{% endif %}

{% if site.data.investments.arts and site.data.investments.arts.size > 0 %}

### Arts

<p class="list-note">Mostly grants; I've written about why I like backing these storytellers in <a href="https://blog.andreacoravos.com/angel-investing-in-the-arts-film-and-movies-9934da81ce0f" target="_blank" rel="noopener">film</a> and on <a href="https://blog.andreacoravos.com/angel-investing-in-the-arts-part-ii-broadway-edition-0514c36e6407" target="_blank" rel="noopener">Broadway</a></p>

<ul class="entry-list">
  {% for item in site.data.investments.arts %}
    <li>
      <span class="entry-name">{% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}</span>
      {% if item.year %}<span class="entry-year">{{ item.year }}</span>{% endif %}
      {% if item.note %}<span class="entry-note">{{ item.note }}</span>{% endif %}
    </li>
  {% endfor %}
</ul>
{% endif %}
