import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ENVIRONMENT } from './shared/enum';

async function bootstrap() {
	process.env.NODE_ENV = process.env.NODE_ENV || ENVIRONMENT.development;

	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Crypto Exchange')
		.setDescription('The crypto exchange description')
		.setVersion('1.0')
		.addTag('exchange')
		.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('swagger', app, document);
	await app.listen(process.env.PORT || 5432, () => {
		console.log(`Server has started listening on port: ${process.env.PORT}`);
	});
	
}

bootstrap();