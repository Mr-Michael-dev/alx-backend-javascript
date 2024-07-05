// Create a file Subject.ts and write a Subject class in the same namespace named Subjects

namespace Subjects {
    export class Subject {
        teacher: Teacher;

        set setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}