import { DynamicModule } from '@nestjs/common';
import { ClickHouseClientOptions as ClickHouseNodeClientOptions } from '@depyronick/clickhouse-client';
export declare class ClickHouseModuleOptions extends ClickHouseNodeClientOptions {
}
export declare class ClickHouseModule {
    static register(options: ClickHouseModuleOptions[]): DynamicModule;
}
