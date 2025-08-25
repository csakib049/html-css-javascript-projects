const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

// Wait for DOM and all scripts to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if countryList is available
    if (typeof countryList === 'undefined') {
        console.error('countryList is not defined. Make sure codes.js is loaded.');
        return;
    }

    const dropdowns = document.querySelectorAll(".dropdown select");
    const btn = document.querySelector("form button");
    const fromCurr = document.querySelector("[name='from']");
    const toCurr = document.querySelector("[name='to']");
    const msg = document.querySelector(".message");

    // Populate dropdown options
    for (let select of dropdowns) {
        for (let currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if (select.name === "from" && currCode === "USD") {
                newOption.selected = "selected";
            } else if (select.name === "to" && currCode === "INR") {
                newOption.selected = "selected";
            }
            select.append(newOption);
        }

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
    }

    // Update flag when currency is changed
    const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    };

    // Get exchange rate
    const updateExchangeRate = async () => {
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;

        if (amtVal === "" || amtVal < 1) {
            amtVal = 1;
            amount.value = "1";
        }

        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

        try {
            let response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let result = await response.json();
            let exchangeRate = result[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

            let finalAmount = (amtVal * exchangeRate).toFixed(2);
            msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
        } catch (error) {
            msg.innerText = "Something went wrong. Please try again.";
            console.error("Error fetching exchange rate:", error);
        }
    };

    // Event listeners
    btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        updateExchangeRate();
    });

    // Load exchange rate on page load
    updateExchangeRate();
});

