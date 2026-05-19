"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "petcare",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../database/migrations/*{.ts,.js}"],
    synchronize: process.env.NODE_ENV !== "production",
    logging: process.env.NODE_ENV === "development",
    ssl: process.env.DB_SSL === "true",
};
//# sourceMappingURL=database.config.js.map