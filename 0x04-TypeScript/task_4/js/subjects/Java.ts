// Using declaration merging, add a new optional attribute experienceTeachingJava (number) to the Teacher interface


namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    // Create a class Java extending from Subject
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java"
        }

        getAvailableTeacher(): string {
            if (this.teacher &&
                this.teacher.experienceTeachingJava !== undefined &&
                this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            return "No available teacher"
        }
    }
}
