const memeGenarateBtn= document.querySelector('.meme_btn');
const memeTitle = document.querySelector('.meme_title');
const memeImg=document.querySelector('.meme_img');
const memeAuthor=document.querySelector('.meme_author');

const details= (url,title,author)=>{
    memeImg.setAttribute('src',url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML="meme by : "+author;
}



const  genarateMeme= ()=>{
    fetch('https://meme-api.com/gimme')
    .then((response)=>response.json())
    .then(data=>{
        details(data.url,data.title,data.author)
    });
}

memeGenarateBtn.addEventListener('click',genarateMeme)

genarateMeme();