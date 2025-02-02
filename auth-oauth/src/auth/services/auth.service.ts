import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class AuthService {
  login(user: User) {
    // Save user to database or session
    return { message: 'Login successful', user };
  }
}
