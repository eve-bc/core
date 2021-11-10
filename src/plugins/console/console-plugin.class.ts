import {BroadcastPlugin} from "../../modules/broadcast-plugin/broadcast-plugin.abstract-class";
import {Broadcast} from "../../types/broadcast.interface";

export class ConsolePlugin extends BroadcastPlugin {
    public async announce(broadcast: Broadcast): Promise<void> {
        console.log(broadcast);
    }
}
