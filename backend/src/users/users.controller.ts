import { Controller, Get, Patch, Body, UseGuards, Req } from '@nestjs/common';
import type { Request } from 'express';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getMe(@Req() req: Request) {
    const user = req.user as { id: string };
    const profile = await this.usersService.getProfile(user.id);

    return {
      success: true,
      message: 'Profile fetched successfully',
      data: profile,
    };
  }

  @Patch('me')
  async updateMe(@Req() req: Request, @Body() dto: UpdateUserDto) {
    const user = req.user as { id: string };
    const updated = await this.usersService.updateProfile(user.id, dto);

    return {
      success: true,
      message: 'Profile updated successfully',
      data: updated,
    };
  }
}
