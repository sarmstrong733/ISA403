window.onload = function () {
        var links1 = document.getElementById("image_list1").getElementsByTagName("a");
        var links2 = document.getElementById("image_list2").getElementsByTagName("a");
        var links3 = document.getElementById("image_list3").getElementsByTagName("a");

        var counter = 0;
        // consists of 2 parts: the first define function , the second define function execution timing
        var timer = setInterval(function () {
        counter = (counter + 1) % links1.length;
            //swap image for slideshow
            document.getElementById("image1").src = links1[counter].href;
        }, 2700);
       var timer2 = setInterval(function(){
        counter = (counter + 1) % links2.length;
            //swap image for slideshow
            document.getElementById("image2").src = links2[counter].href;
        }, 2300);
         var timer3 = setInterval(function(){
         counter = (counter + 1) % links3.length;
             //swap image for slideshow
             document.getElementById("image3").src = links3[counter].href;
         }, 2500);
};