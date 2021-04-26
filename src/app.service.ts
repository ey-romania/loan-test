import { Injectable } from '@nestjs/common';
import { Loan } from './entities/loan.entities';
import { LoanDto } from './dto/loan.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AppService {
  private loans: Loan[] = [];
  getLoans(): Loan[] {
    return this.loans;
  }

  addLoan(loan: LoanDto) {
    this.loans.push({
      id: uuid(),
      adress: loan.adress,
      applicationName: loan.applicationName,
      city: loan.city,
      country: loan.country,
      dateOfBirth: loan.dateOfBirth,
      email: loan.email,
      loanType: loan.loanType,
      grossSalary: loan.grossSalary,
      name: loan.name,
      phoneNo: loan.phoneNo,
      socialIdNo: loan.socialIdNo,
      surname: loan.surname,
    });
  }

  removeLoan(id: string) {
    const val = this.loans.filter((a) => a.id !== id);
    this.loans = [...val];
  }
}
