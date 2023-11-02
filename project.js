function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = '<p class="text-red-500">Please enter valid values for height and weight.</p>';
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    let resultText = '<p class="text-green-500">Your BMI is ' + bmi.toFixed(2) + '</p>';
resultText += '<p class="mt-2">Category: ' + category + '</p>';

    document.getElementById('result').innerHTML = resultText;
}



// Function to delay the appearance of text
function delayText() {
    let elements = document.querySelectorAll(".delayed-text");

    elements.forEach(function (element, index) {
        element.style.transition = "opacity 1s ease-in-out";
        setTimeout(function () {
            element.style.opacity = "1";
        }, 500 * (index + 1)); // Adjust the delay time for each text
    });
}

// Call the delayText function when the page is loaded
window.onload = delayText;

function calorieCalculate() {
    let weight = parseFloat(document.getElementById('weight').value);
    let activityLevel = parseFloat(document.getElementById('activityLevel').value);

    if (isNaN(weight) || isNaN(activityLevel) || weight <= 0) {
        document.getElementById('result').innerHTML = '<p class="text-red-500">Please enter valid values for weight and activity level.</p>';
        return;
    }

    let calories = weight * activityLevel * 24; // Basal Metabolic Rate (BMR) calculation

    let resultText = '<p class="text-green-500">Your estimated daily calories: ' + calories.toFixed(2) + ' kcal</p>';

    document.getElementById('result').innerHTML = resultText;
}