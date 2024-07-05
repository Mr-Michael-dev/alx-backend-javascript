// Using declaration merging, add a new optional attribute experienceTeachingReact (number) to the Teacher interface

namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingReact?: number;
    }

    // Create a class React extending from Subject
    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React"
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            return "No available teacher"
        }
    }
}
