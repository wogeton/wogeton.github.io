function newImage1(){
    var image = DocumentGetElementById("myImage")

    if (image.src.match("2")) {
        image.src = "java_script/image1.jfif";
    } else {
        image.src = "java_script/image2.jfif"
    }
}

alert("hola ")