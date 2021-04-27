import { ApiProperty } from '@nestjs/swagger';

export class LoanType {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
