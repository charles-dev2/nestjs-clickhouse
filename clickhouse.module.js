"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClickHouseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHouseModule = exports.ClickHouseModuleOptions = void 0;
const common_1 = require("@nestjs/common");
const clickhouse_client_1 = require("@depyronick/clickhouse-client");
class ClickHouseModuleOptions extends clickhouse_client_1.ClickHouseClientOptions {
}
exports.ClickHouseModuleOptions = ClickHouseModuleOptions;
let ClickHouseModule = ClickHouseModule_1 = class ClickHouseModule {
    static register(options) {
        const clients = (options || []).map(item => {
            if (!item) {
                item = new ClickHouseModuleOptions();
            }
            else {
                item = Object.assign(new ClickHouseModuleOptions(), item);
            }
            return {
                provide: item.name,
                useValue: new clickhouse_client_1.ClickHouseClient(item)
            };
        });
        return {
            module: ClickHouseModule_1,
            providers: clients,
            exports: clients,
        };
    }
};
ClickHouseModule = ClickHouseModule_1 = __decorate([
    common_1.Module({})
], ClickHouseModule);
exports.ClickHouseModule = ClickHouseModule;
