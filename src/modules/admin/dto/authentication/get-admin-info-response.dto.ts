import { ApiProperty } from '@nestjs/swagger';

export class GetAdminInfoResponseDTO {
  @ApiProperty({ example: '51f1d0d1-f573-43ed-979c-0633137fdfa6' })
  id: string;

  @ApiProperty({ example: '2022-12-06 22:29:38.858' })
  createdAt: Date;

  @ApiProperty({ example: '2022-12-06 22:29:38.858' })
  updatedAt: Date;

  @ApiProperty({ example: 'Admin Test' })
  name: string;

  @ApiProperty({ example: 'admi@test.test' })
  email: string;
}
