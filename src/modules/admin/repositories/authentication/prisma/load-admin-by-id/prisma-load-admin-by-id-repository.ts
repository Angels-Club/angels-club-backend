import { Injectable } from '@nestjs/common'
import { AdminEntiy } from 'src/modules/admin/entities/admin.entity'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PrismaLoadAdminByIdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async loadById(id: string): Promise<AdminEntiy> {
    try {
      return await this.prisma.admin.findUnique({ where: { id } })
    } catch (error) {
      throw error
    }
  }
}
