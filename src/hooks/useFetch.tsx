import {useEffect, useRef, useState} from 'react'
import { PeopleResponseFromAPI, Person } from '../types'

interface State<T> {
  data: T
  loading: boolean
  error: boolean
}

interface FetchParams<T> {
    url: string
    mapData: (apiResponse: PeopleResponseFromAPI) => T
}

export const useFetch = <T,>({ url, mapData }: FetchParams<T>) => {
  const isMounted = useRef(true)
  const [state, setState] = useState<State<T>>()

  useEffect(() => {
  
    return () => {
      isMounted.current = false
    }
  }, [])

  
  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(res => res.results)
        .then(mapData)
        .then(data => {
          if (isMounted.current) {
            setState({
                loading: false,
                error: false,
                data
            })
          }
        })
  }, [url])

  return state
}