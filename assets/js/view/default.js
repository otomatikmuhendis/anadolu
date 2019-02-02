var dataView = function(parent){
    const id = parent.getAttribute('id');

    var plateNumber = parent.getAttribute('data-plakakodu');
    var cityName = parent.getAttribute('data-iladi');

    dataTitle.innerHTML = cityName;

    data[plateNumber].forEach(element => {
      dataList.innerHTML += [
        '<li>',
        '<a href="', element.url, '">',
        element.title,
        '</a>',
        '</li>'
      ].join('');
    });
};