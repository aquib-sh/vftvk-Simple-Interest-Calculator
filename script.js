function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;

    var finalAmount = parseInt(principal) + parseInt(interest);

    // gets the current year and adds the additional years
    var year = new Date().getFullYear() + parseInt(years);

    // display result on the page
    var computed_result = document.getElementById("result")
    computed_result.innerText = "If you deposit "+principal+",\n"+
        "at an interest rate of "+rate+"%.\n"+
        "You will receive an amount of "+finalAmount+",\n"+
        "in the year "+year

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
