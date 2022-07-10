import { connect } from 'mongoose';
import User from './User';


const connectDB = async () => {
	await connect('mongodb+srv://codeditor:rookie>@cluster0.1t2vy.mongodb.net/?retryWrites=true&w=majority');
	return { User };
}

export default connectDB;

