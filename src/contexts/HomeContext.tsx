import { createContext, useReducer, Dispatch } from 'react';
import homeReducer from '../reducers/homeReducers';
import { defaultHomeState } from '../utils/constants';
import { IHomeAction, IHomeState } from '../utils/types';

type IHomeContext = {
	state: IHomeState;
	dispatch: Dispatch<IHomeAction>
}

export const HomeContext = createContext<IHomeContext>({} as IHomeContext)

type IHomeContextProvider = {
	children: JSX.Element
}

const HomeContextProvider = ({ children }: IHomeContextProvider) => {
	const [state, dispatch] = useReducer(homeReducer, defaultHomeState)

	return (
		<HomeContext.Provider value={{ state, dispatch }}>
			{children}
		</HomeContext.Provider >
	)
}

export default HomeContextProvider;