import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ) {
        console.log(studentId);
        return `Get Students with id of ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body
    ) {
        return `Create student with the following data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body 
    ) {
        return `Update student with id of ${studentId} using data of ${JSON.stringify(body)}`
    }

}