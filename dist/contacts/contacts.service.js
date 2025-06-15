"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contacts_entity_1 = require("./enities/contacts.entity");
let ContactsService = class ContactsService {
    contactsRepository;
    constructor(contactsRepository) {
        this.contactsRepository = contactsRepository;
    }
    async findAll() {
        return this.contactsRepository.find();
    }
    async findOne(id) {
        const contact = await this.contactsRepository.findOne({
            where: { id },
        });
        if (!contact) {
            throw new common_1.NotFoundException(`Contact with ID ${id} not found`);
        }
        return contact;
    }
    async create(createContactDto) {
        const newContact = this.contactsRepository.create({
            contactTitle: createContactDto.contactTitle,
            contactType: createContactDto.contactType,
            contactValue: createContactDto.contactValue,
        });
        return this.contactsRepository.save(newContact);
    }
    async update(id, updateContactDto) {
        const contact = await this.findOne(id);
        if (updateContactDto.contactTitle) {
            contact.contactTitle = updateContactDto.contactTitle;
        }
        if (updateContactDto.contactType) {
            contact.contactType = updateContactDto.contactType;
        }
        if (updateContactDto.contactValue) {
            contact.contactValue = updateContactDto.contactValue;
        }
        return this.contactsRepository.save(contact);
    }
    async replace(id, createContactDto) {
        await this.findOne(id);
        const newContact = this.contactsRepository.create({
            id,
            contactTitle: createContactDto.contactTitle,
            contactType: createContactDto.contactType,
            contactValue: createContactDto.contactValue,
        });
        return this.contactsRepository.save(newContact);
    }
    async remove(id) {
        const contact = await this.findOne(id);
        await this.contactsRepository.remove(contact);
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contacts_entity_1.Contacts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map