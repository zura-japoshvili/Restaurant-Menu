
const menu = [
    {
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "../img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      title: "diner double",
      category: "dinner",
      price: 13.99,
      img: "./img/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "/img/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "img/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "img/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "img/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "img/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "img/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "img/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

addEventListener("DOMContentLoaded",function(){
    createItemsFunc();
    displayAll();
});

let all_Item;

function createItemsFunc(){
    const menu_cont = document.querySelector(".menu-cont");
    for(let i = 0; i<menu.length;i++){
        const menu_item = document.createElement("div");
        menu_cont.appendChild(menu_item);
        menu_item.classList.add("menu-item",menu[i].category);
        const img = document.createElement("img");
        img.classList.add("photo");
        menu_item.appendChild(img);
        img.src = menu[i].img;
        const page_info = document.createElement("div");
        page_info.classList.add("item-info");
        menu_item.appendChild(page_info);
        const np = document.createElement("div");
        np.classList.add("np");
        page_info.appendChild(np);
        const name = document.createElement("h4");
        const price = document.createElement("h4");
        name.textContent = menu[i].title;
        price.textContent = menu[i].price;
        price.classList.add("price")
        np.append(name,price);
        const item_text = document.createElement("p");
        item_text.classList.add("item-text");
        item_text.textContent = menu[i].desc;
        page_info.appendChild(item_text);
    }
    all_Item = document.querySelectorAll(".menu-item");
}
function displayAll(){
    for(let i = 0;i<all_Item.length;i++){
        all_Item[i].style.display = "flex";
    }
}
function displayBF(){
    for(let i = 0;i<all_Item.length;i++){
        let check = all_Item[i].classList.contains("breakfast");
        if(check){
            all_Item[i].style.display = 'flex';
        }else{
            all_Item[i].style.display = 'none';
        }
    }
}
function diplayLN(){
    for(let i = 0;i<all_Item.length;i++){
        let check = all_Item[i].classList.contains("lunch");
        if(check){
            all_Item[i].style.display = 'flex';
        }else{
            all_Item[i].style.display = 'none';
        }
    }
}
function displaySH(){
    for(let i = 0;i<all_Item.length;i++){
        let check = all_Item[i].classList.contains("shakes");
        if(check){
            all_Item[i].style.display = 'flex';
        }else{
            all_Item[i].style.display = 'none';
        }
    }
}
function displayDN(){
    for(let i = 0;i<all_Item.length;i++){
        let check = all_Item[i].classList.contains("dinner");
        if(check){
            all_Item[i].style.display = 'flex';
        }else{
            all_Item[i].style.display = 'none';
        }
    }
}