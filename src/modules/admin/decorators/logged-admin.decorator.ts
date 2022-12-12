import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export type LoggedAdminType = {
  id: string

  createdAt: Date

  updatedAt: Date

  name: string

  email: string
}

export const LoggedAdmin = createParamDecorator(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.admin
  }
)
