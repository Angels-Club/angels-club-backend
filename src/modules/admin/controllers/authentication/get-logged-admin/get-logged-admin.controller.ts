import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import {
  HttpForbiddenError,
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/shared/swagger/http-errors'
import {
  LoggedAdmin,
  LoggedAdminType,
} from 'src/modules/admin/decorators/logged-admin.decorator'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { GetAdminInfoResponseDTO } from 'src/modules/admin/dto/authentication/get-admin-info-response.dto'
import { GetAdminInfo } from 'src/modules/admin/use-cases'
import { AdminAuthGuard } from 'src/modules/admin/guards/admin-auth.guard'
import { ControllerClass } from 'src/shared'

@ApiTags('Admins Authentication')
@Controller('admins')
export class GetLoggedAdminController
  implements ControllerClass<GetAdminInfoResponseDTO>
{
  constructor(private readonly getAdminInfoUC: GetAdminInfo) {}

  @ApiOperation({ summary: 'Get Logged Admin' })
  @ApiBearerAuth()
  @ApiResponse({
    type: GetAdminInfoResponseDTO,
    status: 200,
    description: 'Success',
  })
  @ApiProperty(HttpUnauthorizedError)
  @ApiProperty(HttpForbiddenError)
  @ApiProperty(HttpNotFoundError)
  @UseGuards(AdminAuthGuard)
  @Get('me')
  async handle(
    @LoggedAdmin() admin: LoggedAdminType
  ): Promise<GetAdminInfoResponseDTO> {
    return await this.getAdminInfoUC.execute(admin.id)
  }
}
