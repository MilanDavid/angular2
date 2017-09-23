"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RecepieEditComponent = (function () {
    function RecepieEditComponent(route) {
        this.route = route;
        this.editMode = false;
    }
    RecepieEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            console.log(_this.editMode);
        });
    };
    return RecepieEditComponent;
}());
RecepieEditComponent = __decorate([
    core_1.Component({
        selector: 'app-recepie-edit',
        templateUrl: './recepie-edit.component.html',
        styleUrls: ['./recepie-edit.component.css']
    })
], RecepieEditComponent);
exports.RecepieEditComponent = RecepieEditComponent;
