export interface Person {
    name: string
    height: string, 
    mass: string, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string
    gender: string
    url: string
}
  
export interface PeopleResponseFromAPI {
    results: Array<Person>
}

export interface LocationState {
    url: string
}

