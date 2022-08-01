import { useState, useEffect } from 'react'
import { Card } from './Card'
import { Person, PeopleResponseFromAPI } from '../../types'
import { useFetch } from '../../hooks/useFetch'
import { useSearch } from '../../hooks/useSearch'
import { calculatePages } from '../../helpers'


import './Home.css'


export const HomeScreen = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [apiUrl, setApiUrl] = useState<string>("https://swapi.dev/api/people")
  const { data } = useFetch<PeopleResponseFromAPI>(apiUrl)
  const people = useSearch(data?.results, inputValue)
  const totalOfPages = calculatePages(data?.count)

  const previousUrl = data?.previous ?? ""
  const nextUrl = data?.next ?? ""

  const previous = () => setApiUrl(previousUrl)
  const next = () => setApiUrl(nextUrl)

  const goToExactPage = (page: number) => {
    setApiUrl(`https://swapi.dev/api/people/?page=${page}`)
  } 
  
  return (
    <main className="App">
      <section className="search">
        <input type="search" placeholder="Find by name" onChange={e => setInputValue(e.target.value)}/>
      </section>
      <section className="cards">
        {
          !data && <p className="loading">Loading...</p>
        }
       {
           data && (
            people?.length === 0 && <p className="notFoundMsg">Character not found</p>
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
      </section>
      <section className="pagination">
      {
        data && (
          <button 
            onClick={(event: React.MouseEvent<HTMLElement>) => previous()}
            disabled={previousUrl === ""}
          >
              Previous
          </button>
        )
       } 
       {
        
           data && (
            Array.from({length: totalOfPages}).map((value, index) => {
              const pageNumber = index + 1
              return (
                <button
                  onClick={(event: React.MouseEvent<HTMLElement>) => goToExactPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            })
           )
       } 
       {
        data && (
          <button 
            onClick={(event: React.MouseEvent<HTMLElement>) => next()}
            disabled={nextUrl === ""}
          >
            Next
          </button>
        )
       } 
      </section>
    </main>
  )
}

