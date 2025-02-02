import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; // For environment variables
import { AuthModule } from './auth/auth.module'; // Import the AuthModule

@Module({
  imports: [
    ConfigModule.forRoot({
      // Load environment variables
      isGlobal: true, // Make ConfigModule available globally
      envFilePath: '.env', // Specify the path to your .env file
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
