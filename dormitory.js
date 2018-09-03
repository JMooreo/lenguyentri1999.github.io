
//FOR LOOPING THROUGH PHONE IMAGES AND STUFF
var phone_slides = ["second-img","first-img","third-img"];
var strings = ["Freshmen can create their own mini events and post it to their floor",
"Creating an experience is less than 5 seconds.",
"always have all the details and information you need to join the experience."]
    function goForward(img){
        if(img == phone_slides[1]){ //if it's the bigger image, do nothing
            return
        }
        else{
            if(img == phone_slides[2]){ //if clicked on the right side image
                document.getElementById(phone_slides[1]).className = "left-img";
                document.getElementById(phone_slides[2]).className = "middle-img";
                document.getElementById(phone_slides[0]).className = "right-img";
                middle = phone_slides[1];
                right = phone_slides[2];
                left = phone_slides[0];
                phone_slides[1] = right;
                phone_slides[0] = middle;
                phone_slides[2] = left;
            }
            else{ //if left side image 
                document.getElementById(phone_slides[1]).className = "right-img";
                document.getElementById(phone_slides[2]).className = "left-img";
                document.getElementById(phone_slides[0]).className = "middle-img";  
                middle = phone_slides[1];
                right = phone_slides[2];
                left = phone_slides[0];
                phone_slides[1] = left;
                phone_slides[0] = right;
                phone_slides[2] = middle;
            }
        if(img == "second-img"){
             document.getElementById('phone-text').innerHTML = strings[1];

        }
        else if(img == "first-img"){
            document.getElementById('phone-text').innerHTML = strings[0];
        }
        else if(img == "third-img"){
            document.getElementById('phone-text').innerHTML = strings[2];
        }
        }
    }
var phone_slides2 = ["second-img1","first-img1","third-img1"];
var strings1 = ["Post events, news and they will be sent to the freshmen on the floor as push notifications.",
"Get out of email clutter by allowing freshmen to send personal, casual or private feedback to you in the app.",
"Marketplace, where freshmen can buy and sell products to each other, perfect for move-in, move-out day.",
]
    function goForward1(img){
        console.log(img)
          if(img == phone_slides2[1]){ //if it's the bigger image, do nothing
            return
        }
        else{
            if(img == phone_slides2[2]){ //if clicked on the right side image
                document.getElementById(phone_slides2[1]).className = "left-img";
                document.getElementById(phone_slides2[2]).className = "middle-img";
                document.getElementById(phone_slides2[0]).className = "right-img";
                middle = phone_slides2[1];
                right = phone_slides2[2];
                left = phone_slides2[0];
                phone_slides2[1] = right;
                phone_slides2[0] = middle;
                phone_slides2[2] = left;
            }
            else{ //if left side image 
                document.getElementById(phone_slides2[1]).className = "right-img";
                document.getElementById(phone_slides2[2]).className = "left-img";
                document.getElementById(phone_slides2[0]).className = "middle-img";  
                middle = phone_slides2[1];
                right = phone_slides2[2];
                left = phone_slides2[0];
                phone_slides2[1] = left;
                phone_slides2[0] = right;
                phone_slides2[2] = middle;
            }
        if(img == "second-img1"){
             document.getElementById('phone-text1').innerHTML = strings1[2];

        }
        else if(img == "first-img1"){
            document.getElementById('phone-text1').innerHTML = strings1[0];
        }
        else if(img == "third-img1"){
            document.getElementById('phone-text1').innerHTML = strings1[1];
        }
        }
    }

// var words_switch = ["resources","events","place"];
// var loop_count = 0;
// setInterval(switchText,3000);
// function switchText(){
//     if(loop_count == 3){loop_count = 0}
//     document.getElementById("text-switch").innerHTML = words_switch[loop_count];
//     loop_count += 1;
// }


function changeWords(current, next, target) {
    var count = Math.max(current.length, next.length);
    update(0, count, current, next, target);
}

function update(index, count, current, next, target) {
    setTimeout(function loop() {
        var resStr = next.slice(0, index) + current.slice(index, count);
        document.getElementById(target).innerHTML = resStr;
        index++;
        if (index < count + 1) {
            update(index, count, current, next, target);
        }
    }, 50);
}

function switchWords(index, words, target) {
    setTimeout(function loop() {
        if (index + 1 < words.length) {
            changeWords(words[index], words[index + 1], target);
            index++;
        } else if (index < words.length) {
            changeWords(words[index], words[0], target);
            index = 0;
        }
        switchWords(index, words, target);
    }, 3000);
}
words = ["leases","amenities","events"];
index = 0;
target = "text-switch";
switchWords(index,words,target);
