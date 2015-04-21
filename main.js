/**
 * Created by malikasinger on 21-Apr-15.
 */
function GetAscii() {
    var a = document.getElementById("input").value;
    if(a == ""){
        document.getElementById("p").innerHTML = "You leave box empty";

    }else
        document.getElementById("p").innerHTML = "ASCII code of '" + a + "'" + " is " + a.charCodeAt(0);

}