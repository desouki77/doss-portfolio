import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Swagger configuration
   * This sets up Swagger for API documentation.
   */
  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('API documentation for the portfolio application')
    .setTermsOfService('https://example.com/terms')
    .addServer('http://localhost:3000', 'Development server')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
