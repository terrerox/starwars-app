import { useState, useEffect } from 'react'
import { Card } from './Card'
import { Person, PeopleResponseFromAPI } from '../../types'
import { useFetch } from '../../hooks/useFetch'

import './Home.css'

const url = 'https://swapi.dev/api/people'

export const HomeScreen = () => {
  const { data, loading } = useFetch<PeopleResponseFromAPI>(url)
  const [people, setPeople] = useState<Array<Person> | undefined>([])
  const [inputValue, setInputValue] = useState<string>("")

  useEffect(() => {
    setPeople(data?.results)
  
  }, [data])

  useEffect(() => {
    const filterByName = (): void => { 
      const value = inputValue.trim().toLowerCase()
      setPeople(
        people?.filter(person => { 
          const name = person.name.toLowerCase()
          return name.includes(value) 
        })
      ) 
    }
    filterByName()
  
  }, [inputValue])
  
  
  return (
    <main className="App">
      <section className="filter">
        <input type="text" placeholder="Find by name" onChange={e => setInputValue(e.target.value)}/>
      </section>
      <section className="cards">
        {
          !data && <p>Loading...</p>
        }
       {
           data && (
            people?.map(p => (
              <Card 
                key={p.name} 
                person={p}
              />
            ))
          )
       } 
      </section>
    </main>
  )
}

