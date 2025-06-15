import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacts } from './enities/contacts.entity';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contacts)
    private contactsRepository: Repository<Contacts>,
  ) {}

  /**
   * Find all contacts
   * @returns Promise with array of all contacts
   */
  async findAll(): Promise<Contacts[]> {
    return this.contactsRepository.find();
  }

  /**
   * Find a specific contact by ID
   * @param id The ID of the contact to find
   * @returns Promise with the found contact
   */
  async findOne(id: number): Promise<Contacts> {
    const contact = await this.contactsRepository.findOne({
      where: { id },
    });

    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }

    return contact;
  }
  /**
   * Create a new contact
   * @param createContactDto DTO containing contact data
   * @returns Promise with the created contact
   */
  async create(createContactDto: CreateContactDto): Promise<Contacts> {
    // Create a new contact instance
    const newContact = this.contactsRepository.create({
      contactTitle: createContactDto.contactTitle,
      contactType: createContactDto.contactType,
      contactValue: createContactDto.contactValue,
    });

    // Save the contact to the database
    return this.contactsRepository.save(newContact);
  }
  /**
   * Update an existing contact
   * @param id The ID of the contact to update
   * @param updateContactDto DTO containing updated contact data
   * @returns Promise with the updated contact
   */
  async update(
    id: number,
    updateContactDto: UpdateContactDto,
  ): Promise<Contacts> {
    const contact = await this.findOne(id);

    // Update the contact properties
    if (updateContactDto.contactTitle) {
      contact.contactTitle = updateContactDto.contactTitle;
    }
    if (updateContactDto.contactType) {
      contact.contactType = updateContactDto.contactType;
    }
    if (updateContactDto.contactValue) {
      contact.contactValue = updateContactDto.contactValue;
    }
    // Save the updated contact to the database
    return this.contactsRepository.save(contact);
  }
  /**
   * Replace an existing contact with a new one
   * @param id The ID of the contact to replace
   * @param createContactDto DTO containing new contact data
   * @returns Promise with the replaced contact
   */
  async replace(
    id: number,
    createContactDto: CreateContactDto,
  ): Promise<Contacts> {
    // First, check if the contact exists
    await this.findOne(id);

    // Create a new contact instance
    const newContact = this.contactsRepository.create({
      id,
      contactTitle: createContactDto.contactTitle,
      contactType: createContactDto.contactType,
      contactValue: createContactDto.contactValue,
    });

    // Save the new contact to the database, replacing the old one
    return this.contactsRepository.save(newContact);
  }

  /**
   * Delete a contact by ID
   * @param id The ID of the contact to delete
   * @returns Promise that resolves when the contact is deleted
   */
  async remove(id: number): Promise<void> {
    const contact = await this.findOne(id);
    await this.contactsRepository.remove(contact);
  }
}
