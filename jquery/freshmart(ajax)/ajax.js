
let ulist = document.getElementById('ulist');
let flist = document.getElementById('fruitslist');
let newfruits = document.getElementById('newfruits');
let salevegies = document.getElementById('salevegies');

let vegebtn = document.getElementById('vegebtn');
vegebtn.addEventListener('click', buttonclick)
function buttonclick() {
    console.log("clicked");
    const xhr = new XMLHttpRequest();   // instantiation.
    xhr.open('GET', 'tris.txt', true);  // opening the object 
    xhr.onload = function () {          // task or function which is to be perfomed.
        console.log(this.responseText);
    }
    xhr.send();   // for finally sending the xhr ( XMLHttpRequest Object)

}

let list = document.getElementById('populatebtn');
populatebtn.addEventListener('click', pophandle)


function pophandle() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'tris.txt', true);


    xhr.onload = function () {
        // console.log(this.responseText);
        let ulist = document.getElementById('ulist');
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        str = " ";
        for (i in obj) {
            str += `<li>${obj[i]}</li>`;
        }
        ulist.innerHTML = str;
    }

    xhr.send();
}


let btn2 = document.getElementById('fruitsbtn');
btn2.addEventListener('click', buttonclick)
function buttonclick() {
    console.log("clicked");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'fruits.txt', true);
    xhr.onload = function () {
        console.log(this.responseText);
    }
    xhr.send();

}

let list1 = document.getElementById('populatebtn2');
populatebtn2.addEventListener('click', pophandle2)


function pophandle2() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'fruits.txt', true);
    xhr.onload = function () {
        console.log(this.responseText);
        let flist = document.getElementById('fruitslist');
        let obj1 = JSON.parse(this.responseText);
        console.log(obj1);
        str = " ";
        for (i in obj1) {
            str += `<li>${obj1[i]}</li>`;
        }
        flist.innerHTML = str;
    }

    xhr.send();
}

const vegies = [
    { name: "cabbage"},{name: "brinjel" }
]
function addvege() {
    setTimeout(function () {
        vegies.push(vege);
    }, 500)
}
function getvegies() {
    setTimeout(function () {

        let str1 = ""
        vegies.forEach(function(vege){
            str1 += `<li>${vege.name}</li>`
        });
        document.getElementById('salevegies').innerHTML = str1;
    }, 1000)
}
let vege={name:"raddish"};
addvege(vege);
getvegies();





const fruits = [
    { name: "blueberry" }, { name: "lemon" }   //array in which fruit is to be added
]

function addfruits(fruit) {
    setTimeout(function () {
        fruits.push(fruit);  //in the array fruits add a fruit
        console.log("added");
    }, 300)
}

function getfruits() {
    setTimeout(function () {
        let str = ""
        fruits.forEach(function (fruit) {
            str += `<li>${fruit.name}</li>`
        });
        document.getElementById('newfruits').innerHTML = str;
        console.log("fetched");
    }, 1000)
}




let fruit = { name: "cherrytomato" }  //the fruit to be added
addfruits(fruit); // function call
getfruits();

// for clearing  the lists ..

let del = document.getElementById('megan');
del.addEventListener('click', deletecont) // second argument is to be the click function name.
function deletecont () {
console.log("vegetables deleted")

ulist.innerHTML = " ";


}
// for clearing  the lists ..

let del2 = document.getElementById('stewie');
del2.addEventListener('click', deletecont2) // second argument is to be the click function name.
function deletecont2 () {
console.log("fruits deleted")

flist.innerHTML = " ";

}






 