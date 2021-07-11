import { Controller, Get, Put, Param } from "@nestjs/common";
import { FindStudentsResponseDto, StudentResponseDto } from "src/student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {


    @Get()
    getStudents(
        @Param('teacherId') teacherId:string
    ) : FindStudentsResponseDto[] {
        return `Getting all teachers related to teacher with ID ${teacherId}`
    }

    @Put('/:studentId') 
    updateStudentTeacher(
        @Param('teacherId') teacherId:string,
        @Param('studentId') studentId:string
    ) : StudentResponseDto {
        return `Update student with Id of ${studentId} To teacher with Id of ${teacherId}`
    }
    


} 
