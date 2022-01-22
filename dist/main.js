/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/middleware/index.ts":
/*!*********************************!*\
  !*** ./src/middleware/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.customMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
var customMiddleware = function (req, res, next) {
    var access_token = req.headers.access_token;
    try {
        jsonwebtoken_1.default.verify(access_token, process.env.AUTH0_SECRET_KEY);
        next();
    }
    catch (err) {
        console.log(err);
        res.send({
            statusCode: 401,
            message: "Unauthorized",
        });
        return;
    }
};
exports.customMiddleware = customMiddleware;


/***/ }),

/***/ "./src/routes/auth/constant.ts":
/*!*************************************!*\
  !*** ./src/routes/auth/constant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authConfig = exports.authProvider = void 0;
exports.authProvider = {
    domain: process.env.AUTH0_DOMIAN,
    secret: process.env.AUTH0_CLIENT_SECRET,
};
exports.authConfig = {
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: process.env.AUTH0_AUDIENCE,
    grant_type: "client_credentials"
};


/***/ }),

/***/ "./src/routes/auth/service.ts":
/*!************************************!*\
  !*** ./src/routes/auth/service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_1 = __webpack_require__(/*! ./type */ "./src/routes/auth/type.ts");
var common_type_1 = __webpack_require__(/*! ../common.type */ "./src/routes/common.type.ts");
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var constant_1 = __webpack_require__(/*! ./constant */ "./src/routes/auth/constant.ts");
function default_1(fastify, opts, next) {
    var _this = this;
    fastify.post("/", {
        schema: {
            body: type_1.UserAuthInterface,
            response: { 200: type_1.SuccessUserAuthInterface } || { 500: common_type_1.CommonReturnInterface },
        }
    }, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, email, password, data, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, axios_1.default.post(process.env.Auth0_REQUEST_URL, constant_1.authConfig)];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    res.code(200).send({
                        statusCode: 200,
                        accessToken: data.access_token,
                    });
                    return [2 /*return*/];
                case 2:
                    err_1 = _b.sent();
                    console.log("DEBUG: ERROR ===== ", err_1);
                    res.code(500).send({
                        statusCode: 500,
                        message: "Internal server error"
                    });
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    next();
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/routes/auth/type.ts":
/*!*********************************!*\
  !*** ./src/routes/auth/type.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuccessUserAuthInterface = exports.UserAuthInterface = void 0;
var typebox_1 = __webpack_require__(/*! @sinclair/typebox */ "@sinclair/typebox");
exports.UserAuthInterface = {
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
};
exports.SuccessUserAuthInterface = {
    statusCode: typebox_1.Type.Integer(),
    accessToken: typebox_1.Type.String(),
};


/***/ }),

/***/ "./src/routes/common.type.ts":
/*!***********************************!*\
  !*** ./src/routes/common.type.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonReturnInterface = void 0;
var typebox_1 = __webpack_require__(/*! @sinclair/typebox */ "@sinclair/typebox");
exports.CommonReturnInterface = {
    statusCode: typebox_1.Type.Integer(),
    message: typebox_1.Type.String(),
};


/***/ }),

/***/ "./src/routes/demo/service.ts":
/*!************************************!*\
  !*** ./src/routes/demo/service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var middleware_1 = __webpack_require__(/*! @/middleware */ "./src/middleware/index.ts");
function default_1(fastify, opts, next) {
    var _this = this;
    fastify.get('/', {
        preHandler: [middleware_1.customMiddleware]
    }, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.code(200).send({
                    statusCode: 200,
                    message: 'Success'
                });
                return [2 /*return*/];
            }
            catch (err) {
                res.code(500).send({
                    statusCode: 500,
                    message: 'Internal server error'
                });
                return [2 /*return*/];
            }
            return [2 /*return*/];
        });
    }); });
    next();
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/routes/route.ts":
/*!*****************************!*\
  !*** ./src/routes/route.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var service_1 = __importDefault(__webpack_require__(/*! ./auth/service */ "./src/routes/auth/service.ts"));
