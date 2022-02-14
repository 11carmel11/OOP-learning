class Person {
  constructor(FName, LName, salary, age) {
    this.FName = FName;
    this.LName = LName;
    this.salary = salary;
    this.age = age;
    this.#id;
  }
  #id = Date.now();
  get fullName() {
    return this.FName + " " + this.LName;
  }
  set salaryChanged(sal) {
    this.salary = parseFloat(sal.split(",").join(""));
  }
}

class Player extends Person {
  constructor(
    FName,
    LName,
    salary,
    age,
    strongLeg,
    position,
    celebrationSentence
  ) {
    super(FName, LName, salary, age);
    this.strongLeg = strongLeg;
    this.position = position;
    this.celebrationSentence = celebrationSentence;
  }
  goalCelebration() {
    console.log(this.celebrationSentence);
    this.salary *= 1.025;
  }
  set wayOfCelebration(str) {
    this.celebrationSentence = str;
  }
  get gameInfo() {
    return `${this.fullName} is playing at position ${this.position}, kicks with his ${this.strongLeg} leg, and shouting "${this.celebrationSentence}!"`;
  }
}

class GoalKeeper extends Person {
  constructor(
    FName,
    LName,
    salary,
    age,
    isLeftHanded,
    lastGoalConceded = "never"
  ) {
    super(FName, LName, salary, age);
    this.isLeftHanded = isLeftHanded;
    this.lastGoalConceded = lastGoalConceded;
  }
  concededAGoal() {
    this.salary *= 0.975;
    this.lastGoalConceded = Date();
  }
  get strongHand() {
    if (this.isLeftHanded) return "Left";
    return "Right";
  }

  set lastConcededGoal(date) {
    this.lastGoalConceded = date;
  }
}
