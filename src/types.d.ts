export interface People {
    name: string
    birthYear: string
    gender: string
}
  
export type PeopleResponseFromAPI = Array<{
    name: string
    birth_year: string
    gender: string
}>