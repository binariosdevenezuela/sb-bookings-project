"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const out_1 = require("connect-typeorm/out");
const session = require("express-session");
const app_module_1 = require("./app.module");
const typeorm_1 = require("@nestjs/typeorm");
const session_entity_1 = require("./auth/entities/session.entity");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get((0, typeorm_1.getDataSourceToken)());
    const sessionRepository = dataSource.getRepository(session_entity_1.SessionEntity);
    app.use(session({
        secret: '948u89sj9j',
        resave: false,
        saveUninitialized: false,
        store: new out_1.TypeormStore().connect(sessionRepository),
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
            sameSite: 'strict',
        },
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        transform: true
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map