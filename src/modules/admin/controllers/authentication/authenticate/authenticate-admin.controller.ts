import {
  AuthenticateAdminDTO,
  AuthenticateAdminResponseDTO,
} from 'src/modules/admin/dto'
import {
  HttpBadRequestError,
  HttpUnauthorizedAuthenticationError,
} from 'src/shared/swagger/http-errors'
import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthenticateAdmin } from 'src/modules/admin/use-cases'
import { ControllerClass } from 'src/shared'

@ApiTags('Admins Authentication')
@Controller('admins')
export class AuthenticateAdminController
  implements ControllerClass<AuthenticateAdminResponseDTO>
{
  constructor(private readonly authenticateAdminUC: AuthenticateAdmin) {}

  @ApiOperation({ summary: 'Authenticate Admin' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: AuthenticateAdminResponseDTO,
  })
  @ApiResponse(HttpBadRequestError)
  @ApiResponse(HttpUnauthorizedAuthenticationError)
  @HttpCode(200)
  @Post('authenticate')
  async handle(
    @Body() dto: AuthenticateAdminDTO
  ): Promise<AuthenticateAdminResponseDTO> {
    return await this.authenticateAdminUC.execute(dto)
  }
}
