
for (i = 1; i <= 100; i++) {

    let fbzz = '';
    let newStyle = '';
    if (i % 15== 0) {
        fbzz = 'fizzbuzz';
        newStyle = ' fzzbzz'
    } else if (i % 3 == 0) {
        fbzz = 'fizz';
        newStyle = ' fzz'
    } else if (i % 5 == 0) {
        fbzz = 'buzz';
        newStyle = ' bzz'
    } else {
        fbzz = i;
    };

    console.log(fbzz);

    document.getElementById('box').innerHTML +=`
    <div class="square ${newStyle}">
        ${fbzz}
    </div>`;

    

};