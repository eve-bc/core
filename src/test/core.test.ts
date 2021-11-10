import {ServiceBroadcast} from "../modules/service-broadcast/service-broadcast.class";
import {ConsolePlugin} from "../plugins/console/console-plugin.class";
import {BroadcastType} from "../types/broadcast-type.enum";

test('simulate a few with console output', async () => {
	const bc = new ServiceBroadcast('demo-service');
	bc.usePlugin(new ConsolePlugin());

	await bc.announce({
		type: BroadcastType.ATTEMPT,
		message: 'fetch a user from a database',
		recipient: { type: 'Database', name: 'default-sql' },
		metadata: { query: 'SELECT 1 = 1' }
	});
});