"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexcontrollers = void 0;
class IndexController {
    index(req, res) {
        res.json('API Is /api/games');
    }
}
exports.indexcontrollers = new IndexController();
