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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const typeorm_1 = require("typeorm");
const projects_entity_1 = require("../../projects/entities/projects.entity");
let Services = class Services {
    id;
    serviceName;
    serviceImage;
    serviceDescription;
    serviceDetails;
    serviceProjects;
};
exports.Services = Services;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Services.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Services.prototype, "serviceName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Services.prototype, "serviceImage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Services.prototype, "serviceDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Services.prototype, "serviceDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => projects_entity_1.Projects),
    (0, typeorm_1.JoinTable)({
        name: 'service_projects',
        joinColumn: { name: 'service_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'project_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Services.prototype, "serviceProjects", void 0);
exports.Services = Services = __decorate([
    (0, typeorm_1.Entity)()
], Services);
//# sourceMappingURL=services.entity.js.map