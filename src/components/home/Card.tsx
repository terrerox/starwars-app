import { useNavigate } from 'react-router-dom'
import { Person } from '../../types'
import './Home.css'

interface CardProps {
    person: Person
}

export const Card = ({ person }: CardProps) => {

  const navigate = useNavigate()
  const formatedName: string = person.name.toLowerCase().replaceAll(' ', '-')

  const goToDetails = (): void => {
    const locationData = {
      state: { url: person.url }
    }
    navigate(`/${formatedName}`, locationData)
  }

  return (
    <div className="card">
      <div className="container">
        <h4><b>{ person.name }</b></h4>
        <p>{ person.birthYear }</p>
        <p>{ person.gender }</p>
      </div>
      <a onClick={goToDetails}>See more...</a>
    </div>
  )
}
