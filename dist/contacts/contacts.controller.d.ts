import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    getContacts(): Promise<import("./enities/contacts.entity").Contacts[]>;
    getContactById(id: number): Promise<import("./enities/contacts.entity").Contacts>;
    createContact(createContactDto: CreateContactDto): Promise<import("./enities/contacts.entity").Contacts>;
    updateContact(id: number, updateContactDto: UpdateContactDto): Promise<import("./enities/contacts.entity").Contacts>;
    updateAllContact(id: number, createContactDto: CreateContactDto): Promise<import("./enities/contacts.entity").Contacts>;
    deleteContact(id: number): Promise<void>;
}
