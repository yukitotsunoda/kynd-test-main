<template>
  <div class="flex flex-col h-full items-center px-4 text-center mx-auto lg:px-16">
    <div class="flex flex-col h-full">
      <button class="bg-emerald-800 text-white text-sm rounded-lg px-4 py-2" @click="loadMembers">Load Members</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})
export default class MembersView extends Vue {
  async loadMembers() {
    console.log('loading members...');
  }
}
</script>
