function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}


function tryRemoveFromArray(arr, number) {
    let arrNew=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!=number){
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}



function isFibonacci(number){
    let number1=0;
    let number2=1;
    if(number==number1||number==number2){
        return true;
    }
    let number3=number1+number2;
    while(number3<=number){
        if(number3==number){
            return true;
        }
        number1=number2;
        number2=number3;
        number3=number1+number2;
    }
    return false;
}
let array=[1,3,5,6,7,9,6]
let num = 2
console.log(findMax(array));
console.log(tryRemoveFromArray(array,num));
console.log(isFibonacci(13));



function renderHTML(){
    let x=document.getElementById("xPosition").value;
    let y=document.getElementById("yPosition").value;
    let radius=document.getElementById("radius").value;
    let color=document.getElementById("color").value;
    let circleA=new Circle(x,y,radius,color);
    circleA.render(circleA.getX(),circleA.getY(),circleA.getRadius(),circleA.getColor());
}