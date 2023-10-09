import { Schedule } from '@/schedule/entities/schedule.entity';
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
  ParseIntPipe,
} from '@nestjs/common';
import { ScheduleService } from '@/schedule/schedule.service';
import { CreateScheduleDto } from '@/schedule/dto/create-schedule.dto';
import { UpdateScheduleDto } from '@/schedule/dto/update-schedule.dto';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('schedule')
@ApiTags('Schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @ApiOperation({ summary: 'Create new schedule' })
  @ApiResponse({ status: 201, type: Schedule })
  @ApiBody({ type: CreateScheduleDto })
  @HttpCode(201)
  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @ApiOperation({ summary: 'Get list of schedules' })
  @ApiResponse({ status: 200, type: [Schedule] })
  @HttpCode(200)
  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @ApiOperation({ summary: 'Get schedule by id' })
  @ApiResponse({ status: 200, type: Schedule })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.scheduleService.findOne(id);
  }

  @ApiOperation({ summary: 'Update schedule by id' })
  @ApiBody({ type: UpdateScheduleDto })
  @ApiResponse({ status: 200, type: Schedule })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.scheduleService.update(id, updateScheduleDto);
  }
  @ApiOperation({ summary: 'Remove schedule' })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.scheduleService.remove(id);
  }
}
