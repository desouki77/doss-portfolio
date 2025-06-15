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
exports.Projects = void 0;
const typeorm_1 = require("typeorm");
const services_entity_1 = require("../../services/entities/services.entity");
let Projects = class Projects {
    id;
    projectName;
    projectthumbnail;
    projectDescription;
    projectURL;
    projectGithub;
    projectPreview;
    projectImages;
    services;
};
exports.Projects = Projects;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Projects.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "projectName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "projectthumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "projectDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "projectURL", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "projectGithub", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "projectPreview", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Projects.prototype, "projectImages", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => services_entity_1.Services, (services) => services.serviceProjects),
    __metadata("design:type", Array)
], Projects.prototype, "services", void 0);
exports.Projects = Projects = __decorate([
    (0, typeorm_1.Entity)()
], Projects);
//# sourceMappingURL=projects.entity.js.map