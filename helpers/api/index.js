// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

import client from '../apollo-client';
import { GET_MANY_PRODUCT_FROM_SERVER } from './graphql/query';

export async function getManyProducts(){
  try {
    const { data } = await client.query(GET_MANY_PRODUCT_FROM_SERVER);
    return {
      props: {
        products: data
      }
    }
  } catch (error) {
    return {
      props: {
        error: true,
        message: error
      }
    }
  }
}