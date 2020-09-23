// type: pants / t-shirts / skirt
// gender: female or man / unisex
// size: large size or small size
// color: blue / yellow / pink
const clothes = [{
        type: 'pants',
        gender: 'man',
        size: 'large size',
        color: 'blue',
        img_file: 'blue_p.png'
    }, {
        type: 'pants',
        gender: 'man',
        size: 'small size',
        color: 'blue',
        img_file: 'blue_p.png'
    }, {
        type: 'pants',
        gender: 'man',
        size: 'large size',
        color: 'yellow',
        img_file: 'yellow_p.png'
    }, {
        type: 'pants',
        gender: 'man',
        size: 'small size',
        color: 'yellow',
        img_file: 'yellow_p.png'
    }, {
        type: 'pants',
        gender: 'man',
        size: 'large size',
        color: 'pink',
        img_file: 'pink_p.png'
    }, {
        type: 'pants',
        gender: 'man',
        size: 'small size',
        color: 'pink',
        img_file: 'pink_p.png'
    },

    {
        type: 'skirt',
        gender: 'female',
        size: 'large size',
        color: 'blue',
        img_file: 'blue_s.png'
    }, {
        type: 'skirt',
        gender: 'female',
        size: 'small size',
        color: 'blue',
        img_file: 'blue_s.png'
    }, {
        type: 'skirt',
        gender: 'female',
        size: 'large size',
        color: 'yellow',
        img_file: 'yellow_s.png'
    }, {
        type: 'skirt',
        gender: 'female',
        size: 'small size',
        color: 'yellow',
        img_file: 'yellow_s.png'
    }, {
        type: 'skirt',
        gender: 'female',
        size: 'large size',
        color: 'pink',
        img_file: 'pink_s.png'
    }, {
        type: 'skirt',
        gender: 'female',
        size: 'small size',
        color: 'pink',
        img_file: 'pink_s.png'
    }, {
        type: 't-shirts',
        gender: 'unisex',
        size: 'large size',
        color: 'blue',
        img_file: 'blue_t.png'
    }, {
        type: 't-shirts',
        gender: 'unisex',
        size: 'small size',
        color: 'blue',
        img_file: 'blue_t.png'
    }, {
        type: 't-shirts',
        gender: 'unisex',
        size: 'large size',
        color: 'yellow',
        img_file: 'yellow_t.png'
    }, {
        type: 't-shirts',
        gender: 'unisex',
        size: 'small size',
        color: 'yellow',
        img_file: 'yellow_t.png'
    }, {
        type: 't-shirts',
        gender: 'unisex',
        size: 'large size',
        color: 'pink',
        img_file: 'pink_t.png'
    }, {
        type: 't-shirts',
        gender: 'unisex',
        size: 'small size',
        color: 'pink',
        img_file: 'pink_t.png'
    },
];

const contents_box = document.querySelector('.js-contents');

function loadClothList(predi) {
    contents_box.innerHTML = '';

    const filter_clothes = clothes.filter((cloth) => {
        if (predi(cloth)) {
            return cloth;
        }
    });
    filter_clothes.forEach(cloth => {
        const cloth_info = document.createElement('div');
        cloth_info.classList.add('cloth-info');
        cloth_info.innerHTML = `
					<div class=\"cloth-info__img\"><img src=\"./img/${cloth.img_file}\"  /></div>
					<div class=\"cloth-info__txt\">${cloth.gender}, ${cloth.size}</div>
				`
        contents_box.appendChild(cloth_info);
    })
}

loadClothList(val => val);