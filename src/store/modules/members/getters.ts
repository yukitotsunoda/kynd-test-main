import { GetterTree } from 'vuex';
import { MembersState } from './types';
import { StoreState } from '@/store/types';

export const getters: GetterTree<MembersState, StoreState> = {
  averageAge({ members }): number | null {
    const ageArr = members?.map((m) => m.age).filter((age) => age != null);

    if (!ageArr?.length) return null;

    const sum = ageArr.reduce((a, b) => a + b);
    return Math.round(sum / ageArr.length);
  }
};
