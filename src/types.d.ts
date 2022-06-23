export interface Person {
    name: string
    height: string, 
    mass: string, 
    hairColor: string, 
    skinColor: string, 
    eyeColor: string, 
    birthYear: string
    gender: string
    url: string
}
  
export type PeopleResponseFromAPI = Array<{
    name: string
    height: string, 
    mass: string, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string
    gender: string
    url: string
}>

export interface LocationState {
    url: string
}