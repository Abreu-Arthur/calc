function coloq(n){
    var number=document.getElementById('resul').innerHTML
    document.getElementById('resul').innerHTML=number+n
}
function limp(){
    document.getElementById('resul').innerHTML=''
}
function dele(){
    var number=document.getElementById('resul').innerHTML
    document.getElementById('resul').innerHTML=number.substring(0,number.length-1)
}
function resul(){
    var number=document.getElementById('resul').innerHTML
    if(number){
        document.getElementById('resul').innerHTML=eval(number)
    }
}