import { model, Schema, HydratedDocument } from 'mongoose';
import { User } from 'src/utils/types';
import { genSalt, hash } from 'bcryptjs';

const UserSchema = new Schema<User>({
	username: {
		type: String,
		unique: true
	},
	password: {
		type: String,
	}
})

UserSchema.pre('save', function (next) {
	let user: HydratedDocument<User> = this;
	if (user.isModified("password")) {
		genSalt(10, (err, salt) => {
			if (err) throw err;
			hash(user.password as string, salt, (er, hash) => {
				if (er) throw er;
				user.password = hash;
				return next();
			});
		});
	} else return next();
});


export default model('User', UserSchema);