// write interface named Student, create two students, and create an array containg student then render using vanilla js

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 26,
    location: 'San Francisco',
};

const student2: Student = {
    firstName: 'Mike',
    lastName: 'Mourune',
    age: 28,
    location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');

    studentsList.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        const locationCell = row.insertCell();

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    document.body.appendChild(table);
});

