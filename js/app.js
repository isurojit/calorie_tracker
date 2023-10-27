//Calorie tracker
class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalorie = 0;
    this._meals = [];
    this._workouts = [];
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalorie += meal.calories;
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalorie -= workout.calories;
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker();
const breakfast = new Meal("BreakFast", 400);
tracker.addMeal(breakfast);

const run = new Workout("Morining Run", 300);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalorie);
