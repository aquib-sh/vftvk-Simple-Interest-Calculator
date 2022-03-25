function compute()
{
    var principal = document.getElementById("principal").value;

    if (principal == "") {
        alert("You have entered an empty value, please enter a positive value");
        document.getElementById("principal").focus();
        return;
    }

    if (parseInt(principal) < 0) {
        alert("You have entered a negative value, please enter a positive value");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;

    // gets the current year and adds the additional years
    var year = new Date().getFullYear() + parseInt(years);

    // display result on the page
    var computed_result = document.getElementById("result")
    computed_result.innerHTML = "If you deposit <mark>"+principal+"</mark>,<br/>"+
        "at an interest rate of <mark>"+rate+"%</mark>.<br/>"+
        "You will receive an amount of <mark>"+interest+"</mark>,<br/>"+
        "in the year <mark>"+year+"</mark>"

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
