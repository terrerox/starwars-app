import { useEffect } from 'react'
import { Person, PeopleResponseFromAPI, LocationState } from '../../types'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export const PersonScreen = () => {
  const location = useLocation()
  const { url } = location.state as LocationState
  const { data } = useFetch<Person>(url)

  return (
    <div className="card">
      <div className="container">
        { 
          !data && <p>Loading...</p>
        }

        <h4><b>{ data?.name }</b></h4>
        <p>{ data?.birth_year }</p>
        <p>{ data?.gender }</p>
      </div>
    </div> 
  )
}
