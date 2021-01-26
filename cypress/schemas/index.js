import { bind, combineSchemas } from '@cypress/schema-tools'
import { ConsumerSchema } from './consumer-schema';

export const schemas = combineSchemas(
    ConsumerSchema
);

export const api = bind({ schemas });