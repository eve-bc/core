/** Used to create plugins */
import {Broadcast} from "../../types/broadcast.interface";

export abstract class BroadcastPlugin {
    
    public async init(): Promise<void> {}
    
    public async stop(): Promise<void> {};
    
    public abstract announce(broadcast: Broadcast): Promise<void>;
    
}