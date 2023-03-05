var email=document.getElementById("email");
var password=document.getElementById("password");
var captcha=document.getElementById("captcha");

function login(){
if(email.value=="thilo@gmail.com" && password.value==2603)
    {
        if(captcha.value=="TDL26dt"){

       
        alert("Welcome to our Kitchen Story: "+email.value);
        location.href="KitchenHomepage.html";
        }  
        else{
            
            document.getElementById("captcha").innerText="Type correct Captcha";
            location.href="LoginPage.html";
        }  
    }
    else{
        
        alert(" Sorry,Your Login is Not Successful \n Please try again " +email.value);
        location.href="LoginPage.html";
    }
}

var search=document.getElementById("search");

function searchfunc(){
    if(search.value=="Icecream"){
        location.href="Icecream.html";
    }
    else if(search.value=="Pizza"){
        location.href="Pizza.html";
    }
    else if(search.value=="Sandwich"){
        location.href="Sandwich.html";
    
    }
    else{
        alert("Please type a correct food Order");
        location.href="KitchenHomepage.html";
    }
}

function back(){
    location.href="KitchenHomepage.html";
}

function logout(){
    alert("You have been Loggedout");
    location.href="LoginPage.html";
}

var sandwich1_p=80, sandwich2_p=100;
var sandwich1_q=0, sandwich2_q=0;
var bill_b1="";
var bill_b2="";
i=0;
j=0;
k=0;



document.getElementById("sandwich1").addEventListener("click", function(){
    while(j<1){
        i=i+1;
        j=j+1;
    }
    if(this.value=="" || this.value==0){
        i=i-1;
        j=0;
        sandwich1_q=0;
        bill_b1="";
        printbill()
    }
    else{
        sandwich1_q=document.getElementById("sandwich1").value;
        bill_b1="<tr><td>Mc-Donald's Sandwich</td><td>"+sandwich1_q+"</td><td>"+sandwich1_q*sandwich1_p+"</td></tr>"
        printbill()
    }
});


document.getElementById("sandwich2").addEventListener("click", function(){
    while(k<1){
        i=i+1;
        k=k+1;
    }
    if(this.value=="" || this.value==0){
        i=i-1;
        k=0;

        sandwich2_q=0;
        bill_b2="";
        printbill()

    }
    else{

        sandwich2_q=document.getElementById("sandwich2").value;
        bill_b2="<tr><td>KFC Sandwich</td><td>"+sandwich2_q+"</td><td>"+sandwich2_q*sandwich2_p+"</td></tr>"
        printbill()
    }
});



function printbill(){
    
    document.getElementById("cartvalue").innerHTML=bill_b1+bill_b2;
    document.getElementById("amount").innerText=sandwich1_p*sandwich1_q + sandwich2_p*sandwich2_q;
    document.getElementById("count").innerText=i;
}


function checkout(){

    alert("Your Order Value is" +(sandwich1_p*sandwich1_q + sandwich2_p*sandwich2_q));
    location.href="ConfirmOrder.html";
}
