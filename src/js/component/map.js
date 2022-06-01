// map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.769535, 37.639985],
    zoom: 15,
    controls: []
  })


  var myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../images/svg/location.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
})

  myMap.geoObjects.add(myPlacemark);

}