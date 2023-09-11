import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse} from '@nestjs/swagger';
import {Client} from './client';
import {ClientService} from './client.service';
import {CreateClientDto} from './dto/createClientDto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @ApiOperation({ summary: 'Create new client' })
  @ApiResponse({ status: 201, type: Client })
  @ApiBody({ type: CreateClientDto })
  @HttpCode(201)
  @Post()
  create(@Body() clientDto: CreateClientDto) {
    return this.clientService.createClient(clientDto);
  }

  @ApiOperation({ summary: 'Get client by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: Client })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.clientService.getOne(id);
  }

  @ApiOperation({ summary: 'Get list of client' })
  @ApiResponse({ status: 200, type: [Client] })
  @HttpCode(200)
  @Get()
  getAll() {
    return this.clientService.getAllClients();
  }

  @ApiOperation({ summary: 'Remove client' })
  @ApiQuery({ name: 'id', type: Number })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientService.delete(id);
  }
}