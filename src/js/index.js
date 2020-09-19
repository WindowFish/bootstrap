window.onload = function(){
            var carousel_images1=this.document.getElementById("carousel_images-1");
            var carousel_images2=this.document.getElementById("carousel_images-2");
            var carousel_images3=this.document.getElementById("carousel_images-3");
            var carousel_image4=this.document.getElementById("carousel_images-4");
            window.onresize = function(){
                      var clientWidth= this.document.body.clientWidth ;
                      this.console.log(clientWidth);
                      if(clientWidth>640){
                        carousel_images1.src ="./images/slide_01_2000x410.jpg"
                        carousel_images2.src ="./images/slide_02_2000x410.jpg"
                        carousel_images3.src ="./images/slide_03_2000x410.jpg"
                        carousel_image4.src ="./images/slide_04_2000x410.jpg"
                      }else{
                        carousel_images1.src ="./images/slide_01_640x340.jpg"
                        carousel_images2.src ="./images/slide_02_640x340.jpg"
                        carousel_images3.src ="./images/slide_03_640x340.jpg"
                        carousel_image4.src ="./images/slide_04_640x340.jpg"
                      }
            }
  

}



