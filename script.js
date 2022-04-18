const btn = document.getElementById('btn');

const output = document.getElementById('output');

const quotes = [
    '"There is nothing constant except change."',
    '"A Jack of all trades is a master of none but oftentimes better than a master of one"',
    '"Youth is wasted on the young."',
    '"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life."',
    '"Let everything happen to you, Beauty and Terror, just keep going, no feeling is final"',
];
btn.addEventListener('onclick', function(){
        const randomQuote = Number.parseInt(Math.random() * quotes.length + 1)
        output.textContent =`${quotes[randomQuote]}`;
});
