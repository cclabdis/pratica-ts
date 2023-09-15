"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var people_routes_1 = __importDefault(require("./people.routes"));
var router = (0, express_1.Router)();
router.use(people_routes_1.default);
exports.default = router;
