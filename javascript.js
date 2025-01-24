document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page.

    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let healthCondition = document.getElementById("healthCondition").value;

    let output = document.getElementById("output");
    output.style.display = "block";  // Ensure the output container is shown.
    
    // Generate Diet Plan, Health Tips, and Exercises based on health condition
    let dietPlan = generateDietPlan(healthCondition);
    let healthTips = generateHealthTips(healthCondition);
    let exercises = generateExercises(healthCondition);

    // Display the output
    output.innerHTML = `
        <h2>Your Health Plan</h2>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Health Condition:</strong> ${healthCondition}</p>

        <h3>Diet Plan for 1 Week</h3>
        ${dietPlan}

        <h3>Health Tips</h3>
        <ul>
            ${healthTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>

        <h3>Recommended Exercises</h3>
        <ul>
            ${exercises.map(exercise => `<li>${exercise}</li>`).join('')}
        </ul>

        <!-- Option to navigate to another page -->
        <button onclick="window.location.href='nextPage.html'">Go to Next Page</button>
    `;
});

function generateDietPlan(healthCondition) {
    if (healthCondition === 'diabetes') {
        return `
            <h4>Day 1</h4>
            <p>Breakfast: Scrambled eggs with spinach</p>
            <p>Lunch: Grilled chicken with veggies</p>
            <p>Dinner: Baked salmon with quinoa</p>
            <img src="meal1.jpg" alt="Meal 1" />
            <h4>Day 2</h4>
            <p>Breakfast: Greek yogurt with berries</p>
            <p>Lunch: Tuna salad with olive oil dressing</p>
            <p>Dinner: Chicken stir fry with brown rice</p>
            <img src="meal2.jpg" alt="Meal 2" />
        `;
    } else if (healthCondition === 'hypertension') {
        return `
            <h4>Day 1</h4>
            <p>Breakfast: Whole grain toast with avocado</p>
            <p>Lunch: Grilled fish with steamed broccoli</p>
            <p>Dinner: Lentil soup with a side of salad</p>
            <img src="meal1.jpg" alt="Meal 1" />
            <h4>Day 2</h4>
            <p>Breakfast: Oatmeal with banana slices</p>
            <p>Lunch: Chicken breast with spinach</p>
            <p>Dinner: Baked sweet potato with green beans</p>
            <img src="meal2.jpg" alt="Meal 2" />
        `;
    }
    // Add more conditions if needed
    return '';  // Default if no match
}

function generateHealthTips(healthCondition) {
    if (healthCondition === 'diabetes') {
        return [
            "Avoid sugary drinks and snacks.",
            "Monitor blood sugar levels regularly.",
            "Include more fiber in your meals.",
            "Eat small, frequent meals throughout the day."
        ];
    } else if (healthCondition === 'hypertension') {
        return [
            "Reduce sodium intake in your diet.",
            "Engage in regular physical activity.",
            "Limit alcohol consumption.",
            "Eat potassium-rich foods like bananas."
        ];
    }
    return [];  // Default if no tips for a condition
}

function generateExercises(healthCondition) {
    if (healthCondition === 'diabetes') {
        return [
            "30-minute walk every day.",
            "Strength training exercises twice a week.",
            "Yoga for stress reduction."
        ];
    } else if (healthCondition === 'hypertension') {
        return [
            "Brisk walking for at least 30 minutes daily.",
            "Cycling for cardiovascular health.",
            "Strength training with light weights."
        ];
    }
    return [];  // Default if no exercises for a condition
}
