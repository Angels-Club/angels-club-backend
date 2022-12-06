import { ApiProperty } from '@nestjs/swagger';

export class AuthenticateAdminResponseDTO {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGFuaWVsIFBhcmF2aXNpIiwiaWQiOiJkODY0MzZiMy05ZjRjLTQ3ZTctODk2ZS0wN2E4M2JhODZlOGYiLCJhZG1pbiI6ZmFsc2UsInJlZnJlc2hUb2tlbklkIjoiMzFiZGMzMmEtMzQyNy00MjdmLTgzNDMtNzBhN2U2N2MxODliIiwiaWF0IjoxNjcwMzQzNTY1LCJleHAiOjE2NzAzODY3NjV9.bwPURDQZna_3Xue9VLonFHGHFTdMnOnRg_4tYWu_XBE',
  })
  token: string;
}
