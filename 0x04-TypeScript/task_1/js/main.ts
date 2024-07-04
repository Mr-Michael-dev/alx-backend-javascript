// build Teacher interface

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

// write Director interface that inherits from Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// write interface for printTeacher function
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}
// write printTeacher function
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    const firstLetter: string = firstName.charAt(0)
    return `${firstLetter}. ${lastName}`;
}

// write a class named StudentClass
interface StudentClass {
    firstName: string;
    lastName: string;

    workOnHomework(): string;

    displayName(): string;
}

class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Curently working'
    }

    displayName(): string {
        return this.firstName;
    }
}