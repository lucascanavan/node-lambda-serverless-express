import http from 'http';
import serverless from '@vendia/serverless-express';
import app from './app';

export const handler = serverless({ app });

if (!process.env.APP_ENV) process.env.APP_ENV = 'development';
if (process.env.APP_ENV === 'development') {
	const port = process.env.PORT || 3003;
	const server = http.createServer(app);
	server.listen(port, () => console.info(`App is listening on port ${port}`));
}
