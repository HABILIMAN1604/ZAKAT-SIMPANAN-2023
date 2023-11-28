
        function calculateZakat() {
            var savings = parseFloat(document.getElementById("savings").value);

            if (isNaN(savings)) {
                alert("Please enter a valid number for savings.");
                return;
            }

            var zakatAmount = (savings >= 21432) ? (0.025 * savings) : 0;

            var resultMessage = (zakatAmount > 0) ?
                `You are required to pay Zakat. The amount is RM ${zakatAmount.toFixed(2)}.` :
                "It is not compulsory to pay Zakat on savings less than RM 21,432 in 2023(value changes depending on year).";

            document.getElementById("result").innerHTML = resultMessage;
        }
    
