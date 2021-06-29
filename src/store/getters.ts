import { stateConfig } from './state'

export const getters = {
	username: (state: stateConfig): string => {
		return state.username
	}
}