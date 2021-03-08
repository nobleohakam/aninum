//get numbers from button
var fnum, snum;

//numbers appear on the screen in alert boxes
function setup(first, second){
    first = document.getElementById("firstnum").value;
    second = document.getElementById("secnum").value;
    //alert(first);
    //alert(second);

    if (amicable(factors(first), second) && amicable(factors(second), first)){
        document.write(first + " & " + second + " are amicable numbers");
    }else{
        document.write(first + " & " + second + " are not amicable numbers");
    }
}

//function that puts the factors of a number into an Array
function factors(num){
    var fact_arr = new Array();
    for (i = 1; i < num; i++) {
        if (num % i == 0){
            fact_arr.push(i);
        }
    }
    return fact_arr;
}

//that array can be looped and its sum collected
function amicable(arr,num){
    var arr_sum = 0;
    for (i = 0; i < arr.length; i++) {
        arr_sum += arr[i];
    }
    if (arr_sum == num){
        return 1;
    }else{
        return 0;
    }
}
