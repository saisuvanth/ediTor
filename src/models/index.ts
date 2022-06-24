import { connect } from 'mongoose';

console.log(process.env.MONGOURI);
connect(process.env.MONGOURI as string)

import User from './User';

export { User };
