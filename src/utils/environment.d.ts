export { };

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DB_URI: string;
			ENV: 'test' | 'dev' | 'prod';
			JWT_SECRET: string;
		}
	}
}