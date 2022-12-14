import { Injectable, NotFoundException } from '@nestjs/common'
import { GetAdminInfoResponseDTO } from 'src/modules/admin/dto/authentication/get-admin-info-response.dto'
import { LoadAdminByIdRepository } from 'src/modules/admin/repositories'
import { UseCase } from 'src/shared'

@Injectable()
export class GetAdminInfo implements UseCase<string, GetAdminInfoResponseDTO> {
  constructor(private readonly loadByIdRepository: LoadAdminByIdRepository) {}

  async execute(id: string): Promise<GetAdminInfoResponseDTO> {
    try {
      const admin = await this.loadByIdRepository.loadById(id)
      if (!admin) throw new NotFoundException('Admin was not found!')

      delete admin.password

      return admin
    } catch (error) {
      throw error
    }
  }
}
