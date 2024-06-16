export interface User {
  userId: string,
  rank: string,
  password: string,
  name: string,
  group: string,
  phone: string,
  birth: string,
  gender: string,
}

export interface UpdateForm {
  userId: string,
  name: string,
  group: string,
  phone: string,
  birth: string,
  gender: string,
  etcGroup?: string
}