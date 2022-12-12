import { AdminEntiy } from '../../entities/admin.entity'

export abstract class LoadAdminByEmailRepository {
  abstract loadByEmail(email: string): Promise<AdminEntiy>
}

export abstract class LoadAdminByIdRepository {
  abstract loadById(id: string): Promise<AdminEntiy>
}
