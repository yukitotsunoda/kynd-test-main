<template>
  <div class="flex flex-col h-full items-center px-4 text-center mx-auto lg:px-16">
    <div v-if="membersState.members">
      <p class="font-bold mb-2 text-left">
        <!-- Found {{ membersState.membersState.length }} members with an average age of {{ averageAge }} -->
      </p>
      <div class="lg:flex lg:max-w-[1280px] lg:flex-wrap">
        <MemberCard v-for="member in membersState.members" :member="member" :key="member.id" class="mb-2" />
      </div>
    </div>
    <div v-else>
      <button class="bg-emerald-800 text-white text-sm rounded-lg px-4 py-2" @click="loadMembers">Load Members</button>
    </div>

    <!-- <div v-if="members.error">
            Oops an error occured
    </div> -->

  </div>
</template>

<script lang="ts">
import MemberCard from '@/components/members/MemberCard.vue';
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class';

const namespace: string = 'members';

@Component({
  components: {
    MemberCard
  },
})
export default class MembersView extends Vue {
  @State('members') membersState: any;
  @Action('fetchData', { namespace }) fetchData: any;

  async loadMembers() {
    this.fetchData();
  }
}
</script>
