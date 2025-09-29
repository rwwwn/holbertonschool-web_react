// Teacher interface with index signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Directors extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// printTeacher + interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;
console.log(printTeacher('John', 'Doe'));

// StudentClass with constructor & class interfaces
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}
  workOnHomework(): string { return 'Currently working'; }
  displayName(): string { return this.firstName; }
}
const s = new StudentClass('Rawan', 'A'); console.log(s.displayName(), s.workOnHomework());
