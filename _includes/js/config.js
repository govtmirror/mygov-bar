window.MyGovBar={
  Models: {},
  Collections: {},
  Views: {},
  Router: {},
  config:{
    url: '{{ site.url }}',
    api_url: '{{ site.api_url }}',
    version: {{ site.version }},
    tabs: [{% for tab in site.tabs %}'{{tab}}'{%if forloop.rindex0 > 0 %},{%endif%}{%endfor%}],
    search_affiliate: '{{ site.search_affiliate }}',
    max_related: {{ site.max_related }}
  }
};
