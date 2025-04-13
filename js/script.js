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