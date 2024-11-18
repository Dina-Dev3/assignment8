var quotes= [
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    Author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    Author: "― Mahatma Gandhi",
  },
  {
    quote:
      "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
    Author: "― J.K. Rowling, Harry Potter and the Chamber of Secrets",
  },
  {
    quote: "“That which does not kill us makes us stronger.”",
    Author: "― Friedrich Nietzsche",
  },
  {
    quote: "“If you judge people, you have no time to love them.”",
    Author: "― Mother Teresa",
  },
  {
    quote: "“We don't see things as they are, we see them as we are.”",
    Author: "― Anaïs Nin",
  },
  {
    quote:
      "“Life isn't about finding yourself. Life is about creating yourself.”",
    Author: "― George Bernard Shaw",
  },
];



var soul;

function test(){
  var num = Math.floor(Math.random()* quotes.length)

while (soul == num){
    var num = Math.floor(Math.random()* quotes.length)
}
soul=num;


document.getElementById('quote').innerHTML =quotes[num].quote
document.getElementById('author').innerHTML =quotes[num].Author
}

