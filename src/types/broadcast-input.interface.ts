import {BroadcastType} from "./broadcast-type.enum";

export interface BroadcastInput {

    /** What Kind Of Broadcast will be sent */
    type: BroadcastType;

    /** Few Metadata which can contain any further information */
    metadata?: { [key: string]: unknown };

    /** can be used to filter events later on */
    tags?: string[];

    /** Predict who will receive an information */
    recipient?: {
        /** informal name, should be the given name of said resource */
        name: string;
        /** Something like "AWS.SQS" or "RabbitMQ" */
        type: string;
    }
}