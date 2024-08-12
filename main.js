let hour=document.getElementById('hour');
    let minute=document.getElementById('minute');
    let second=document.getElementById('second');

    function setDate(){
        let now=new Date();
        let h=now.getHours();
        let m=now.getMinutes();
        let s=now.getSeconds();
        const sDegree=((s/60)*360);
        hour.style.transform=`rotate(${((h/12)*360)}deg)`;
        minute.style.transform=`rotate(${((m/60)*360)}deg)`;
        second.style.transform=`rotate(${sDegree}deg)`;
    }
    setInterval(setDate,1000)