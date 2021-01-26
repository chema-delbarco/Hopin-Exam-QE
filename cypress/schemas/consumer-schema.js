import { versionSchemas } from "@cypress/schema-tools";

const consumerSchema100 = {
    "timestamp": "Sun Jan 24 2021",
    "customers": [
        {
            "id": 1,
            "name": "Americas Inc.",
            "employees": 10,
            "contactInfo": {
                "name": "John Smith",
                "email": "jsmith@americasinc.com"
            },
            "size": "Small"
        },
        {
            "id": 2,
            "name": "Caribian Airlnis",
            "employees": 1000,
            "contactInfo": {
                "name": "Jose Martinez",
                "email": "martines@cair.com"
            },
            "size": "Big"
        }
    ]
}

const ConsumerSchema100 = {
    version: {
        major: 1,
        minor: 0,
        patch: 0,
    },
    schema: {
        title: 'ConsumerSchema',
        type: 'object',
        description: 'Consumer data',
        properties: {
            name: {
                type: 'string',
                description: 'user name'
            },
            timestamp: {
                type: 'string',
                description: 'Request date',
            },
            customers: {
                type: 'array',
                description: 'List of customers',
            },
        },
        required: ['timestamp', 'customers', 'name'],
        additionalProperties: false,
    },
    example: consumerSchema100,
};

export const ConsumerSchema = versionSchemas(ConsumerSchema100);
