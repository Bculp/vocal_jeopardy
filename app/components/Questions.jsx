

//What i was previously rendering
<h1>Hello</h1>
	{% for item in sports %}
		<div id = {{item.category + item.pointValue}}>
			<h3>{{ item.title }}</h3>
			<h3 class='answer'>{{ item.answer.title }}</h4>
		</div>
	{% endfor %}

	{% for item in entertainment %}
		<div id = {{item.category + item.pointValue}}>
			<h3>{{ item.title }}</h3>
			<h4 class='answer'>{{ item.answer.title }}</h4>
		</div>
	{% endfor %}

	<p class = "test">testing class</p>
	<p id="testing">this should be red!</p>