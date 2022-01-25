const employes = [
    {   
        id:1,
        name:'Connor Mason',
        img:'./images/faces/general.png',
        position:'General Director'
    },
    {
        id:2,
        name:'Felipe Maynard',
        img:'./images/faces/manager.png',
        position:'Store Manager'
    },
    {
        id:3,
        name:'Abraham Bryant',
        img:'./images/faces/salesman.png',
        position:'Sales Associate'
    },
    {
        id:4,
        name:'Adele Rivers',
        img:'./images/faces/salesman2.png',
        position:'Sales Associate'
    },
    {   
        id:5,
        name:'Alana Mosley',
        img:'./images/faces/cashier.png',
        position:'Cashier'
    },
    {
        id:6,
        name:'Chelsea Mullins',
        img:'./images/faces/cashier2.png',
        position:'Cashier'
    },
    {
        id:7,
        name:'Tyler Bates',
        img:'./images/faces/webrep.png',
        position:'Customer Service Representative'
    },
    {
        id:8,
        name:'Karla Whitaker',
        img:'./images/faces/visual.png',
        position:'Inventory Control Specialist'
    }
];

const staffSpace = document.querySelector('.about__workers');
const workers = document.querySelectorAll('.about__workers-worker');

window.addEventListener('DOMContentLoaded',function() {
    displayAllEmployes(employes);
});

function displayAllEmployes (allEmployes) {
    let displayEmployes = allEmployes.map(function (employes) {
        return `
        <div class="about__workers-worker">
        <h2 class="about__workers-worker--name">${employes.name}</h2>
        <img class="about__workers-worker--picture" src="${employes.img}">
        <h2 class="about__workers-worker--position">${employes.position}</h2>
        </div>
        `
    });
    displayEmployes = displayEmployes.join('');
    staffSpace.innerHTML += displayEmployes;
}