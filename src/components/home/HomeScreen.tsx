import { useState, useEffect } from 'react'
import { Card } from './Card'
import { Person, PeopleResponseFromAPI } from '../../types'
import { useFetch } from '../../hooks/useFetch'

import './Home.css'

const url = 'https://swapi.dev/api/people'

export const HomeScreen = () => {
  const { data, loading } = useFetch<PeopleResponseFromAPI>(url)
  
  return (
    <div className="App">
      <div className="cards">
        {
          !data ? (
            <p>Loading...</p>
          ) : (

            data?.results.map(p => (
              <Card 
                key={p.name} 
                person={p}
              />
            ))
          )
        }
      </div>
    </div>
  )
}

