import {ServiceBroadcast} from "../modules/service-broadcast/service-broadcast.class";
import {ConsolePlugin} from "../plugins/console/console-plugin.class";
import {BroadcastType} from "../types/broadcast-type.enum";
import {InMemoryStorePlugin} from "../plugins/in-memory-store/in-memory-store-plugin.class";

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

test('simulate a few with in memory output', async () => {
	const bc = new ServiceBroadcast('demo-service');
	const mem = new InMemoryStorePlugin();
	bc.usePlugin(mem);

	await bc.announce({
		type: BroadcastType.ATTEMPT,
		message: 'fetch a user from a database',
		recipient: { type: 'Database', name: 'default-sql' },
		metadata: { query: 'SELECT 1 = 1' }
	});

	await bc.announce({
		type: BroadcastType.SUCCESS,
		message: 'fetch a user from a database',
		recipient: { type: 'Database', name: 'default-sql' },
		metadata: { query: 'SELECT 1 = 1' }
	});
	
	expect(mem.db.length).toBe(2);
});
