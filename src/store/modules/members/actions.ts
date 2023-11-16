import { ActionTree } from 'vuex';
import { MembersState } from './types';
import { StoreState } from '@/store/types';
import memberService from '@/services/members';

export const actions: ActionTree<MembersState, StoreState> = {
  async fetchData({ commit }): Promise<any> {
    const members = await memberService.loadMembers();
    commit('update', members);
  }
};
