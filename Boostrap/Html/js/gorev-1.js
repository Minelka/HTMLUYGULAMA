//görev 1
//const kutu = document.getElementById('kutu');

//kutu.addEventListener('mouseenter', () => {
    //kutu.style.backgroundColor = '#e74c3c'; // Mouse ile üzerine gelince kırmızı
//});

//kutu.onmouseover=()=>kutu.style.backgroundColor="green";


//kutu.addEventListener('mouseleave', () => {
    //kutu.style.backgroundColor = '#3498db'; // Mouse ayrılınca mavi
//});


function bodyColor() {
    var renk1 = Math.floor(255*Math.random());
    var renk2 = Math.floor(255*Math.random());
    var renk3 = Math.floor(255*Math.random());
    document.body.style.backgroundColor="rgb("+renk1+","+renk2+","+renk3+")";
    }
