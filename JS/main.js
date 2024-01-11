
for (i = 1; i <= 100; i++) {

    let fbzz = '';
    if (i % 15== 0) {
        fbzz = 'fizzbuzz';
        
    } else if (i % 3 == 0) {
        fbzz = 'fizz';

    } else if (i % 5 == 0) {
        fbzz = 'buzz';

    } else {
        fbzz = i;
    };

    console.log(fbzz);

    document.getElementById('box').innerHTML +=`
    <div class="square">
        ${fbzz}
    </div>`;

    

};