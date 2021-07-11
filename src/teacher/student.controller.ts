import { Controller, Get, Put, Param } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {


    @Get()
    getStudents(
        @Param('teacherId') teacherId:string
    ) {
        return `Getting all teachers related to teacher with ID ${teacherId}`
    }

    @Put('/:studentId') 
    updateStudentTeacher(
        @Param('teacherId') teacherId:string,
        @Param('studentId') studentId:string
    ) {
        return `Update student with Id of ${studentId} To teacher with Id of ${teacherId}`
    }
    


} 
