console.log("Welcome to dragon game ")
var boolean = true;
var a;
var a1;
var score = 0;
var increaseCount = true;
var highScore = 0;
var oldhighScore = 0;
var music = new Audio(`music.mp3`);
var music1 = new Audio(`gameover2.mp3`);
music1.pause();
music.play();









document.onkeydown = function (e) {
    music.play();
    console.log("Key Code is :", e.keyCode);
    if (e.keyCode == 38) {
        console.log("dino jumping")
        dino = document.querySelector(".dino");
        // console.log(`type of dino element is :${typeof dino}`)
        dino.classList.add("dinojump")

        //getting the value of x and y for dino
        a = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        a1 = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
        //console.log(`the position for x and y for dino is ${a},${a1}`);

        setTimeout(() => {
            console.log("dino back to place ")
            dino.classList.remove("dinojump")
            dino.className = " dino";;

            //getting the value of x and y for dino after removing dino jump 
            a = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            a1 = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
            // console.log(`the position for x and y for dino after jump  is ${a},${a1}`);
        }, 700);
    }

    if (e.keyCode == 39) {
        console.log("dino right move ");
        dX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        document.querySelector(".dino").style.left = dX + 110 + "px";
        increaseCount = true;
        //console.log(`${increaseCount}`)
        score = score + 1;
        // console.log(`${score}`)
    }
    if (e.keyCode == 37) {
        console.log("dino left move ");
        dX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        document.querySelector(".dino").style.left = dX - 110 + "px";
    }
}
/*//js to check the position of x and y for obstacle and dino  . functin w
will run after every time */
setInterval(() => {
    // console.log("checking the position of x and y for dino and obstacle in ecery some mill s");
    dino = document.querySelector(".dino");
    obstacle = document.querySelector(".obstacle");
    gameOver = document.querySelector(".gameOver");
    reset = document.querySelector(".reset");
    level = document.querySelector(".level")

    //getting the value of x and y for dino
    dX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dY = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    // console.log(`the position for x and y for dino is ${dX},${dY}`);

    //getting the value of x and y for obstacle in intergers
    oX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    //console.log(`the position for x and y for obstacle is ${oX},${oY}`);

    /*finding the diffrence between x and y coordinates of x and
     y of dyno ando obstacles */
    diffX = Math.abs(dX - oX);
    diffY = Math.abs(dY - oY);
    //console.log(`the values for diff x anf diffy is : ${diffX}:${diffY}`)

    if (diffX < 93 && diffY < 52) {
        /*when dyno and obstacle collide ,
        1.gameover container made visible 
        2.moving aimation for obstacle removd 
        3.psition of obstacle aftr collisio will be same as dyno */
        gameOver.style.visibility = "visible";
        music1.play()
        music.pause()
        reset.style.display = "block";
        reset.addEventListener("click", () => {
            console.log("reset pressed");
            window.location.reload(true);
        })
        obstacle.classList.remove("obstaclemove");
        obstacle.style.left = dX + "px";
    } else {
        let scoreCount = document.querySelector(".scoreCount")
        scoreCount.innerText = `Your score is : ${score}`;

        /*increasing the speed of animnation as the score increases*/
        aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        console.log(`the animation duration is ${aX}`)
        if (score >= 0 && score <= 10) {
            setTimeout(() => {
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 500);
        } else if (score >= 11 && score <= 20) {
            setTimeout(() => {
                level.style.display = "block"
                obstacle.style.animationDuration = "3.9s"
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 1000);
        } else if (score >= 21 && score <= 30) {
            setTimeout(() => {
                level.innerHTML = "Congratulations : you move to level: 2"
                level.style.color = "yellow";
                obstacle.style.animationDuration = "3.8s"
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 1000);
        } else if (score >= 31 && score <= 40) {
            setTimeout(() => {
                level.innerHTML = "Congratulations : you move to level: 3"
                level.style.color = "blue";
                obstacle.style.animationDuration = "3.7s"
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 1000);
        } else if (score >= 41 && score <= 50) {
            setTimeout(() => {
                level.innerHTML = "Congratulations : you move to level: 4"
                level.style.color = "black";
                obstacle.style.animationDuration = "3.6s"
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 1000);
        } else if (score >= 51 && score <= 60) {
            setTimeout(() => {
                level.innerHTML = "Congratulations : you move to level: 5"
                level.style.color = "blue";
                obstacle.style.animationDuration = "3.5s"
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 1000);
        } else {
            setTimeout(() => {
                level.innerHTML = "Congratulations : you are at the top most level "
                level.style.color = "yellow";
                obstacle.style.animationDuration = "3.4s"
                aX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                console.log(`the animation duration is ${aX}`)
            }, 1000);
        }












    }

}, 100);



/*setInterval(() => {
    if score

}, 5000)





*/