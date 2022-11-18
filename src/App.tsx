import React from 'react'
import { useSelector } from 'react-redux'
import './App'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'

const App = () => {
	const { count } = useAppSelector(state => state.userReducer)
	const { increment } = userSlice.actions;
	const dispatch = useAppDispatch();



	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={() => dispatch(increment(5))}>fwefewf</button>
		</div>
	)
}

export default App