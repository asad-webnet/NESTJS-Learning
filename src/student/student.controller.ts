import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateStudentDto, UpdateStudentDto, FindStudentsResponseDto, StudentResponseDto } from "./dto/student.dto";

@Controller('students')
export class StudentController {

    @Get()
    getStudents(): FindStudentsResponseDto {
        return "All students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ): FindStudentsResponseDto {
        console.log(studentId);
        return `Get Students with id of ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto {
        return `Create student with the following data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return `Update student with id of ${studentId} using data of ${JSON.stringify(body)}`
    }

}