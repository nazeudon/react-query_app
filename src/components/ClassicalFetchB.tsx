import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { useStateContext } from '../context/StateProvider'

export const ClassicalFetchB: VFC = () => {
  const history = useHistory()
  const { tasks } = useStateContext()
  console.log('rendered ClassicalFetchB')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-3 font-bold text-center">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/fetch-a')}
        className="w-5 h-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
