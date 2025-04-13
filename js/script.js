function setPercentage(progressValue,progressPercent,part){
    const parent = document.querySelector(`.${part}`);
    const progressText = parent.querySelector('.progress-text');
    const circle = parent.querySelector(`.${part} .progress`);
    const progressNumber=parent.querySelector(`.${part} .left h1`);
    //set progresstext
    progressText.innerHTML=progressPercent+"%"
    progressNumber.innerHTML=progressValue+"$"

    const progress = progressPercent; 
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}
function calcSales(sales,enpences,income,total){
    const salesPercent=sales/total*100
    const enpencesPercent=enpences/total*100
    const incomePercent=income/total*100
    setPercentage(sales.toLocaleString(),salesPercent.toFixed(1),"sales")
    setPercentage(enpences.toLocaleString(),enpencesPercent.toFixed(1),"expenses")
    setPercentage(income.toLocaleString(),incomePercent.toFixed(1),"income")
}
calcSales(12045,2000,10054,15000)

const sideMenu=document.querySelector("aside")
const menuBtn=document.querySelector("#menu-btn")
const closeBtn=document.querySelector("#close-btn")
const themeToggler=document.querySelector(".theme-toggler")
const tableContent=document.querySelector('table tbody')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display="none"
})
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})



const orders = [
    {
      productName: "Wireless Headphones",
      number: 1054,
      payment: "Paid",
      status: "Delivered"
    },
    {
      productName: "Bluetooth Speaker",
      number: 658,
      payment: "Due",
      status: "Pending"
    },
    {
      productName: "Smartwatch",
      number: 4231,
      payment: "Refund",
      status: "Canceled"
    },
    {
      productName: "Gaming Mouse",
      number: 112,
      payment: "Paid",
      status: "Delivered"
    },
    {
      productName: "Laptop Stand",
      number: 987,
      payment: "Due",
      status: "Pending"
    },
    {
      productName: "Mechanical Keyboard",
      number: 2045,
      payment: "Paid",
      status: "Delivered"
    },
    {
      productName: "USB-C Cable",
      number: 332,
      payment: "Refund",
      status: "Canceled"
    },
    {
      productName: "Portable SSD",
      number: 775,
      payment: "Paid",
      status: "Delivered"
    },
    {
      productName: "Noise Cancelling Earbuds",
      number: 1400,
      payment: "Due",
      status: "Pending"
    },
    {
      productName: "Webcam",
      number: 351,
      payment: "Paid",
      status: "Delivered"
    }
  ];

function display (){
    let cartona=``
    orders.forEach((order)=>{
        cartona+=`
        <tr>
            <td>${order.productName}</td>
            <td>${order.number}</td>
            <td>${order.payment}</td>
            <td class="${order.status==="Canceled"?"danger":order.status==="Delivered"?"success":"warning"}">${order.status}</td>
            <td class="primary">Details</td>
        </tr>
        `
    })
    tableContent.innerHTML=cartona
}
display()

const today = new Date().toISOString().split('T')[0];
document.querySelector('main .date input[type="date"]').value=today