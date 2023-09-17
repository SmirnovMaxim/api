import { AuthGuard } from '@/auth/auth.guard';
import { Child } from '@/child/child';
import { ChildService } from '@/child/child.service';
import { CreateChildDto } from '@/child/dto/createChildDto';
import { UpdateChildDto } from '@/child/dto/updateChildDto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Child')
@ApiBearerAuth()
@ApiUnauthorizedResponse({ type: UnauthorizedException })
@UseGuards(AuthGuard)
@Controller('child')
export class ChildController {
  constructor(private readonly childrenService: ChildService) {}

  @ApiOperation({ summary: 'Create new child' })
  @ApiResponse({ status: 201, type: Child })
  @ApiBody({ type: CreateChildDto })
  @ApiBadRequestResponse()
  @HttpCode(201)
  @Post()
  create(@Body() childDto: CreateChildDto) {
    return this.childrenService.createChild(childDto);
  }

  @ApiOperation({ summary: 'Update child by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateChildDto })
  @ApiResponse({ status: 200, type: Child })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Patch(':id')
  update(@Body() dto: UpdateChildDto, @Param('id') id: number) {
    return this.childrenService.update(id, dto);
  }
  @ApiOperation({ summary: 'Get child by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: Child })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.childrenService.getOne(id);
  }

  @ApiOperation({ summary: 'Get list of children' })
  @ApiResponse({ status: 200, type: [Child] })
  @HttpCode(200)
  @Get()
  getAll() {
    return this.childrenService.getAllClients();
  }

  @ApiOperation({ summary: 'Remove child' })
  @ApiQuery({ name: 'id', type: Number })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.childrenService.delete(id);
  }
}
