import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { ContactsService } from './contacts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('contacts')
@ApiTags('Contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  getContacts() {
    return this.contactsService.findAll();
  }
  @Get(':id')
  getContactById(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.findOne(id);
  }
  @Post()
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }
  @Patch(':id')
  updateContact(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(id, updateContactDto);
  }
  @Put(':id')
  updateAllContact(
    @Param('id', ParseIntPipe) id: number,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.contactsService.replace(id, createContactDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.remove(id);
  }
}
