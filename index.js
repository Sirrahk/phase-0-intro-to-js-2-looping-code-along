// Code your solutions in this file
//Gift Wrapping Function 

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
    return gifts;
}
wrapGifts(gifts); 

//Write a function that returns an array of thank you messages at each iteration

function writeCards(names, event) {
    let messageArray = [];
    for(let i = 0; i < names.length; i++){
        messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);  
    
    }
    return messageArray;
}
console.log(writeCards(["Alex", "Jane", "John"], "birthday"))

//Write a function that takes in a positive integre, starting from that number, count down to zero using console.log()

const countDown = (n) =>{ 
    let decreaseToZero = n;
    while (decreaseToZero >= 0) {
        console.log(decreaseToZero--)
    }
}

