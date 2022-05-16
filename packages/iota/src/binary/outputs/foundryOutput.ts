// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import type { ReadStream, WriteStream } from "@iota/util.js";
import bigInt from "big-integer";
import type { IMetadataFeature } from "../../models/features/IMetadataFeature";
import { FOUNDRY_OUTPUT_TYPE, IFoundryOutput } from "../../models/outputs/IFoundryOutput";
import { SMALL_TYPE_LENGTH, UINT32_SIZE, UINT64_SIZE } from "../commonDataTypes";
import {
    deserializeFeatures,
    MIN_FEATURES_LENGTH,
    serializeFeatures
} from "../features/features";
import {
    deserializeNativeTokens,
    MIN_NATIVE_TOKENS_LENGTH,
    serializeNativeTokens
} from "../nativeTokens";
import { deserializeTokenScheme, MIN_TOKEN_SCHEME_LENGTH, serializeTokenScheme } from "../tokenSchemes/tokenSchemes";
import { deserializeUnlockConditions, MIN_UNLOCK_CONDITIONS_LENGTH, serializeUnlockConditions } from "../unlockConditions/unlockConditions";

/**
 * The minimum length of a foundry output binary representation.
 */
export const MIN_FOUNDRY_OUTPUT_LENGTH: number =
    SMALL_TYPE_LENGTH + // Type
    UINT64_SIZE + // Amount
    MIN_NATIVE_TOKENS_LENGTH + // Native tokens
    UINT32_SIZE + // Serial Number
    MIN_TOKEN_SCHEME_LENGTH + // Token scheme length
    MIN_UNLOCK_CONDITIONS_LENGTH + // Unlock conditions
    MIN_FEATURES_LENGTH + // Features
    MIN_FEATURES_LENGTH; // Immutable features

/**
 * Deserialize the foundry output from binary.
 * @param readStream The stream to read the data from.
 * @returns The deserialized object.
 */
export function deserializeFoundryOutput(readStream: ReadStream): IFoundryOutput {
    if (!readStream.hasRemaining(MIN_FOUNDRY_OUTPUT_LENGTH)) {
        throw new Error(
            `Foundry Output data is ${readStream.length()} in length which is less than the minimimum size required of ${MIN_FOUNDRY_OUTPUT_LENGTH}`
        );
    }

    const type = readStream.readUInt8("foundryOutput.type");
    if (type !== FOUNDRY_OUTPUT_TYPE) {
        throw new Error(`Type mismatch in foundryOutput ${type}`);
    }

    const amount = readStream.readUInt64("foundryOutput.amount");
    const nativeTokens = deserializeNativeTokens(readStream);
    const serialNumber = readStream.readUInt32("foundryOutput.serialNumber");
    const tokenScheme = deserializeTokenScheme(readStream);
    const unlockConditions = deserializeUnlockConditions(readStream);
    const features = deserializeFeatures(readStream);
    const immutableFeatures = deserializeFeatures(readStream);

    return {
        type: FOUNDRY_OUTPUT_TYPE,
        amount: amount.toString(),
        nativeTokens,
        serialNumber,
        tokenScheme,
        unlockConditions,
        features: features as IMetadataFeature[],
        immutableFeatures
    };
}

/**
 * Serialize the foundry output to binary.
 * @param writeStream The stream to write the data to.
 * @param object The object to serialize.
 */
export function serializeFoundryOutput(writeStream: WriteStream, object: IFoundryOutput): void {
    writeStream.writeUInt8("foundryOutput.type", object.type);

    writeStream.writeUInt64("foundryOutput.amount", bigInt(object.amount));
    serializeNativeTokens(writeStream, object.nativeTokens);
    writeStream.writeUInt32("foundryOutput.serialNumber", object.serialNumber);
    serializeTokenScheme(writeStream, object.tokenScheme);
    serializeUnlockConditions(writeStream, object.unlockConditions);
    serializeFeatures(writeStream, object.features);
    serializeFeatures(writeStream, object.immutableFeatures);
}
