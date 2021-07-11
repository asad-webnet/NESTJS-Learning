import { Controller, Get, Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers() {
        return "Getting all teachers"
    }

    @Get('/:teacherId')
    getTeacherById() {
        return "getting teachers by Id"
    }

    


} 
