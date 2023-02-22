"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GamesControllers_1 = __importDefault(require("../controllers/GamesControllers"));
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', GamesControllers_1.default.List);
        this.router.post('/', GamesControllers_1.default.Create);
        this.router.delete('/:id', GamesControllers_1.default.Delete);
        this.router.put('/:id', GamesControllers_1.default.Update);
        this.router.get('/:id', GamesControllers_1.default.getOne);
    }
}
const gamesroutes = new GamesRoutes();
exports.default = gamesroutes.router;
