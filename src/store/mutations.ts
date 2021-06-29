import { MutationTree } from 'vuex'
import { stateConfig } from './state'
import { mutationTypes } from './mutation-types'

export type Mutations<T = stateConfig> = {
	[mutationTypes.SET_USERNAME](state: T, username: string): void
}

export const mutations: MutationTree<stateConfig> & Mutations = {
	[mutationTypes.SET_USERNAME](state: stateConfig, username: string) {
		state.username = username
	}
}
