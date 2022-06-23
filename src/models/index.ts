import { connect } from 'mongoose';

connect(process.env.MONGOURI)

import User from './User';

export { User };
