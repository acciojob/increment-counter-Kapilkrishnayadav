const btn=document.getElementById("incrementBtn");
        const counter=document.getElementById("counter");
        let c=0;
        btn.addEventListener("click",()=>{
            alert(c);
            c++;
            counter.innerText=c;
        })