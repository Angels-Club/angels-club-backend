import {
  AuthenticateAdminDTO,
  AuthenticateAdminResponseDTO,
} from 'src/modules/admin/dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticateAdminUseCase } from 'src/modules/admin/use-cases';
import { HttpUnauthorizedAuthenticationError } from 'src/shared/swagger/http-errors';

@ApiTags('Admins Authentication')
@Controller('admins')
export class AuthenticateAdminController {
  constructor(private readonly authenticateUC: AuthenticateAdminUseCase) {}

  @ApiOperation({ summary: 'Authenticate Admin' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: AuthenticateAdminResponseDTO,
  })
  @ApiResponse(HttpUnauthorizedAuthenticationError)
  @HttpCode(200)
  @Post('authenticate')
  async handle(@Body() dto: AuthenticateAdminDTO) {
    return await this.authenticateUC.execute(dto);
  }
}
