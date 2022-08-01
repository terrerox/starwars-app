import { Person } from '../../types'

interface PersonDetailsProps {
  person: Person
}
export const PersonDetailsCard = ({ person }: PersonDetailsProps) => {
  return (
    <div className="card">
      <div className="container">
        <h4><b>{ person.name }</b></h4>
        <p>{ person.birth_year }</p>
        <p>{ person.gender }</p>
      </div>
    </div> 
  )
}
