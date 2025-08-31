import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'shasssi',
    },
    {
      id: 2,
      name: 'shashi',
    },
  ];
  getAllUsers() {
    return this.users;
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
