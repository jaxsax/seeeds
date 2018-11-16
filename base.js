function getNumOfKids()
{
    var noOfKids=0;
    var childForm = document.forms["childForm"];
    var selectedKid = childForm.elements["selectedKid"];
    for(var i = 0; i < selectedKid.length; i++)
    {
        //if the radio button is checked
        if(selectedKid[i].checked)
        {
            noOfKids = selectedKid[i].value
            break;
        }
    }
    return noOfKids;
}

function getTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() +
                          candlesPrice() + insciptionPrice();

    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Cake $"+cakePrice;

}

function childExpenseCal(){
    var noOfKids = getNumOfKids()
    localStorage.setItem('noOfKids',noOfKids)
    console.log(localStorage.getItem('noOfKids'))
    document.getElementById('insuranceExpense').innerHTML = "Cost of Insurance Per Month: " + noOfKids*150 + " SGD";
    document.getElementById('schoolExpense').innerHTML = "Cost of School Per Month: " + noOfKids*350 + " SGD"
    document.getElementById('foodExpense').innerHTML = "Cost of Food Per Month: " + noOfKids*300 + " SGD"
    document.getElementById('totalExpenseKid').innerHTML = "Total Cost Per Month: " + noOfKids*800 + " SGD which is around " + noOfKids*800/100 + "% of your monthly income (" + 10000 + " SGD)"
    localStorage.setItem('insuranceExpenseKid',noOfKids*150)
    localStorage.setItem('schoolExpenseKid',noOfKids*350)
    localStorage.setItem('foodExpenseKid',noOfKids*300)
    localStorage.setItem('totalExpenseKid',noOfKids*800)

}