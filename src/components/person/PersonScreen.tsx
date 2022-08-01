import { Person, LocationState } from '../../types'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { PersonDetailsCard } from './PersonDetailsCard'
import { NavLink } from "react-router-dom";

export const PersonScreen = () => {
  const location = useLocation()
  const { url } = location.state as LocationState
  const { data } = useFetch<Person>(url)

  return (
    <>
      <NavLink to="/">Go back</NavLink>
        {
          !data && <p>Loading...</p>
        }
        {
          data && <PersonDetailsCard person={data} />
        }
      </>
      )
}
