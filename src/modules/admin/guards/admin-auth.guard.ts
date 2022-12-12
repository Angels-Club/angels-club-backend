import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { TokenProvider } from 'src/shared/providers'
import { GetAdminInfoUseCase } from '../use-cases'

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(
    private readonly getAdminInfo: GetAdminInfoUseCase,
    private readonly tokenProvider: TokenProvider
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const token = request?.headers?.authorization?.split('Bearer ')[1]

    if (!token) throw new UnauthorizedException('JWT Token must be provided!')

    try {
      const payload = await this.tokenProvider.verifyToken(token)
      if (!payload || payload.role !== 'ADMIN') return false

      const admin = await this.getAdminInfo.execute(payload.id)
      if (!admin) return false

      request.admin = admin

      return true
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }
}
