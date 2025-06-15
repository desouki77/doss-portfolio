import { Repository } from 'typeorm';
import { Contacts } from './enities/contacts.entity';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
export declare class ContactsService {
    private contactsRepository;
    constructor(contactsRepository: Repository<Contacts>);
    findAll(): Promise<Contacts[]>;
    findOne(id: number): Promise<Contacts>;
    create(createContactDto: CreateContactDto): Promise<Contacts>;
    update(id: number, updateContactDto: UpdateContactDto): Promise<Contacts>;
    replace(id: number, createContactDto: CreateContactDto): Promise<Contacts>;
    remove(id: number): Promise<void>;
}
