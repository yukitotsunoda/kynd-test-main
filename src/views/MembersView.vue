<template>
  <div class="flex flex-col h-full items-center px-4 text-center mx-auto lg:px-16">
    <div class="flex flex-col h-full">
      <button class="bg-emerald-800 text-white text-sm rounded-lg px-4 py-2" @click="loadMembers">Load Members</button>
      {{ members }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class';

const namespace: string = 'members';

@Component({
  components: {
  },
})
export default class MembersView extends Vue {
  @State('members') members: any;
  @Action('fetchData', { namespace }) fetchData: any;

  async loadMembers() {
    console.log('loading members...');
    this.fetchData();
  }
}
</script>
