import { useContext, useState, createContext, ReactNode, VFC } from 'react'
import { Task } from '../types/types'

interface StateContextType {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
  children: ReactNode
}

const StateContext = createContext({} as StateContextType)

export const StateProvider: VFC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState<boolean>(false)

  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = (): StateContextType => useContext(StateContext)
