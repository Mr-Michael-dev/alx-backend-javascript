// create Teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// create Director interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// create a Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

// create a Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

// Create a function createEmployee
function createEmployee(salary: any): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Write a function isDirector as a type predicate
function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks!== undefined;
}

// write function executeWork
function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    }
    else {
        employee.workTeacherTasks();
    }
}

// write a string literal type named subjects
type Subjects = 'Math' | 'History'

// write a function teachClass
function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    else {
        console.log('Invalid subject');
    }
}