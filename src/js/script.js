let imagens =[
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
];

let index = 0;
let tempo = 3000;

function slideShow(){
    document.getElementById('image').src = imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', tempo)
}

slideShow();