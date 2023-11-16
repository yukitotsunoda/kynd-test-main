import { Module } from 'vuex';
import { StoreState } from '@/store/types';
import { MembersState } from './types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state: MembersState = {
  members: undefined,
  error: false
};

const namespaced: boolean = true;

export const membersModule: Module<MembersState, StoreState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
