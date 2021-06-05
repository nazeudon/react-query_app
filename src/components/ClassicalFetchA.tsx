import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useClassicalFetch } from '../hooks/useClassicalFetch'

export const ClassicalFetchA: VFC = () => {
  const history = useHistory()
  const { isLoading, isError, tasks } = useClassicalFetch()
  console.log('rendered ClassicalFetchA')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-3 font-bold text-center">ClassicalFetchA</p>
      {isError && <div>Error!!</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks?.map((task) => <p key={task.id}>{task.title}</p>)
      )}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/fetch-b')}
        className="w-5 h-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
