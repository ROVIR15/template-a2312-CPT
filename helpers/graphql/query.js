import { gql } from '@apollo/client';

export const GET_ONE_PRODUCT_BY_ID = gql(`
    query productOne($_id: MongoID!){
        productOne(filter: { _id: $_id }) {
            _id,
            name,
            short_description,
            description,
            size,
            location,
            maxQty,
            image_name,
            image_url,
            cook_type
        }
    }
`);

export const GET_MANY_PRODUCT_FROM_SERVER = gql(`
    query {
        productMany {
            _id,
            name,
            short_description,
            description,
            size,
            location,
            image_url,
            cook_type
        }
    }
`);