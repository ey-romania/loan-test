import { ApiProperty } from '@nestjs/swagger';

export class Loan {
  @ApiProperty()
  id: string;

  @ApiProperty()
  applicationName: string;

  @ApiProperty()
  socialIdNo: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  country: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  adress: string;

  @ApiProperty()
  phoneNo: string;
  @ApiProperty()
  email: string;

  @ApiProperty()
  grossSalary: number;

  @ApiProperty()
  loanType: number;
}
