import type { IClient } from "../models/IClient";
/**
 * Retrieve a data message.
 * @param client The client or node endpoint to retrieve the data with.
 * @param messageId The message id of the data to get.
 * @returns The message tag and data.
 */
export declare function retrieveData(client: IClient | string, messageId: string): Promise<{
    tag?: Uint8Array;
    data?: Uint8Array;
} | undefined>;
