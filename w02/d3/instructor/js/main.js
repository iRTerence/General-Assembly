// from part 1

// $('li:nth-child(2)')
// $('div .big-and-round')
// $('li:even')
// let li = document.querySelectorAll('li')
// let $li = $('li')
// lastLi = $li[$li.length - 1]
// $li.fadeOut()
// let $lastLi = $(lastLi)
// let lastListItem = document.querySelector('li:nth-child(5)')
// let $lastListItem = jQuery('li:last')

// $li.each(function(idx) {
//   console.log(idx)
//   console.log(this)
// })

// $('li:first').css({ color: 'red', border: '1px solid green' })
// $('li:last').html().toUpperCase()

// from part 2
console.log($('#addHome'));

$('#addHome').removeClass('btn-danger').addClass('btn-success');

$('h1.jumbotron').addClass('text-center');

// $('h1.jumbotron').toggleClass('text-center');

console.log('H1 jumbotron class: ', $('h1').hasClass('jumbotron'));
console.log('addHome Button btn btn-danger class: ', $('#addHome').hasClass('btn btn-danger'));
console.log('addHome Button btn btn-success class: ', $('#addHome').hasClass('btn btn-success'));

const $newLink = $(`<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>`);

console.log($newLink);

$('body').append($newLink);

$newLink.last().attr('target', '_blank');
// $newLink.eq(2).attr('target', '_blank');

console.log($newLink.last().attr('href'));

$('#homes tbody').on('click', 'button.btn-danger', function (evt) {
  $(this)
    .closest('tr')
    .fadeOut(3000, function () {
      console.log(this);
      $(this).remove();
    });
});

const newHomes = [
  { address: '27569 Cedarwood Drive', sf: '2,535', bedrooms: 3, baths: 2.5, price: '$496,500' },
  { address: '316 Annandale Drive', sf: '1,326', bedrooms: 4, baths: 2, price: '$275,000' },
  { address: '251 Grandview Road', sf: '3,800', bedrooms: 3, baths: 2, price: '$699,900' },
  { address: '28571 Manitoba', sf: '2,960', bedrooms: 4, baths: 3.5, price: '$775,000' },
];

// get reference to table body
// let $tbody = $('#homes tbody');

$('#addHome').on('click', function () {
  if (newHomes.length) {
    // get home object from newHomes
    let home = newHomes.shift();
    // create new table row element
    let $tr = $(`
      <tr>
        <td>${home.address}</td>
        <td>${home.sf}</td>
        <td>${home.bedrooms}</td>
        <td>${home.baths}</td>
        <td>${home.price}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>
    `);
    $('#homes tbody').append($tr);
  } else {
    console.log('no more homes');
  }
});
