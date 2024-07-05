// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface

namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
    }

    // Create a class Cpp extending from Subject
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp"
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            return "No available teacher"
        }
    }
}