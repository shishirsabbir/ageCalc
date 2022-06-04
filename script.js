const form = document.getElementById('details');
const ageClock = document.querySelector('.age_clock');
const panelOne = document.querySelector('.panel-1');
const panelTwo = document.querySelector('.panel-2');
const userName = document.querySelector('.user_name');
const addressField = document.querySelector('.address');
console.log(addressField);


let before = 0;

const tick = () => {
    const now = new Date();

    const diff = now.getTime() - before.getTime();
    
    const second = Math.floor(diff / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(day / 30);
    const year = Math.floor(month / 12);

    const html = `
    <span>${year}</span> Years <span>${month - (year*12)}</span> Months <span>${day - (month*30)}</span> Days <br> <span>${hour - (day*24)}</span> Hours <span>${minute - (hour*60)}</span> Minutes <span>${second - (minute*60)}</span> Seconds
    `;

    ageClock.innerHTML = html;
}



form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const address = form.address.value;
    const email = form.email.value;
    const b_date = form.birth_date.value;
    before = new Date(b_date);


    panelOne.classList.add('d-none');
    panelTwo.classList.remove('d-none');
    setInterval(tick, 1000);

    // dom manupulation
    
    userName.innerHTML = `${firstName} ${lastName}`;
    addressField.innerHTML = `${address}<br>${email}`;

});