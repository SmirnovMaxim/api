import { Public } from '@/decorators/public.decorator';
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
} from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Client } from '@/client/client';
import { ClientService } from '@/client/client.service';
import { CreateClientDto } from '@/client/dto/createClientDto';
import { UpdateClientDto } from '@/client/dto/updateClientDto';

@ApiTags('Client')
@Public()
@ApiUnauthorizedResponse({ type: UnauthorizedException })
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

  @ApiOperation({ summary: 'Update client by id' })
  @ApiBody({ type: UpdateClientDto })
  @ApiResponse({ status: 200, type: Client })
  @ApiNotFoundResponse({ type: NotFoundException })
  @HttpCode(200)
  @Patch(':id')
  update(@Body() dto: UpdateClientDto, @Param('id') id: number) {
    return this.clientService.update(id, dto);
  }

  @ApiOperation({ summary: 'Get client by id' })
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
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientService.delete(id);
  }
}
