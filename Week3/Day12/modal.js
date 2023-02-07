function login(event){
    event.preventDefault();
    var check=document.getElementById("name");
    var p=document.getElementById("display");
    var val=document.getElementById("success")
    var inval=document.getElementById("danger")
    // alert("working")
    console.log(check.value);
    if(check.value=="admin"){
        inval.classList.add('d-none')
        val.classList.remove("d-none")
    }
    else{
        val.classList.add('d-none')
        inval.classList.remove("d-none")

    
    }
}