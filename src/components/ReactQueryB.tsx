import { VFC } from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Task } from '../types/types'

export const ReactQueryB: VFC = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')
  console.log('rendered ReactQueryB')

  return (
    <>
      <p className="my-3 font-bold">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/')}
        className="w-5 h-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
