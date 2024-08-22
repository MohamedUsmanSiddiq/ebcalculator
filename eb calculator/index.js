function bill(){
    let units=Number(document.getElementById("input").value)
    let result=document.getElementById("result");
    let rate;
    if(units<=50){
        rate=units*0.75;
    }
    else if(units<=150){
        rate=50*0.75+(units-50)*1;
    }
    else if(units<=250){
        rate=50*0.75+100*1+(units-150)*1.30;
    }
    else if(units>250){
        rate=(units-250)*1.50+50*0.75+100*1+(150*1.30);
    }
    else{
        rate=console.log("please enter correct units...")
    }
    console.log(units)
    console.log(result.innerHTML=rate);
}







