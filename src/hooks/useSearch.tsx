import {useEffect, useState} from 'react'
import { Person } from '../types'


export const useSearch = (people: Array<Person> | undefined, inputValue: string) => {
    const [state, setState] = useState<Array<Person> | undefined>()
    
    useEffect(() => {
        const filterByName = (): void => { 

          const value = inputValue.trim().toLowerCase()
          setState(
            people?.filter(person => { 
              const name = person.name.toLowerCase()
              return name.includes(value) 
            })
          ) 
        }
        filterByName()
      
      }, [inputValue, people])

      return state
}
