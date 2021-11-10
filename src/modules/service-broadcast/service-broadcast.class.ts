import {Broadcast} from "../../types/broadcast.interface";
import {v4 as uuid} from 'uuid';
import {BroadcastInput} from "../../types/broadcast-input.interface";
import {BroadcastPlugin} from "../broadcast-plugin/broadcast-plugin.abstract-class";

export class ServiceBroadcast {
    
    private readonly sessionUuid = uuid();
    private plugins: BroadcastPlugin[] = [];
    
    public constructor(
        private readonly serviceName: string,
    ) {}
    
    public usePlugin(plugin: BroadcastPlugin): ServiceBroadcast {
        this.plugins.push(plugin);
        return this;
    }
    
    public async init(): Promise<void> {
        for (const plugin of this.plugins)
            await plugin.init();
    }
    
    public async announce(broadcastInput: BroadcastInput): Promise<void> {
        // compose broadcast
        const broadcast: Broadcast = {
            ...broadcastInput,
            service: this.serviceName,
            session: this.sessionUuid,
        }
        
        // deliver to plugins TODO
        for (const plugin of this.plugins)
            await plugin.announce(broadcast);
    }
    
}