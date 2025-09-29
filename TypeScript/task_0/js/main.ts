interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'Rawan', lastName: 'A.', age: 22, location: 'Riyadh' };
const student2: Student = { firstName: 'Sara', lastName: 'K.', age: 23, location: 'Jeddah' };

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((s: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const nameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');
  nameCell.textContent = s.firstName;
  locationCell.textContent = s.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
