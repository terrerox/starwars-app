import { useState, useEffect } from 'react'
import { Card } from './Card'
import { Person, PeopleResponseFromAPI } from '../../types'
import { useFetch } from '../../hooks/useFetch'

import './Home.css'

const url: string = 'https://swapi.dev/api/people'

export const HomeScreen = () => {
  const [people, setPeople] = useState<Array<Person>>([])
  const {data, loading} = useFetch<PeopleResponseFromAPI>(url)!

  useEffect(() => {

    // fetchPeople()
    // .then(mapFromApiToPeople)
    // .then(setPeople)
  }, [])
  
  return (
    <div className="App">
      <div className="cards">
        {
          people.map(p => (
            <Card 
              key={p.name} 
              person={p}
            />
          ))
        }
      </div>
    </div>
  )
}

