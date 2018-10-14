/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const dataList = document.querySelector('#dataList');
  const dataTitle = document.querySelector('#dataTitle');

  for(var key in data){
    var path = document.querySelector('g[data-plakakodu="'+key+'"]');
    path.classList.add('notEmpty');
  }

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' 
      && data[event.target.parentNode.getAttribute('data-plakakodu')] !== undefined) {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          ' - ',
          data[event.target.parentNode.getAttribute('data-plakakodu')].length,
          '</div>'
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      dataList.innerHTML = '';
      dataTitle.innerHTML = '';
      if (event.target.tagName === 'path'
      && data[event.target.parentNode.getAttribute('data-plakakodu')] !== undefined) {
        const parent = event.target.parentNode;
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
      }
    }
  );
}
