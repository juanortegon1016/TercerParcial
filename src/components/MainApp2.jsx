import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decrement } from '../Store/slices/CounterSlice'
import { increment } from '../Store/slices/CounterSlice'

export const MainApp2 = () => {

  const { counter } = useSelector ( state => state.counter);
  const  dispatch = useDispatch();

  return (
    <>
        <h1>MainApp</h1>
        <hr/>
        <span> Counter is: {counter}</span>
        <button
          className='btn btn-primary'
          onClick={ () => dispatch( increment() )}
        > +1 </button>
        <button
          className='btn btn-primary'
          onClick={ () => dispatch (decrement())}
          > -1</button>
    </>
  )
}