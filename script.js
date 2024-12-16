function galleryOn(){
    $('.slide2').fadeIn(1000, changeImage())
    console.log('fadeout')
}

var images = ['sample1.jpg', 'sample2.jpg', 'sample3.jpg', 'sample4.jpg']
var current = 0 
var next = 1

function changeImage(){
    current = (current + 1) % images.length;
    $('.slide2').attr('src', "img/" + images[current])
    console.log('change1')

    next = (current + 1) % images.length
    $('.slide1').attr('src', "img/" + images[next])
    console.log('change2')

    $('.slide2').fadeOut()
    console.log('fadein')
    
    setTimeout('galleryOn()', 3000)
}