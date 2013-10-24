var map,
	balloonHTML;

L.onLoad(function () {
	map = new L.Map('map', {
    	"center": new L.LatLng(0, 0),
    	"zoom": 3,
    	"dgGeoclicker": false
	});

	L.tileLayer('http://api.2gis.ru/assets/frontend/api/api_vacancy/tiles/{z}/{x}/{y}.jpg', {
		maxZoom: 5,
		minZoom: 3
	}).addTo(map);

	balloonHTML1 = '<h2>Процессы</h2><div><ul><li>Живем Scrum’ом (планирования, презентации, ретро, дейли-митинги)</li><li>Пишем unit-тесты, делаем CodeReview и используем Continuous Intergation</li><li>Занимаемся Continuous Delivery’нгом</li><li>Дышим автоматизацией (Mocha, Selenium WebDriver)</il></ul>';
	balloonHTML2 = '<h2>Технологии</h2><ul><li>nodejs, javascript, html5, css3</li><li>sinonjs, yui3 test</li><li>grunt, phing, chef, mapnik</li><li>python, php</li></ul>';
	balloonHTML3 = '<h2>Команда</h2>';
	balloonHTML4 = '<h2>Задачи</h2><ul><li>Колбасим API карты 2ГИС</li><li>Любим Canvas, SVG, WebGL, поглядываем на GLSL, WebGL фреймворки, мыслим draw call’ами</li><li>Работаем с Leaflet</li><li>Интегрируемся с внутренними сервисами компании</li><li>Разрабатываем Widget’ы на основе карт</li><li>Ворочаем кучей данных на клиенте</li><li>Готовим карты от А до Я. Тайлы, стили, сервера, статистика</li><li>Ускоряем отрисовки в браузерах и скорость загрузки API карт 2ГИС</li></ul>';
	balloonHTML5 = '<h2>Плюшки</h2><ul><li>Двухэтажный офис на последних этажах высотного здания с замечательным видом на центр Киева</li><li>Кормим вкусными завтраками, катаем на самокате(круглый год), усаживаем в мягкие груши</li><li>Ездим на it-конференции</li><li>Делаем YiiConf, LambaDay, StartupDay, подслушиваем DevDay</li></ul>';

	L.marker([0,0]).addTo(map).bindPopup({ minWidth :500 }).setPopupContent(balloonHTML1).openPopup();
	L.marker([-18.14585, -13.35937]).addTo(map).bindPopup({ minWidth :500 }).setPopupContent(balloonHTML2);
	L.marker([20.30342, -16.17187]).addTo(map).bindPopup({ minWidth :500 }).setPopupContent(balloonHTML3);
	L.marker([6.83917, 22.85156]).addTo(map).bindPopup({ minWidth :500 }).setPopupContent(balloonHTML4);
	L.marker([-14.94478, 20.74219]).addTo(map).bindPopup({ minWidth :500 }).setPopupContent(balloonHTML5);   
});