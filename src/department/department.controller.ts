import { Department } from '@/department/entities/department.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { DepartmentService } from '@/department/department.service';
import { CreateDepartmentDto } from '@/department/dto/create-department.dto';
import { UpdateDepartmentDto } from '@/department/dto/update-department.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @ApiOperation({ summary: 'Create new department' })
  @ApiResponse({ status: 201, type: Department })
  @ApiBody({ type: CreateDepartmentDto })
  @HttpCode(201)
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @ApiOperation({ summary: 'Get list of departments' })
  @ApiResponse({ status: 200, type: [Department] })
  @HttpCode(200)
  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @ApiOperation({ summary: 'Get department by id' })
  @ApiResponse({ status: 200, type: Department })
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.departmentService.findOne(id);
  }

  @ApiOperation({ summary: 'Update department by id' })
  @ApiResponse({ status: 200, type: Department })
  @ApiBody({ type: UpdateDepartmentDto })
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @ApiOperation({ summary: 'Remove department' })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.departmentService.remove(+id);
  }
}
