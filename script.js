const form = document.getElementById('workoutForm');
const list = document.getElementById('workoutList');
const affirmationDiv = document.getElementById('affirmation');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const workout = {
        date: document.getElementById('dateInput').value,
        exercise: document.getElementById('exerciseInput').value,
        sets: document.getElementById('setsInput').value,
        reps: document.getElementById('repsInput').value,
        weight: document.getElementById('weightInput').value
    };

    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));

    renderWorkouts();
    showAffirmation();
    form.reset();
});

function renderWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    list.innerHTML = '';
    workouts.forEach((w, index) => {
        const li = document.createElement('li');
        li.textContent = `${w.date} - ${w.exercise}: ${w.sets}x${w.reps} @ ${w.weight}kg`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            workouts.splice(index, 1);
            localStorage.setItem('workouts', JSON.stringify(workouts));
            renderWorkouts();
        });
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

function showAffirmation() {
    const affirmations = [
        "You're doing an amazing job!",
        "Keep pushing forward!",
        "Every step counts!",
        "Your progress is inspiring!",
        "Believe in yourself!"
    ];
    affirmationDiv.textContent = affirmations[Math.floor(Math.random() * affirmations.length)];
}

renderWorkouts();
