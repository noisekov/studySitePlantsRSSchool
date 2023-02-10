const burgerBtn = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__item');
const btnClose = document.querySelector('.nav__btn-close');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.add('show');
})

btnClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

navItem.forEach(element => {
    element.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
});

const serviceBtns = document.querySelectorAll('.service__btn');
const cardItems = document.querySelectorAll('.card__items');

let count = 0;
serviceBtns[0].addEventListener('click', () => {
    if (serviceBtns[0].classList.contains('active')) {
        count--
        serviceBtns[0].classList.remove('active');

        if (!serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[1].classList.remove('blur');
            cardItems[2].classList.remove('blur');
            cardItems[3].classList.remove('blur');
            cardItems[5].classList.remove('blur');
        } else if (serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.add('blur');
            cardItems[4].classList.add('blur');
        } else if (!serviceBtns[1].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.add('blur');
            cardItems[4].classList.add('blur');
        }
    } else {
        if (count !== 2) {
            count++
            serviceBtns[0].classList.add('active');
        } 

        if (!serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[1].classList.add('blur');
            cardItems[2].classList.add('blur');
            cardItems[3].classList.add('blur');
            cardItems[5].classList.add('blur');
        } else if (serviceBtns[1].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.remove('blur');
            cardItems[4].classList.remove('blur');
            cardItems[1].classList.add('blur');
            cardItems[3].classList.add('blur');
            cardItems[5].classList.add('blur');
        } else if (!serviceBtns[1].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.remove('blur');
            cardItems[4].classList.remove('blur');
        }
    }
})

serviceBtns[1].addEventListener('click', () => {
    if (serviceBtns[1].classList.contains('active')) {
        count--
        serviceBtns[1].classList.remove('active');


        if (!serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.remove('blur');
            cardItems[1].classList.remove('blur');
            cardItems[3].classList.remove('blur');
            cardItems[4].classList.remove('blur');
            cardItems[5].classList.remove('blur');
        } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[2].classList.add('blur');
        } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[2].classList.add('blur');
        }
    } else {
        if (count !== 2) {
            count++
            serviceBtns[1].classList.add('active');
        }

        if (!serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[0].classList.add('blur');
            cardItems[1].classList.add('blur');
            cardItems[3].classList.add('blur');
            cardItems[4].classList.add('blur');
            cardItems[5].classList.add('blur');
        } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[2].classList.contains('active')) {
            cardItems[2].classList.remove('blur');
            cardItems[1].classList.add('blur');
            cardItems[3].classList.add('blur');
            cardItems[5].classList.add('blur');
        } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[2].classList.contains('active')) {
            cardItems[2].classList.remove('blur');
        }
    }
})

serviceBtns[2].addEventListener('click', () => {
    if (serviceBtns[2].classList.contains('active')) {
        count--
        serviceBtns[2].classList.remove('active');

        if (!serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
            cardItems[0].classList.remove('blur');
            cardItems[2].classList.remove('blur');
            cardItems[4].classList.remove('blur');
        } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
            cardItems[1].classList.add('blur');
            cardItems[3].classList.add('blur');
            cardItems[5].classList.add('blur');
        } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[1].classList.contains('active')) {
            cardItems[1].classList.add('blur');
            cardItems[3].classList.add('blur');
            cardItems[5].classList.add('blur');
        }

    } else {
        if (count !== 2) {
            count++
            serviceBtns[2].classList.add('active');


            if (!serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
                cardItems[0].classList.add('blur');
                cardItems[2].classList.add('blur');
                cardItems[4].classList.add('blur');
            } else if (serviceBtns[0].classList.contains('active') && !serviceBtns[1].classList.contains('active')) {
                cardItems[1].classList.remove('blur');
                cardItems[3].classList.remove('blur');
                cardItems[5].classList.remove('blur');
            } else if (!serviceBtns[0].classList.contains('active') && serviceBtns[1].classList.contains('active')) {
                cardItems[1].classList.remove('blur');
                cardItems[3].classList.remove('blur');
                cardItems[5].classList.remove('blur');
            }
        }
    }
})

//accordion btnS
// const accrdnWrap = document.querySelector('.accordion__wrapper');
const accrdnBtn = document.querySelectorAll('.accordion__btn');
const arrowBtn = document.querySelectorAll('.accordion__btn-arrow');
const orderBtn = document.querySelectorAll('.accordion__btn-order');

accrdnBtn[0].addEventListener('click', function() {
    this.classList.toggle('active');
    arrowBtn[0].classList.toggle('rotate');
    accrdnBtn[1].classList.remove('active');
    accrdnBtn[2].classList.remove('active');
    arrowBtn[1].classList.remove('rotate');
    arrowBtn[2].classList.remove('rotate');
})

accrdnBtn[1].addEventListener('click', function() {
    this.classList.toggle('active');
    arrowBtn[1].classList.toggle('rotate');
    accrdnBtn[0].classList.remove('active');
    accrdnBtn[2].classList.remove('active');
    arrowBtn[0].classList.remove('rotate');
    arrowBtn[2].classList.remove('rotate');
})

