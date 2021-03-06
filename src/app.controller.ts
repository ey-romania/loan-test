import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Loan } from './entities/loan.entities';
import { LoanDto } from './dto/loan.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('loan')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('loan/list')
  @ApiResponse({
    status: 200,
    description: 'Get all loans',
    type: [Loan],
  })
  getAll() {
    return this.appService.getLoans();
  }

  @UseGuards(JwtAuthGuard)
  @Post('loan')
  @ApiResponse({
    status: 200,
    description: 'Add loan application',
  })
  addLoan(@Body() loan: LoanDto) {
    return this.appService.addLoan(loan);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('loan/:id')
  @ApiResponse({
    status: 200,
    description: 'Remove a loan application',
  })
  removeLoan(@Param('id') id: string) {
    this.appService.removeLoan(id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiResponse({
    status: 200,
    description: 'Login user',
  })
  async login(@Body() req: User) {
    return this.authService.login(req);
  }
}
