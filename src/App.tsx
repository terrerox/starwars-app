import { useState, useEffect } from 'react'
import { People, PeopleResponseFromAPI } from './types'

function App() {
  const [people, setPeople] = useState<Array<People>>([])

  useEffect(() => {
    const fetchPeople = (): Promise<PeopleResponseFromAPI> => {
      return fetch('https://swapi.dev/api/people')
          .then(res => res.json())
          .then(data => data.results)
    }

    const mapFromApiToPeople = (apiResponse: PeopleResponseFromAPI): Array<People> => {
      return apiResponse.map(peopleFromApi => {
        const {
          name,
          birth_year,
          gender
        } = peopleFromApi

        return {
          name,
          birthYear: birth_year,
          gender
        }
      })
    }

    fetchPeople()
    .then(apiPeople => {
      const people = mapFromApiToPeople(apiPeople)
      setPeople(people)
    })
  }, [])
  
  return (
    <div className="App">
      <h1>Starwars App</h1>
      <ul>
        {
          people.map(p => (
            <li key={p.name}>
              { p.name }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
