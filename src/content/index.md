---
title: "Home"
exclude: true
---

{{/markdown}}

<ul>
{{#withSort pages "data.created" dir="desc"}}
	{{#unless data.exclude}}
		<li>
			<a href="posts/{{basename}}.html">{{data.title}}</a>
			({{data.created}})
		</li>
	{{/unless}}
{{/withSort}}
</ul>

{{#markdown}}
