var dataView = function(parent){
    const id = parent.getAttribute('id');

    var plakaKodu = parent.getAttribute('data-plakakodu');
    var ilAdi = parent.getAttribute('data-iladi');

    dataTitle.innerHTML = ilAdi;

    data[plakaKodu].forEach(element => {
      dataList.innerHTML += [
        '<li>',
        '<a href="', element.url, '">',
        element.title,
        '</a>',
        '</li>'
      ].join('');
    });
};