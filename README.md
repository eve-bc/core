# Readme

## Introduction
eve-bc is a tool to get more data out of your microservices.
It serves as a starting point to log messages anywhere.

### TL;DR
* Create an instance and connect plugins
* Fire broadcasts as desired
* Stop all instaces if closing the application

### Installation
```shell
$ npm i @eve-bc/core
```

## How to use
```javascript
const bc = new ServiceBroadcast('demo-service');
bc.usePlugin(new ConsolePlugin());
await bc.init();

await bc.announce({
    type: BroadcastType.ATTEMPT,
    message: 'fetch a user from a database',
    recipient: { type: 'Database', name: 'default-sql' },
    metadata: { query: 'SELECT 1 = 1' }
});

await bc.stop();
```

### Plugins
eve-bc works using a plugin system.
After a broadcast is created, distribution of said broadcast is up to the developer.
There are Two predefined Plugins:

#### Console
Leads any event directly into the console to log it.

#### In-memory-DB
stores any event into an array which is stored in memory.
THis is mostly for demonstration purposes.

#### Writing your own
You can write your own plugins using the `BroadcastPlugin` class:
```typescript
class MyPlugin extends BroadcastPlugin {
    public async init(): Promise<void> {
        // initialisation logic
    }

    public announce(broadcast: Broadcast): Promise<void> {
        // handle how a broadcast is being sent. 
    }
    
    public stop(): Promise<void> {
        // handle cleanup logic
    }
}
```
