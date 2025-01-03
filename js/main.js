const form = document.querySelector("form")
const input = document.querySelector("input")
const temp = document.querySelector(".temp")
const natija = document.querySelector(".natija")
const ism = document.querySelector(".ism")
const familiya = document.querySelector(".Familiya")
const tel = document.querySelector(".Telefon")
const pochta = document.querySelector(".pochta")
const qoshimch = document.querySelector(".qoshimch")
const trash = document.querySelector(".delete")




var data = [
    // {
    //     id: 0,
    //     ism: "Sarvarbek",
    //     familiya: "Odilxojayev",
    //     tel: "+998911113738",
    // },

]
const writeData = () => {
    natija.innerHTML = "";
    data.forEach((item) => {
        natija.innerHTML += `
                         <div class="temp">
                            <div class="box1">
                             <div> <img src="./imgs/Frame 13 (1).svg" alt=""></div>
                            <div class="FIO">
                             <h4>${item.familiya} <span>${item.ism}</span></h4>
                             <p>${item.tel}</p>
                            </div>
                            </div>
                            <div class="box2">
                             <div class="delete" >
                                 <i onclick="deleteitem(${item.id})" class="fa-solid fa-trash"></i>
                                </div>
                                <div class="dot">
                                 <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                         </div>
        `
    })
}
writeData()


form.addEventListener("submit", (e) => {
    e.preventDefault()
    var obj = {
        id: Math.random() * 9999,
        ism: ism.value,
        familiya: familiya.value,
        tel: tel.value,
    }
    data.push(obj)
    writeData()
    ism.value = "";
    familiya.value = "";
    tel.value = "";
    pochta.value="";
    qoshimch.value="";
})

const deleteitem =(id)=>{
    console.log(id);
    const newdata = data.filter((item)=>{
        return item.id != id
    })
    data = newdata
    writeData()
    
}