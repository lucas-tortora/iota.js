"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveData = void 0;
var IIndexationPayload_1 = require("../models/IIndexationPayload");
var ITransactionPayload_1 = require("../models/ITransactionPayload");
var converter_1 = require("../utils/converter");
/**
 * Retrieve a data message.
 * @param client The client to send the transfer with.
 * @param messageId The message id of the data to get.
 * @returns The message index and data.
 */
function retrieveData(client, messageId) {
    return __awaiter(this, void 0, void 0, function () {
        var message, indexationPayload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.message(messageId)];
                case 1:
                    message = _a.sent();
                    if (message === null || message === void 0 ? void 0 : message.payload) {
                        indexationPayload = void 0;
                        if (message.payload.type === ITransactionPayload_1.TRANSACTION_PAYLOAD_TYPE) {
                            indexationPayload = message.payload.essence.payload;
                        }
                        else if (message.payload.type === IIndexationPayload_1.INDEXATION_PAYLOAD_TYPE) {
                            indexationPayload = message.payload;
                        }
                        if (indexationPayload) {
                            return [2 /*return*/, {
                                    index: converter_1.Converter.hexToBytes(indexationPayload.index),
                                    data: indexationPayload.data ? converter_1.Converter.hexToBytes(indexationPayload.data) : undefined
                                }];
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.retrieveData = retrieveData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmVEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hpZ2hMZXZlbC9yZXRyaWV2ZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsbUVBQTJGO0FBQzNGLHFFQUF5RTtBQUN6RSxnREFBK0M7QUFFL0M7Ozs7O0dBS0c7QUFDSCxTQUFzQixZQUFZLENBQUMsTUFBZSxFQUFFLFNBQWlCOzs7Ozt3QkFJakQscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQTs7b0JBQXpDLE9BQU8sR0FBRyxTQUErQjtvQkFFL0MsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsT0FBTyxFQUFFO3dCQUNkLGlCQUFpQixTQUFnQyxDQUFDO3dCQUV0RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLDhDQUF3QixFQUFFOzRCQUNuRCxpQkFBaUIsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ3ZEOzZCQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssNENBQXVCLEVBQUU7NEJBQ3pELGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ3ZDO3dCQUVELElBQUksaUJBQWlCLEVBQUU7NEJBQ25CLHNCQUFPO29DQUNILEtBQUssRUFBRSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7b0NBQ3BELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO2lDQUMxRixFQUFDO3lCQUNMO3FCQUNKOzs7OztDQUNKO0FBdEJELG9DQXNCQyJ9