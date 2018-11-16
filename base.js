function getNumOfKids() {
    var noOfKids = 0;
    var childForm = document.forms["childForm"];
    var selectedKid = childForm.elements["selectedKid"];
    for (var i = 0; i < selectedKid.length; i++) {
        //if the radio button is checked
        if (selectedKid[i].checked) {
            noOfKids = selectedKid[i].value
            break;
        }
    }
    return noOfKids;
}

function getTotal() {
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() +
        candlesPrice() + insciptionPrice();

    //display the result
    document.getElementById('totalPrice').innerHTML =
        "Total Price For Cake $" + cakePrice;

}

function childExpenseCal() {
    var noOfKids = getNumOfKids()
    localStorage.setItem('noOfKids', noOfKids)
    document.getElementById('insuranceExpense').value = noOfKids * 150
    document.getElementById('schoolExpense').value = noOfKids * 350
    document.getElementById('foodExpense').value = noOfKids * 300
    document.getElementById('totalExpenseKid').value = noOfKids * 800
    localStorage.setItem('insuranceExpenseKid', noOfKids * 150)
    localStorage.setItem('schoolExpenseKid', noOfKids * 350)
    localStorage.setItem('foodExpenseKid', noOfKids * 300)
    localStorage.setItem('totalExpenseKid', noOfKids * 800)
    document.getElementById('expectedExpenseOverIncome').innerText = "Total child expenses takes up around " + Number(document.getElementById('totalExpenseKid').value) / 10000 * 100 + "% of your total income (" + 10000 + "SGD)"
    drawChart1()
    drawChart2()
}

function logChildExpense() {
    localStorage.setItem('insuranceExpenseKid', document.getElementById('insuranceExpense').value)
    localStorage.setItem('schoolExpenseKid', document.getElementById('schoolExpense').value)
    localStorage.setItem('foodExpenseKid', document.getElementById('foodExpense').value)
    document.getElementById('totalExpenseKid').value = Number(document.getElementById('insuranceExpense').value) + Number(document.getElementById('schoolExpense').value) + Number(document.getElementById('foodExpense').value)
    localStorage.setItem('totalExpenseKid', document.getElementById('totalExpenseKid').value)
    document.getElementById('expectedExpenseOverIncome').innerText = "Total child expenses takes up around " + Number(document.getElementById('totalExpenseKid').value) / 10000 * 100 + "% of your total income (" + 10000 + "SGD)"
    drawChart1()
    drawChart2()
}

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart1() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Category', 'SGD'],
            ['Insurance', Number(localStorage.getItem('insuranceExpenseKid'))],
            ['School', Number(localStorage.getItem('schoolExpenseKid'))],
            ['Food', Number(localStorage.getItem('foodExpenseKid'))],
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title': 'PieChart1', 'width': 550, 'height': 400};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('pieChartChild'));
        chart.draw(data, options);
    }
}

function drawChart2() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Category', 'SGD'],
            ['Total Expense on Children', Number(localStorage.getItem('totalExpenseKid'))],
            ['Total Monthly Savings', 10000-Number(localStorage.getItem('totalExpenseKid'))],
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title': 'PieChart2', 'width': 550, 'height': 400};

        // Display the chart inside the <div> element with id="pieChartChildIncomeTotal"
        var chart = new google.visualization.PieChart(document.getElementById('pieChartChildIncomeTotal'));
        chart.draw(data, options);
    }
}