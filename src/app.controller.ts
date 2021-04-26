import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Loan } from './entities/loan.entities';
import { LoanDto } from './dto/loan.dto';

@ApiTags('loan')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('loan/list')
  @ApiResponse({
    status: 200,
    description: 'Get all loans',
    type: Loan,
  })
  getAll() {
    return this.appService.getLoans();
  }

  @Post('loan')
  @ApiResponse({
    status: 200,
    description: 'Add loan application',
  })
  addLoan(@Body() loan: LoanDto) {
    return this.appService.addLoan(loan);
  }

  @Delete('loan/:id')
  @ApiResponse({
    status: 200,
    description: 'Remove a loan application',
  })
  removeLoan(@Param('id') id: string) {
    this.appService.removeLoan(id);
  }
}
