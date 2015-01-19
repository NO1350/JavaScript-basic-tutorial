/**
 * Created by 100068 on 2015/1/19.
 */
window.onload=initAll;
function initAll(){
    var ans=prompt("Enter a number","");
    try{
        if(!ans || isNaN(ans) ||ans<0){
            throw new Error("Not a valid number");
        }
        alert("The square root of "+ans+" is"+Math.sqrt(ans));
    }
    catch(errMsg) {
        alert(errMsg.message);
    }
}