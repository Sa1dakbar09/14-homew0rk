const contentEl = document.querySelector('.container')
let list = [];
let fNum = 0;

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => defFunc(json))
    .catch(eror => console.log(eror));
;

function defFunc(data) {
    data = data.map(e => e.url);
    // data.length = 6;
    for (var i of data) {
        let coolEL = document.createElement('button');
        coolEL.innerHTML = 'buy now';
        coolEL.className = 'cool'; //////////
        let btnEL = document.createElement('button');
        btnEL.innerHTML = '<i class="bi bi-heart-fill"></i>';
        btnEL.className = 'btn_top'//////////
        let spanEl = document.createElement('div');
        spanEl.className = 'spanEL';///////////
        let imgEl = document.createElement('img');
        imgEl.src = i;///////////
        let fuckEl = document.createElement('div')
        fuckEl.className = 'fuckEl';/////////////
        spanEl.appendChild(fuckEl);
        spanEl.appendChild(coolEL);
        spanEl.appendChild(btnEL);
        spanEl.appendChild(imgEl);
        contentEl.appendChild(spanEl);
    }
    document.querySelectorAll('.btn_top').forEach(element => {
        let sum = 0;
        element.addEventListener('click', (e) => {
            sum++;
            if (sum % 2 !== 0) {
                e.target.style.color = 'red';
                list.push(1)
            }
            else {
                e.target.style.color = '#fff';
                list.pop()
            }
            localStorage.setItem('followers', JSON.stringify(list));
        });
    });
    console.log(data.length + ' -- images!');
}
;
