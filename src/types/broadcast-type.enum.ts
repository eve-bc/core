export enum BroadcastType {
    DEBUG = 'Debug', // a service thinks the developer should know that
    INFO = 'Info', // a service thinks anyone should know that
    ATTEMPT = 'Attempt', // a service will now try to do something
    SUCCESS = 'Success', // a successful attempt
    FAIL = 'Fail', // a failed attempt
}
