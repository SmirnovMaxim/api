import { Teacher } from '@/teacher/entities/teacher.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
  UnauthorizedException,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { TeacherService } from '@/teacher/teacher.service';
import { CreateTeacherDto } from '@/teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '@/teacher/dto/update-teacher.dto';

@ApiTags('Teacher')
@ApiUnauthorizedResponse({ type: UnauthorizedException })
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @ApiOperation({ summary: 'Create new teacher' })
  @ApiResponse({ status: 201, type: Teacher })
  @ApiBody({ type: CreateTeacherDto })
  @HttpCode(201)
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @ApiOperation({ summary: 'Get list of teachers' })
  @ApiResponse({ status: 200, type: [Teacher] })
  @HttpCode(200)
  @Get()
  getAll() {
    return this.teacherService.findAll();
  }

  @ApiOperation({ summary: 'Get teacher by id' })
  @ApiResponse({ status: 200, type: Teacher })
  @HttpCode(200)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.teacherService.findOne(id);
  }

  @ApiOperation({ summary: 'Update teacher by id' })
  @ApiBody({ type: UpdateTeacherDto })
  @ApiResponse({ status: 200, type: Teacher })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @ApiOperation({ summary: 'Remove teacher' })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.teacherService.remove(id);
  }
}