var service_2 = __importDefault(__webpack_require__(/*! ./demo/service */ "./src/routes/demo/service.ts"));
function default_1(fastify, opts, next) {
    fastify.register(service_1.default, { prefix: '/auth' });
    fastify.register(service_2.default, { prefix: '/demo' });
    next();
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var fastify_1 = __importDefault(__webpack_require__(/*! fastify */ "fastify"));
var fastify_cors_1 = __importDefault(__webpack_require__(/*! fastify-cors */ "fastify-cors"));
var pino_1 = __webpack_require__(/*! pino */ "pino");
var constant_1 = __webpack_require__(/*! ./routes/auth/constant */ "./src/routes/auth/constant.ts");
var route_1 = __importDefault(__webpack_require__(/*! ./routes/route */ "./src/routes/route.ts"));
var server = (0, fastify_1.default)({
    logger: (0, pino_1.pino)({
        level: 'info',
    })
});
server.register(fastify_cors_1.default, {
    origin: [/localhost/, /.*.ngrok.io/]
});
server.register(__webpack_require__(/*! fastify-auth0-verify */ "fastify-auth0-verify"), constant_1.authProvider);
server.register(route_1.default, { prefix: 'apis/v1/' });
server.listen(Number(process.env.PORT), '0.0.0.0', function (err, address) {
    if (err) {
        console.log("DEBUG: error message ==", err);
        process.exit(1);
    }
    console.log("DEBUG: server listening on port == ", address);
});


/***/ }),

/***/ "@sinclair/typebox":
/*!************************************!*\
  !*** external "@sinclair/typebox" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sinclair/typebox");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),

/***/ "fastify-auth0-verify":
/*!***************************************!*\
  !*** external "fastify-auth0-verify" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("fastify-auth0-verify");

/***/ }),

