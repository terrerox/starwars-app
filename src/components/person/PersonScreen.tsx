import { useEffect } from 'react'
import { Person, PeopleResponseFromAPI, LocationState } from '../../types'
import { useLocation } from 'react-router-dom'

export const PersonScreen = () => {
  const location = useLocation()

  const { url } = location.state as LocationState

  useEffect(() => {
    const fetchPerson = (): Promise<PeopleResponseFromAPI> => {
      return fetch('')
          .then(res => res.json())
          .then(data => data.results)
    }

    const mapFromApiToPeople = (apiResponse: PeopleResponseFromAPI): Array<Person> => {
      return apiResponse.map(peopleFromApi => {
        const {
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          url
        } = peopleFromApi

        return {
          name,
          height,
          mass,
          hairColor: hair_color,
          skinColor: skin_color,
          eyeColor: eye_color,
          birthYear: birth_year,
          gender,
          url
        }
      })
    }
  }, [])
  return (
    <div className="card">
      <div className="container">
        <h4><b>name</b></h4>
        <p>birth year</p>
        <p>gender</p>
      </div>
    </div> 
  )
}
