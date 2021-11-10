import {BroadcastPlugin} from "../../modules/broadcast-plugin/broadcast-plugin.abstract-class";
import {Broadcast} from "../../types/broadcast.interface";

export class InMemoryStorePlugin extends BroadcastPlugin{
    
    public db: Broadcast[] = [];
    
    public async announce(broadcast: Broadcast): Promise<void> {
        this.db.push(broadcast);
    }
    
}
