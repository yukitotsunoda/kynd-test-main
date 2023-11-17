import { ActionTree } from 'vuex';
import { MembersState } from './types';
import { StoreState } from '@/store/types';
import memberService from '@/services/members';
import moment from 'moment';

export const actions: ActionTree<MembersState, StoreState> = {
  async fetchData({ commit }): Promise<any> {
    const members = await memberService.loadMembers();
    const orderedMembers = members.sort((a, b) =>
      moment(a.joinedAt).isBefore(moment(b.joinedAt)) ? 1 : -1
    );
    commit('setMembers', orderedMembers);
  }
};
