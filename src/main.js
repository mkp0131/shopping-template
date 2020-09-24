// html display set items
const displayItems = (clothes, predi) => {
    const contents_box = document.querySelector('.js-contents');
    contents_box.innerHTML = 'Loading...';

    contents_box.innerHTML = '';

    const filter_clothes = clothes.filter((cloth) => {
        if (predi(cloth)) {
            return cloth;
        }
    });
    contents_box.innerHTML = filter_clothes.map(cloth => {
        return `
					<div class=\"cloth-info\">
						<div class=\"cloth-info__img\"><img src=\"./img/${cloth.img_file}\"  /></div>
						<div class=\"cloth-info__txt\">${cloth.gender}, ${cloth.size}</div>
					</div>
				`;
    }).join('');
}

// set EventListener
const setAddEvent = (clothes) => {
    const btns = document.querySelector('.js-menu');
    btns.addEventListener('click', (event) => {
        const dataset = event.target.dataset;
        const key = dataset.key;
        const value = dataset.value;
        if (key && value) {
            displayItems(clothes, v => v[key] === value)
        }
    })
}

// fetch load JSON
const loadClothList = () => {
    return fetch('../data/clothes.json')
        .then(res => res.json())
        .then(clothes => clothes)
        .catch(err => console.log('🤬fetch: err1', err));
}


loadClothList()
    .then(clothes => {
        console.log('@Json', );
        displayItems(clothes, v => v);
        setAddEvent(clothes)
    })