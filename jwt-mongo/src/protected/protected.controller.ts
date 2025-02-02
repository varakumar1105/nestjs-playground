import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard('jwt')) // Protect this route with JWT
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }
}
