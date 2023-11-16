import { Member } from '@/services/members';

export interface MembersState {
  members?: Member[];
  error: boolean;
}
