import { Controller, Get, Put, Param } from "@nestjs/common";
import { FindTeacherResponseDto } from "./dto/teacher.dto";

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers() : FindTeacherResponseDto {
        return "Getting all teachers"
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ) : FindTeacherResponseDto {
        return `Getting teacher by ID of ${teacherId}`
    }




} 
