import { GoodbyeResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodbyeController implements IGoodbyeController {

    public async getMessage(name?: string): Promise<GoodbyeResponse> {
        
        LogSuccess('[/api/Goodbye] Get request');
        
        return {
            message: `Goodbye ${name}`,
            today: 'La hora es',
        }
    }
}