<template>
  <div class="flex flex-col h-full items-center px-4 text-center mx-auto lg:px-16">
    <div v-if="membersState.members">
      <p class="font-bold mb-2 text-center lg:text-left">
        Found {{ membersState.members.length }} members with an average age of {{ averageAge }}
      </p>
      <div class="lg:max-w-[1280px] lg:grid lg:grid-cols-3 lg:gap-4">
        <MemberCard v-for="member in membersState.members" :member="member" :key="member.id" class="mb-2" />
      </div>
    </div>
    <div v-else class="h-full flex items-center">
      <button
        class="bg-emerald-800 text-white font-bold rounded-2xl mb-6 px-16 py-4 hover:bg-emerald-700 active:bg-emerald-900"
        @click="loadMembers">
        Load Members
      </button>
      <p v-if="membersState.error" class="text-xs">
        Oops an error occured. Please try it again later...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import MemberCard from '@/components/members/MemberCard.vue';
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class';

const namespace: string = 'members';

@Component({
  components: {
    MemberCard
  },
})
export default class MembersView extends Vue {
  @State('members') membersState: any;
  @Action('fetchData', { namespace }) fetchData: any;
  @Getter('averageAge', { namespace }) averageAge: any;

  async loadMembers(): Promise<void> {
    this.fetchData();
  }
}
</script>
