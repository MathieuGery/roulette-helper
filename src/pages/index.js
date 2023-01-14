import Head from 'next/head'
import { HandThumbUpIcon, HandThumbDownIcon, CurrencyDollarIcon, ForwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { resetGame, setGame, calc, getCount } from './function'
import { data } from 'autoprefixer'

const previousBet = [
  { name: 'Previous Bet', stat: '1', icon: <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" /> },
  { name: 'On previous color', stat: 'RED', icon: <ForwardIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" /> },
  { name: 'Was bet N°', stat: '2', icon: <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" /> },
]
const stats = [
  { name: 'Bet', stat: '2', icon: <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" /> },
  { name: 'On color', stat: 'RED', icon: <ForwardIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" /> },
  { name: 'Bet N°', stat: '2', icon: <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" /> },
]


export default function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("data") == null) {
        setGame(setData)
        console.log("setdata", data)
      } else {
        console.log(localStorage.getItem("data"))
        setData(JSON.parse(localStorage.getItem("data")))
      }
    }
    // Update the document title using the browser API
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center h-screen items-center mx-10'>
        <div>
          {/* PREVIOUS BET PART */}
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div key="1" className="overflow-hidden rounded-lg bg-neutral-600 px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-800">Previous Bet</dt>
              <div className='grid grid-cols-2 gap-0'>
                <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" />
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{data.previous_bet_value}</dd>
              </div>
            </div>
            <div key="2" className="overflow-hidden rounded-lg bg-neutral-600 px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-800">On previous color</dt>
              <div className='grid grid-cols-2 gap-0'>
                <ForwardIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" />
                <dd className="mt-1 -ml-2 text-3xl font-semibold tracking-tight text-gray-900">{data.previous_color}</dd>
              </div>
            </div>
            <div key="3" className="overflow-hidden rounded-lg bg-neutral-600 px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-800">Was bet N°</dt>
              <div className='grid grid-cols-2 gap-0'>
                <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" />
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{data.count - 1}</dd>
              </div>
            </div>
          </dl>
          {/* CURRENT BET PART */}
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div key="1" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-800">Previous Bet</dt>
              <div className='grid grid-cols-2 gap-0'>
                <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" />
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{data.bet_value}</dd>
              </div>
            </div>
            <div key="2" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-800">On previous color</dt>
              <div className='grid grid-cols-2 gap-0'>
                <ForwardIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" />
                <dd className="mt-1 -ml-2 text-3xl font-semibold tracking-tight text-gray-900">{data.color}</dd>
              </div>
            </div>
            <div key="3" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-800">Was bet N°</dt>
              <div className='grid grid-cols-2 gap-0'>
                <CurrencyDollarIcon className="mt-1 h-9 w-9 text-red-500" aria-hidden="true" />
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{data.count}</dd>
              </div>
            </div>
          </dl>
          <div className='flex items-center justify-center mt-10'>
            <button
              onClick={() => calc(setData)}
              type="button"
              className="hover:scale-110 transition md:transform-none mr-10 inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              <HandThumbUpIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Win
            </button>
            <button
              onClick={() => calc(setData)}
              type="button"
              className="hover:scale-110 transition md:transform-none inline-flex items-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <HandThumbDownIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Lose
            </button>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <button
              onClick={() => resetGame(setData)}
              type="button"
              className="hover:scale-110 transition md:transform-none inline-flex items-center rounded-md border border-transparent bg-zinc-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <ArrowPathRoundedSquareIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Reset
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
