import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'test@abc.abc',
      password: 'testTalentQ',
    },
  ];
  async findOne(username: string) {
    return this.users.find((a) => a.username === username);
  }
}
