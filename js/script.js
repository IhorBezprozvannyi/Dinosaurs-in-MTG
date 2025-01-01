function galleryOn(){
    $('.slide2').animate({
        opacity: 0,
      }, 2000, changeImage);
    console.log('fadeout')
}

var images = ['sample1.jpg', 'sample2.jpg', 'sample3.jpg', 'sample4.jpg']
var current = -1 
var next = 0

function changeImage(){
    current = (current + 1) % images.length;
    console.log(current)
    $('.slide2').attr('src', "img/" + images[current])
    console.log('change1')
    $('.slide2').css('opacity', 1);
    next = (current + 1) % images.length
    console.log(next)
    $('.slide1').attr('src', "img/" + images[next])
    console.log('change2')

    $("#img" + current).prop("checked", true);

    setTimeout('galleryOn()', 3000)
}

function changeManual(img){
    let ID = img.id.replace("img", "")
    current = ID % images.length
    next = (current + 1) % images.length
    $('.slide1').attr('src', "img/" + images[next])
    console.log(images[current])
    console.log(images[next])
    $('.slide2').attr('src', "img/" + images[current])
}