accrdnBtn[2].addEventListener('click', function() {
    this.classList.toggle('active');
    arrowBtn[2].classList.toggle('rotate');
    accrdnBtn[1].classList.remove('active');
    accrdnBtn[0].classList.remove('active');
    arrowBtn[1].classList.remove('rotate');
    arrowBtn[0].classList.remove('rotate');
})
//order btn add class when click order link
orderBtn[0].addEventListener('click', function() {
    accrdnBtn[0].classList.toggle('active');
    arrowBtn[0].classList.toggle('rotate');
})
orderBtn[1].addEventListener('click', function() {
    accrdnBtn[1].classList.toggle('active');
    arrowBtn[1].classList.toggle('rotate');
})
orderBtn[2].addEventListener('click', function() {
    accrdnBtn[2].classList.toggle('active');
    arrowBtn[2].classList.toggle('rotate');
})


//contacts btn
const contactsBtn = document.querySelector('.contacts__btn');
const contactsWrap = document.querySelector('.contacts__wrapper');
const contactsArrow = document.querySelector('.contacts__btn-arrow');
const contactsCity = document.querySelector('.city');

contactsBtn.addEventListener('click' , openDropdown);

function openDropdown () {
    console.log(window.innerWidth)
    if (window.innerWidth < 769) {
        const contactsBtn = document.getElementsByClassName('contacts__btn');
        const contactsImg = document.getElementsByClassName('contacts__img');
        const contactsCallblock = document.getElementsByClassName('contacts__call');
        
        contactsBtn[0].style = "margin-top: 100px";
        contactsImg[0].style = "padding-top: 288px";
        contactsCallblock[0].style = "margin-top: 61px";
    }

    if (window.innerWidth < 601) {
        const contactsContent = document.getElementsByClassName('contacts__content');
        const contactsImg = document.getElementsByClassName('contacts__img');
        const contactsCallblock = document.getElementsByClassName('contacts__call');

        contactsContent[0].style = "padding-top: 3px; padding-bottom: 294px";
        contactsImg[0].style = "display:none";
        contactsCallblock[0].style = "margin-top: 47px";
    }

    contactsBtn.classList.toggle('show');
    contactsWrap.classList.toggle('show');
    contactsCity.classList.toggle('show');
    contactsArrow.classList.toggle('rotate');
}

//change ccontacts city when click dropdown
const cityItem = document.querySelectorAll('.city__item');
const cityInput = document.querySelector('.city__input');
const contactsBtnTitle = document.querySelector('.contacts__btn-title');

const contactsCallBlock = document.querySelector('.contacts__call');
const contactsCallBlockCity = document.querySelector('.call__city-value');
const contactsCallBlockPhone = document.querySelector('.call__phone-value');
const contactsCallBlockAdress = document.querySelector('.call__adress-value');
const callBtn = document.querySelector('.call__btn');


cityItem.forEach(item => {
    item.addEventListener('click', function() {
        cityInput.value = this.dataset.city;
        contactsCallBlock.classList.add('show');
        
        if (cityInput.value === 'first') {
            contactsBtnTitle.innerHTML = 'Canandaigua, NY';
            contactsCallBlockCity.innerHTML = "Canandaigua, NY";
            contactsCallBlockPhone.innerHTML = "+1	585	393 0001";
            contactsCallBlockAdress.innerHTML = "151 Charlotte Street";
            callBtn.href = `tel:${contactsCallBlockPhone.innerHTML.replace('+', '').replace(/\s+/g, '')}`;
        } else if (cityInput.value === 'second') {
            contactsBtnTitle.innerHTML = 'New York City';
            contactsCallBlockCity.innerHTML = "New York City";
            contactsCallBlockPhone.innerHTML = "+1	212	456 0002";
            contactsCallBlockAdress.innerHTML = "9 East 91st Street";
            callBtn.href = `tel:${contactsCallBlockPhone.innerHTML.replace('+', '').replace(/\s+/g, '')}`;
        } else if (cityInput.value === 'third') {
            contactsBtnTitle.innerHTML = 'Yonkers, NY';
            contactsCallBlockCity.innerHTML = "Yonkers, NY";
            contactsCallBlockPhone.innerHTML = "+1	914	678 0003";
            contactsCallBlockAdress.innerHTML = "511 Warburton Ave";
            callBtn.href = `tel:${contactsCallBlockPhone.innerHTML.replace('+', '').replace(/\s+/g, '')}`;
        } else {
            contactsBtnTitle.innerHTML = 'Sherrill, NY';
            contactsCallBlockCity.innerHTML = "Sherrill, NY";
            contactsCallBlockPhone.innerHTML = "+1	315	908 0004";
            contactsCallBlockAdress.innerHTML = "14 WEST Noyes BLVD";
            callBtn.href = `tel:${contactsCallBlockPhone.innerHTML.replace('+', '').replace(/\s+/g, '')}`;
        }
    })
})

//call btn in call block
if (callBtn) {
    callBtn.addEventListener('click', () => {
        openDropdown ()
    })
}
