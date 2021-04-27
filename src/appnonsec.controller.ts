import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Loan } from './entities/loan.entities';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoanDto } from './dto/loan.dto';
import { LoanType } from './entities/loanType';

@ApiTags('loanpublic')
@Controller()
export class AppnonsecController {
  constructor(private readonly appService: AppService) {}

  @Get('public/loan/list')
  @ApiResponse({
    status: 200,
    description: 'Get all loans',
    type: [Loan],
  })
  getAll() {
    return this.appService.getLoans();
  }

  @Post('public/loan')
  @ApiResponse({
    status: 200,
    description: 'Add loan application',
  })
  addLoan(@Body() loan: LoanDto) {
    return this.appService.addLoan(loan);
  }

  @Delete('public/loan/:id')
  @ApiResponse({
    status: 200,
    description: 'Remove a loan application',
  })
  removeLoan(@Param('id') id: string) {
    this.appService.removeLoan(id);
  }
  @Get('public/loan/types')
  @ApiResponse({
    status: 200,
    description: 'Loan Types',
    type: [LoanType],
  })
  getLoanTypes() {
    return [
      {
        id: 1,
        name: 'Car Loan',
      },
      {
        id: 2,
        name: 'Personal Loan',
      },
      {
        id: 3,
        name: 'Real estate Loan',
      },
    ];
  }
}
