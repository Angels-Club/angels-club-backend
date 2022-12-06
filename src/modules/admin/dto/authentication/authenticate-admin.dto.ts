import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticateAdminDTO {
  @ApiProperty({ example: 'admin@test.test' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '123456789' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
