"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var people_controller_1 = require("../controllers/people.controller");
var express_1 = require("express");
var peopleRouter = (0, express_1.Router)();
peopleRouter.get('/person', people_controller_1.getPeople);
exports.default = peopleRouter;
