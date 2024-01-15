var navmenu = document.getElementById('nav-menu');
var menubtn = document.getElementById('menu-button');
var xbtn = document.getElementById('x-button');
navmenu.style.visibility = 'hidden';
navmenu.style.transform = 'translateX(-100%)';

setTimeout(() => {
    navmenu.style.visibility = 'visible';

    navmenu.style.transition = 'transform .5s';

}, 100);

menubtn.addEventListener('click', function() {
    navmenu.style.transform = 'translateX(25%)';
    xbtn.style.zIndex = '6';
});

xbtn.addEventListener('click', function() {
    navmenu.style.transform = 'translateX(-100%)';
    xbtn.style.zIndex = '1';

});


var title = document.getElementById('title');
var about = document.getElementById('about');
var over = document.getElementById('overview');
var active;

const divs = [];
const buttons = [];


var content = document.getElementById('content');
var child = content.querySelectorAll('div');
child[0].style.visibility = 'visible';
child[0].style.opacity = '1';
child[0].classList.add('active');
for (var i = 0; i < child.length; i++) {
    var prev, next;
    if (child[i].previousElementSibling != null) {
        prev = child[i].previousElementSibling;
    } else {
        prev = child[child.length - 1];
    }
    if (child[i].nextElementSibling != null) {
        next = child[i].nextElementSibling;
    } else {
        next = child[0];
    }
    const temp = {
        myself: child[i],
        prev: prev,
        next: next,
    };

    divs.push(temp);

    // set opacity of all child divs to 0, if it is not the first child
    if (i != 0) {
        child[i].style.visibility = 'hidden';
    }


}


function changeDiv(show, hide) {
    hide.style.visibility = 'hidden';

    hide.style.opacity = '0';
    show.style.visibility = 'visible';
    show.classList.toggle('slide');
    show.addEventListener('animationend', function() {
        show.classList.remove('slide');
    });
    show.style.opacity = '1';

    // get all the children of show node
    var child = show.querySelectorAll('div');
    // if length of child is greater than 0, then go through the child nodes and set their opacity to 1 and visiblity to visible
    if (child.length > 0) {
        for (var i = 0; i < child.length; i++) {
            child[i].style.opacity = '1';
            child[i].style.visibility = 'visible';
        }
    }


}


// get element with id "btns" and store it in div
var parent = document.getElementById('btns');
var num = document.getElementsByClassName('center').length;

for (var i = 0; i < num; i++) {
    var temp = document.createElement('div');
    var inner = document.createElement('div');
    temp.classList.add('btn');
    inner.classList.add('inner');
    temp.id = i;
    if (i == 0) {
        temp.classList.add('selected');
    }
    temp.appendChild(inner);
    parent.appendChild(temp);

    var tempobj = { j: temp };
    buttons.push(tempobj);
    temp.addEventListener('click', function(e) {
        var selected = document.querySelectorAll('.selected')[0];
        selected.classList.remove('selected');
        this.classList.add('selected');
        changeDiv(divs[this.id].myself, divs[selected.id].myself);
    });

}