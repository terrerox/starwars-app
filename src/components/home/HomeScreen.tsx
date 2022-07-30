import { useState, useEffect } from 'react'
import { Card } from './Card'
import { Person, PeopleResponseFromAPI } from '../../types'
import { useFetch } from '../../hooks/useFetch'
import { useSearch } from '../../hooks/useSearch'
import { calculatePages } from '../../helpers'


import './Home.css'

const url = 'https://swapi.dev/api/people'

export const HomeScreen = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const { data } = useFetch<PeopleResponseFromAPI>(url)
  const people = useSearch(data?.results, inputValue)
  const totalOfPages = calculatePages(data?.count)
  
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
            people?.length === 0 && <p>Character not found</p>
           )
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
       {
           data && (
            Array.from({length: totalOfPages}).map((value, index) => {
              const pageNumber = index + 1
              return (
                <button>{pageNumber}</button>
              )
            })
           )
       } 
      </section>
    </main>
  )
}

