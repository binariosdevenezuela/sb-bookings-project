import { Repository } from 'typeorm';
import { SessionEntity } from './entities/session.entity';
export declare class SessionService {
    private sessionRepository;
    constructor(sessionRepository: Repository<SessionEntity>);
    findAll(): Promise<SessionEntity[]>;
    save(session: SessionEntity): Promise<SessionEntity>;
    delete(sessionId: string): Promise<void>;
}
