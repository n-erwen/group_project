//FEATURED SECTION source: https://tobiasahlin.com/moving-letters/#3
var textWrapper = document.querySelector('.fadein');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.fadein .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.fadein',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//OPENSTREETMAP
  var planes = [
		["7C6B07",51.5669,0.1471],
		["7C6B38",51.5073,0.1657],
		["7C6CA1",51.5746,0.1308],
		];

        var map = L.map('map').setView([51.5074, 0.1277], 10);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

		for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
		}
