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
    
    setTimeout('galleryOn()', 3000)
}

function changeManual(img){
    if (img.id == 'img1'){
        $('.slide1').attr('src', "img/sample1.jpg")
        $('.slide2').attr('src', "img/sample1.jpg")
    }
    else if (img.id == 'img2'){
        $('.slide1').attr('src', "img/sample2.jpg")
        $('.slide2').attr('src', "img/sample2.jpg")
    }
    else if (img.id == 'img3'){
        $('.slide1').attr('src', "img/sample3.jpg")
        $('.slide2').attr('src', "img/sample3.jpg")
    }
    else{
        $('.slide1').attr('src', "img/sample4.jpg")
        $('.slide2').attr('src', "img/sample4.jpg")
    }
}
