// script.js
function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var temperatureValue = parseFloat(temperatureInput.value);

    if (!isNaN(temperatureValue)) {
        var unitInputs = document.getElementsByName("unit");
        var selectedUnit;

        for (var i = 0; i < unitInputs.length; i++) {
            if (unitInputs[i].checked) {
                selectedUnit = unitInputs[i].value;
                break;
            }
        }

        if (selectedUnit === "celsius") {
            var fahrenheitValue = (temperatureValue * 9/5) + 32;
            var kelvinValue = temperatureValue + 273.15;
            document.getElementById("result").textContent = temperatureValue + "°C = " + fahrenheitValue.toFixed(2) + "°F = " + kelvinValue.toFixed(2) + "K";
        } else if (selectedUnit === "fahrenheit") {
            var celsiusValue = (temperatureValue - 32) * 5/9;
            var kelvinValue = (temperatureValue + 459.67) * 5/9;
            document.getElementById("result").textContent = temperatureValue + "°F = " + celsiusValue.toFixed(2) + "°C = " + kelvinValue.toFixed(2) + "K";
        } else if (selectedUnit === "kelvin") {
            var celsiusValue = temperatureValue - 273.15;
            var fahrenheitValue = (temperatureValue * 9/5) - 459.67;
            document.getElementById("result").textContent = temperatureValue + "K = " + celsiusValue.toFixed(2) + "°C = " + fahrenheitValue.toFixed(2) + "°F";
        }
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter a valid temperature.";
    }
}
