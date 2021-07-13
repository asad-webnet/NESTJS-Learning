import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { v4 as uuid } from 'uuid'
import { FindStudentsResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {

    private students = students

    getStudents(): FindStudentsResponseDto[] {
        return this.students
    }

    getStudentById(studentId: string): FindStudentsResponseDto {
        return this.students.find(student => {
            return student.id === studentId
        })
    }

    createStudent(payLoad: CreateStudentDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            ...payLoad
        }
        this.students.push(newStudent)

        return newStudent
    }

    updateStudent(payLoad: UpdateStudentDto, studentId: string): StudentResponseDto {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...payLoad
                }
                return updatedStudent
            } else return student
        })

        this.students = updatedStudentList;

        return updatedStudent
    }

    getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {

        const students = this.students.filter(student => {

            return student.teacher === teacherId
        })

        return students
    }

    updateStudentTeacher(teacherId: string, studentId: string) {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                }
                return updatedStudent
            } else return student
        })

        this.students = updatedStudentList;

        return updatedStudent

    }

}
