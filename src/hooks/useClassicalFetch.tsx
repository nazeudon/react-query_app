import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStateContext } from '../context/StateProvider'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const res = await axios('http://127.0.0.1:8000/api/tasks/')
        setTasks(res.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [setTasks])

  return { tasks, isLoading, isError }
}
