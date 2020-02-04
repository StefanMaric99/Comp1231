//Stefan Maric - 101208175

let randomBoolean = Math.random() >= 0.5
// LEAVE ALONE

if (randomBoolean) {
    // an example of how we can get the hour in JS
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();


    console.log(hour+':'+min+':'+sec);
} else {
    // DO NOT TOUCH
    let randomNumber = Math.floor(Math.random() * 100)
    // LEAVE LONE

    if (randomNumber>=25 && randomNumber<=50) {
        console.log("Your number is in between 25 and 50")
    } else if (randomNumber>50 && randomNumber<=75) {
        console.log("Your number is between 51 and 75");
    } else if (randomNumber>75 && randomNumber<=100) {
        console.log("Your number is between 76 and 100")
    }
}
