import { Controller, Get, Put, Param } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers() {
        return "Getting all teachers"
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ) {
        return `Getting teacher by ID of ${teacherId}`
    }




} 
