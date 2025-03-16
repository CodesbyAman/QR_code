const qrinput=document.getElementById('qr-input');
const qrbutton=document.getElementById('qr-button');
const qrimg=document.getElementById('qr-img');
// console.log(qrinput,qrbutton,qrimg);
qrbutton.addEventListener('click',function fun(){
    const inputValue=qrinput.value;
    console.log(inputValue);
    if(!inputValue){
        alert('please inter a valid URL');
        return 0;
    }
    else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt=`QR code for${inputValue}`;
    }
    
},false)