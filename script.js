const texts = [
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” – Albert Einstein ",
    "“Be the change that you wish to see in the world.” – Mahatma Gandhi",
    "“Life is never made unbearable by circumstances, but only by lack of meaning and purpose.” – Viktor Frankl",
    "“Happiness is not something ready-made. It comes from your own actions.” – Dalai Lama",
    "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”― Anne Frank"


];
let index=0;
function showtext(){
    document.getElementById("text").textContent = texts[index]
};

function next() {
    index= (index + 1) % texts.length;
    showtext()
};

function prev() {
    index = (index - 1 + texts.length) % texts.length;
    showtext
}




function light(){
    document.body.classList.toggle("light");
    document.querySelector("header").classList.toggle("light")
    document.querySelectorAll("section").forEach( sec => {
        sec.classList.toggle("light");
    })
   



}