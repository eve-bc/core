import {BroadcastType} from "./broadcast-type.enum";

export interface Broadcast {
    
    /** Service sending a message */
    service: string;
    
    /** auto-generated-uuid for each session of a service, will be generated on init */
    session: string;
    
    /** What Kind Of Broadcast will be sent */
    type: BroadcastType;

    /** a normal, human readable text */
    message: string;
    
    /** Few Metadata which can contain any further information */
    metadata?: { [key: string]: unknown };
    
    /** can be used to filter events later on */
    tags?: string[];
    
    /** ISO Time String */
    timestamp: string;
    
    /** Predict who will receive an information */
    recipient?: {
        /** informal name, should be the given name of said resource */
        name: string;
        /** Something like "AWS.SQS" or "RabbitMQ" */
        type: string;
    }
}