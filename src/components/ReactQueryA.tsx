import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useQueryTasks } from '../hooks/useQueryTasks'

export const ReactQueryA: VFC = () => {
  const history = useHistory()
  const { status, data } = useQueryTasks()
  console.log('rendered ReactQueryA')

  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error...'}</div>

  return (
    <>
      <p className="my-3 font-bold">ReactQueryA</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/query-b')}
        className="w-5 h-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query B</p>
    </>
  )
}
