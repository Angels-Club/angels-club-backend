const Roles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  ANGEL: 'ANGEL',
}

export type RolesType = typeof Roles[keyof typeof Roles]
