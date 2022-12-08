import { Injectable } from '@nestjs/common';
import { AdminEntiy } from 'src/modules/admin/entities/admin.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoadAdminByEmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async loadByEmail(email: string): Promise<AdminEntiy> {
    try {
      return await this.prisma.admin.findUnique({ where: { email } });
    } catch (error) {
      throw error;
    }
  }
}
