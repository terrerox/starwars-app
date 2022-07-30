import { Person, PeopleResponseFromAPI } from '../types'

// export const mapFromApiToPeople = (apiResponse: PeopleResponseFromAPI): Array<Person> => {
//     return apiResponse.map(peopleFromApi => {
//       const {
//         name,
//         height,
//         mass,
//         hair_color,
//         skin_color,
//         eye_color,
//         birth_year,
//         gender,
//         url
//       } = peopleFromApi

//       return {
//         name,
//         height,
//         mass,
//         hairColor: hair_color,
//         skinColor: skin_color,
//         eyeColor: eye_color,
//         birthYear: birth_year,
//         gender,
//         url
//       }
//     })
//   }

export const calculatePages = (count: number | undefined): number => { 
    if(!count) return 0
    return Math.ceil( count / 10 )
}