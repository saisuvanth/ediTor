import { model, Schema, HydratedDocument } from 'mongoose';
import { User } from 'src/utils/types';
import { genSalt, hash } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

const UserSchema = new Schema<User>({
	username: {
		type: String,
		unique: true
	},
	password: {
		type: String,
	},
	tokens: [String]
})

UserSchema.methods.generateToken = function () {
	const user = this;
	const token = sign(
		{ _id: user._id.toHexString() },
		process.env.JWT_SECRET,
		{ expiresIn: "1d" }
	);
	user.tokens.push(token);
	return user.save().then(() => {
		return token;
	});
}

UserSchema.statics.findByToken = function (token: string) {
	const User = this;
	let decoded;
	try {
		decoded = verify(token, process.env.JWT_SECRET);
	} catch (e: any) {
		if (e.name === 'TokenExpiredError') {

		}
	}
}



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