/***/ "fastify-cors":
/*!*******************************!*\
  !*** external "fastify-cors" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("fastify-cors");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("pino");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS8uL3NyYy9taWRkbGV3YXJlL2luZGV4LnRzIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS8uL3NyYy9yb3V0ZXMvYXV0aC9jb25zdGFudC50cyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2UvLi9zcmMvcm91dGVzL2F1dGgvc2VydmljZS50cyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2UvLi9zcmMvcm91dGVzL2F1dGgvdHlwZS50cyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2UvLi9zcmMvcm91dGVzL2NvbW1vbi50eXBlLnRzIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS8uL3NyYy9yb3V0ZXMvZGVtby9zZXJ2aWNlLnRzIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS8uL3NyYy9yb3V0ZXMvcm91dGUudHMiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAc2luY2xhaXIvdHlwZWJveFwiIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS9leHRlcm5hbCBjb21tb25qcyBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlL2V4dGVybmFsIGNvbW1vbmpzIFwiZmFzdGlmeVwiIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS9leHRlcm5hbCBjb21tb25qcyBcImZhc3RpZnktYXV0aDAtdmVyaWZ5XCIiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlL2V4dGVybmFsIGNvbW1vbmpzIFwiZmFzdGlmeS1jb3JzXCIiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlL2V4dGVybmFsIGNvbW1vbmpzIFwicGlub1wiIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBjb25zdCBjdXN0b21NaWRkbGV3YXJlID0gKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IHJlcS5oZWFkZXJzO1xuICAgIHRyeXtcbiAgICAgICAgand0LnZlcmlmeShhY2Nlc3NfdG9rZW4sIHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVF9LRVkpXG4gICAgICAgIG5leHQoKVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgIH1cbn0iLCJ0eXBlIEF1dGhQcm92aWRlclR5cGUgPSB7XG4gICAgZG9tYWluOiBzdHJpbmcsXG4gICAgc2VjcmV0OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXI6IEF1dGhQcm92aWRlclR5cGUgPSB7XG4gICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01JQU4hLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCEsXG59XG5cbnR5cGUgQXV0aENvbmZpZ1R5cGUgPSB7XG4gICAgY2xpZW50X2lkOiBzdHJpbmcsXG4gICAgY2xpZW50X3NlY3JldDogc3RyaW5nLFxuICAgIGF1ZGllbmNlOiBzdHJpbmcsXG4gICAgZ3JhbnRfdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgYXV0aENvbmZpZzogQXV0aENvbmZpZ1R5cGUgPSB7XG4gICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQhLFxuICAgIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQhLFxuICAgIGF1ZGllbmNlOiBwcm9jZXNzLmVudi5BVVRIMF9BVURJRU5DRSEsXG4gICAgZ3JhbnRfdHlwZTogXCJjbGllbnRfY3JlZGVudGlhbHNcIlxufSIsImltcG9ydCB7IEZhc3RpZnlJbnN0YW5jZSwgRmFzdGlmeVBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiZmFzdGlmeVwiO1xuaW1wb3J0IHsgU3VjY2Vzc1VzZXJBdXRoSW50ZXJmYWNlLCBVc2VyQXV0aEludGVyZmFjZSwgVXNlckF1dGhUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgQ29tbW9uUmV0dXJuVHlwZSwgQ29tbW9uUmV0dXJuSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2NvbW1vbi50eXBlXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUHJvbWlzZSwgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGF1dGhDb25maWcgfSBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmYXN0aWZ5OiBGYXN0aWZ5SW5zdGFuY2UsIG9wdHM6IEZhc3RpZnlQbHVnaW5PcHRpb25zLCBuZXh0OiBhbnksKXtcbiAgICBmYXN0aWZ5LnBvc3Q8e1xuICAgICAgICBCb2R5OiBVc2VyQXV0aFR5cGUsXG4gICAgICAgIFJlc3BvbnNlOiBVc2VyQXV0aFR5cGUgfCBDb21tb25SZXR1cm5UeXBlLFxuICAgIH0+KFxuICAgICAgICBcIi9cIixcbiAgICAgICAge1xuICAgICAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICAgICAgYm9keTogVXNlckF1dGhJbnRlcmZhY2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHsgMjAwOiBTdWNjZXNzVXNlckF1dGhJbnRlcmZhY2UgfSB8fCB7IDUwMDogQ29tbW9uUmV0dXJuSW50ZXJmYWNlIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgLyoqIEB0cy1pZ25vcmUgKi9cbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHkgXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGNsaWVudC5xdWVyeShgU0VMRUNUIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSAkMSBBTkQgcGFzc3dvcmQgPSAkMmAsIFtlbWFpbCwgcGFzc3dvcmRdKTtcbiAgICAgICAgICAgICAgICAvLyBpZighdXNlcikgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQXV0aDBfUkVRVUVTVF9VUkwhLCBhdXRoQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIHJlcy5jb2RlKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGRhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRFQlVHOiBFUlJPUiA9PT09PSBcIiwgZXJyKVxuICAgICAgICAgICAgICAgIHJlcy5jb2RlKDUwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApXG5cbiAgICBuZXh0KClcbn0iLCJpbXBvcnQgeyBTdGF0aWMsIFR5cGUgfSBmcm9tIFwiQHNpbmNsYWlyL3R5cGVib3hcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJBdXRoSW50ZXJmYWNlID0ge1xuICAgIGVtYWlsOiBUeXBlLlN0cmluZygpLFxuICAgIHBhc3N3b3JkOiBUeXBlLlN0cmluZygpLFxufVxuXG5leHBvcnQgdHlwZSBVc2VyQXV0aFR5cGUgPSBTdGF0aWM8dHlwZW9mIFVzZXJBdXRoSW50ZXJmYWNlPlxuXG5leHBvcnQgY29uc3QgU3VjY2Vzc1VzZXJBdXRoSW50ZXJmYWNlID0ge1xuICAgIHN0YXR1c0NvZGU6IFR5cGUuSW50ZWdlcigpLFxuICAgIGFjY2Vzc1Rva2VuOiBUeXBlLlN0cmluZygpLFxufVxuXG5leHBvcnQgdHlwZSBTdWNjZXNzVXNlckF1dGhUeXBlID0gU3RhdGljPHR5cGVvZiBTdWNjZXNzVXNlckF1dGhJbnRlcmZhY2U+IiwiaW1wb3J0IHsgU3RhdGljLCBUeXBlIH0gZnJvbSBcIkBzaW5jbGFpci90eXBlYm94XCI7XG5cbmV4cG9ydCBjb25zdCBDb21tb25SZXR1cm5JbnRlcmZhY2UgPSB7XG4gICAgc3RhdHVzQ29kZTogVHlwZS5JbnRlZ2VyKCksXG4gICAgbWVzc2FnZTogVHlwZS5TdHJpbmcoKSxcbn1cblxuZXhwb3J0IHR5cGUgQ29tbW9uUmV0dXJuVHlwZSA9IFN0YXRpYzx0eXBlb2YgQ29tbW9uUmV0dXJuSW50ZXJmYWNlPlxuIiwiaW1wb3J0IHsgY3VzdG9tTWlkZGxld2FyZSB9IGZyb20gXCJAL21pZGRsZXdhcmVcIjtcbmltcG9ydCB7IEZhc3RpZnlJbnN0YW5jZSwgRmFzdGlmeVBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiZmFzdGlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmYXN0aWZ5OiBGYXN0aWZ5SW5zdGFuY2UsIG9wdHM6IEZhc3RpZnlQbHVnaW5PcHRpb25zLCBuZXh0OiBhbnksKXtcbiAgICBmYXN0aWZ5LmdldChcbiAgICAgICAgJy8nLCBcbiAgICAgICAge1xuICAgICAgICAgICAgcHJlSGFuZGxlcjogWyBjdXN0b21NaWRkbGV3YXJlIF1cbiAgICAgICAgfSwgXG4gICAgICAgIGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgcmVzLmNvZGUoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHJlcy5jb2RlKDUwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCwgXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApXG5cbiAgICBuZXh0KClcbn0iLCJpbXBvcnQgeyBGYXN0aWZ5SW5zdGFuY2UsIEZhc3RpZnlQbHVnaW5PcHRpb25zIH0gZnJvbSBcImZhc3RpZnlcIjtcbmltcG9ydCBBdXRoIGZyb20gXCIuL2F1dGgvc2VydmljZVwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9kZW1vL3NlcnZpY2VcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmYXN0aWZ5OiBGYXN0aWZ5SW5zdGFuY2UsIG9wdHM6IEZhc3RpZnlQbHVnaW5PcHRpb25zLCBuZXh0OiBhbnkpe1xuICAgIGZhc3RpZnkucmVnaXN0ZXIoQXV0aCwge3ByZWZpeDogJy9hdXRoJ30pXG4gICAgZmFzdGlmeS5yZWdpc3RlcihEZW1vLCB7cHJlZml4OiAnL2RlbW8nfSlcbiAgICBuZXh0KCk7XG59IiwiaW1wb3J0IGZhc3RpZnksIHsgRmFzdGlmeUluc3RhbmNlLCBGYXN0aWZ5UGx1Z2luT3B0aW9ucyB9IGZyb20gXCJmYXN0aWZ5XCI7XG5pbXBvcnQgZmFzdGlmeUNvcnMgZnJvbSBcImZhc3RpZnktY29yc1wiO1xuaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXIsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IHBpbm8gfSBmcm9tIFwicGlub1wiXG5pbXBvcnQgeyBhdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi9yb3V0ZXMvYXV0aC9jb25zdGFudFwiO1xuaW1wb3J0IFJvdXRlIGZyb20gXCIuL3JvdXRlcy9yb3V0ZVwiXG5cbmNvbnN0IHNlcnZlcjogRmFzdGlmeUluc3RhbmNlPFNlcnZlciwgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZT4gPSBmYXN0aWZ5KHtcbiAgICBsb2dnZXI6IHBpbm8oe1xuICAgICAgICBsZXZlbDogJ2luZm8nLFxuICAgIH0pXG59KVxuXG5zZXJ2ZXIucmVnaXN0ZXIoZmFzdGlmeUNvcnMsIHtcbiAgICBvcmlnaW46IFsvbG9jYWxob3N0LywgLy4qLm5ncm9rLmlvL11cbn0pO1xuXG5zZXJ2ZXIucmVnaXN0ZXIoXG4gICAgcmVxdWlyZSgnZmFzdGlmeS1hdXRoMC12ZXJpZnknKSxcbiAgICBhdXRoUHJvdmlkZXIsXG4pXG5cbnNlcnZlci5yZWdpc3RlcihSb3V0ZSwge3ByZWZpeDogJ2FwaXMvdjEvJ30pXG5cbnNlcnZlci5saXN0ZW4oTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQpLCAnMC4wLjAuMCcsIChlcnIsIGFkZHJlc3MpID0+IHtcbiAgICBpZihlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRFQlVHOiBlcnJvciBtZXNzYWdlID09XCIsIGVycik7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkRFQlVHOiBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgPT0gXCIsIGFkZHJlc3MpXG59KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaW5jbGFpci90eXBlYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1hdXRoMC12ZXJpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1jb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwaW5vXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=