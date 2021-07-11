import { Controller, Get, Put } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {


    @Get('')
    getStudents() {
        return "Getting all students related to one teacher"
    }

    @Put('/:studentId') 
    updateStudentTeacher() {
        return "Update student Teacher"
    }
    


} 
