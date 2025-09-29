/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// minimal usage to ensure compile:
const teacher: Subjects.Teacher = { firstName: 'Ada', lastName: 'Lovelace', experienceTeachingC: 1 };
const cpp = new Subjects.Cpp();
cpp.setTeacher = teacher;
console.log(cpp.getRequirements(), cpp.getAvailableTeacher());
