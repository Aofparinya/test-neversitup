import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/dto/register.dto';


@ApiTags('Users Management')
@Controller('users')
export class UsersController {

    constructor(
        private authService: AuthService,
        private userService: UsersService
    ) { }

    // create user
    @Post('create')
    createUser(@Body() registerDto : RegisterDto) {
        return this.userService.createUser(registerDto);
    }

    // view profile
    @Get('viewProfile')
    viewProfile(@Query('username') username: string) {
        return this.userService.viewProfileByUser(username);
    }

    // view order history 


}


