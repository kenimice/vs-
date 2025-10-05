const styleSheet = document.styleSheets[0];
let content = "select1";
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".select2");
let select3 = document.querySelector(".select3");
let select4 = document.querySelector(".select4");
let select5 = document.querySelector(".select5");
let select_bg = document.querySelector(".select-background");
let now_select = [
    select1,select2,select3,select4,select5
];
let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let main3 = document.querySelector(".main3");
let main4 = document.querySelector(".main4");
let main5 = document.querySelector(".main5");
let maincontent = [
    main1, main2, main3, main4, main5
];

function colorblack(select) {
    if (!select) return;
    now_select.filter(el => el !== select).forEach((el, index) => {
        el.style.color = "black";
        el.style.setProperty('--after-color', 'black');
    });
}

function mainhide(main) {
    if (!main) return
    maincontent.filter(el => el !== main).forEach((el, index) => {
        el.style.display = "none";
    });
    main.style.display = "";
}

select1.addEventListener("click", ()=> {
    if (content !== select1) {
        select_bg.style.left = "22px";
        select_bg.style.width = "90px";
        select1.style.color = "white";
        select1.style.setProperty('--after-color', 'white');
        colorblack(select1);
        mainhide(main1);
    }
});

select2.addEventListener("click", ()=> {
    if (!content !== select2) {
        select_bg.style.left = "108px";
        select_bg.style.width = "145px";
        select2.style.color = "white";
        select2.style.setProperty('--after-color', 'white');
        colorblack(select2);
        mainhide(main2);
    }
});

select3.addEventListener("click", ()=> {
    if (content !== select3) {
        select_bg.style.left = "244px";
        select_bg.style.width = "90px";
        select3.style.color = "white";
        select3.style.setProperty('--after-color', 'white');
        colorblack(select3);
        mainhide(main3);
    }
});

select4.addEventListener("click", ()=> {
    if (!content !== select4) {
        select_bg.style.left = "329px";
        select_bg.style.width = "102px";
        select4.style.color = "white";
        select4.style.setProperty('--after-color', 'white');
        colorblack(select4);
        mainhide(main4);
    }
});

select5.addEventListener("click", ()=> {
    if (!content !== select5) {
        select_bg.style.left = "427px";
        select_bg.style.width = "150px";
        select5.style.color = "white";
        select5.style.setProperty('--after-color', 'white');
        colorblack(select5);
        mainhide(main5);
    }
});