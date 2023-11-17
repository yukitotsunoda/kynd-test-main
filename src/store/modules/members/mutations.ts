import { MutationTree } from 'vuex';
import { MembersState } from './types';
import { Member } from '@/services/members';

export const mutations: MutationTree<MembersState> = {
  setMembers(state, payload: Member[]) {
    state.error = false;
    state.members = payload;
  },
  error(state) {
    state.error = true;
    state.members = undefined;
  }
};
