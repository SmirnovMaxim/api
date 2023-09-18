import { Lesson } from '@/lesson/entities/lesson.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { LessonService } from '@/lesson/lesson.service';
import { CreateLessonDto } from '@/lesson/dto/create-lesson.dto';
import { UpdateLessonDto } from '@/lesson/dto/update-lesson.dto';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Lesson')
@ApiUnauthorizedResponse({ type: UnauthorizedException })
@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @ApiOperation({ summary: 'Create new lesson' })
  @ApiResponse({ status: 201, type: Lesson })
  @ApiBody({ type: CreateLessonDto })
  @HttpCode(201)
  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  @ApiOperation({ summary: 'Get list of lesson' })
  @ApiResponse({ status: 200, type: [Lesson] })
  @HttpCode(200)
  @Get()
  getAll() {
    return this.lessonService.findAll();
  }

  @ApiOperation({ summary: 'Get lesson by id' })
  @ApiResponse({ status: 200, type: Lesson })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.lessonService.findOne(id);
  }

  @ApiOperation({ summary: 'Update lesson by id' })
  @ApiBody({ type: UpdateLessonDto })
  @ApiResponse({ status: 200, type: Lesson })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonService.update(id, updateLessonDto);
  }

  @ApiOperation({ summary: 'Remove lesson' })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lessonService.remove(id);
  }
}
