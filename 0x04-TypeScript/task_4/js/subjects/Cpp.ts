// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    // Create a class Cpp extending from Subject
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp"
        }

        getAvailableTeacher(): string {
            if (this.teacher &&
                this.teacher.experienceTeachingC !== undefined &&
                this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            return "No available teacher"
        }
    }
}
