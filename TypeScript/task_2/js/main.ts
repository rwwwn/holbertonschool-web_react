interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome(): string { return 'Working from home'; }
  getCoffeeBreak(): string { return 'Getting a coffee break'; }
  workDirectorTasks(): string { return 'Getting to director tasks'; }
}
class Teacher implements TeacherInterface {
  workFromHome(): string { return 'Cannot work from home'; }
  getCoffeeBreak(): string { return 'Cannot have a break'; }
  workTeacherTasks(): string { return 'Getting to work'; }
}
type Salary = number | string;
function createEmployee(salary: Salary): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}
console.log(createEmployee(200) instanceof Teacher ? 'Teacher' : 'Director');
console.log(createEmployee(1000) instanceof Teacher ? 'Teacher' : 'Director');
console.log(createEmployee('$500') instanceof Teacher ? 'Teacher' : 'Director');

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : (employee as Teacher).workTeacherTasks();
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
