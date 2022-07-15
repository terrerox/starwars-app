import {useEffect, useRef, useState} from 'react'
// import { mapFromApiToPeople } from '../helpers'
import { PeopleResponseFromAPI, Person } from '../types'

interface State<T> {
  data?: T
  loading: boolean
  error: boolean
}

export const useFetch = <T,>(url: string): State<T>=> {
  const isMounted = useRef<boolean>(true)
  const [state, setState] = useState<State<T>>({
    loading: true,
    error: false,
    data: undefined
  })
  
  useEffect(() => {
    if(!url) return 

    isMounted.current = true

    const fetchData = () => {
      return fetch(url)
      .then(res => res.json())
      // .then(mapFromApiToPeople)
      .then(data => {
        console.log(data)
        if (isMounted.current) {
          setState({
              loading: false,
              error: false,
              data
          })
        }
      })
    }

    fetchData()
    
    return () => {
      isMounted.current = false
    }
  }, [url])

  return state
}