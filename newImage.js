function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.id = "rim"
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}