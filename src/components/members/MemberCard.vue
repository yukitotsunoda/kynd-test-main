<template>
  <div class="w-full shadow-md m-2 px-6 py-4 rounded-2xl lg:w-[30%]">
    <div class="flex">
      <div class="w-10 h-10 rounded-full flex justify-center items-center mr-6" :style="initialsColour()">
        {{ initials }}
      </div>
      <div class="flex flex-col justify-center items-start">
        <p class="text-sm">
          {{ fullName }}
        </p>
        <p class="text-xs">{{ member.joinedAt }}</p>
      </div>
    </div>
    <div class="text-sm text-left mt-4 text-ellipsis">
      {{ member.lastMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { Member } from '@/services/members'
import { mapInitialsToHexColour } from '@/utils/colours'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getInitials } from '@/utils/helper'

@Component({})

export default class MemberCard extends Vue {
  @Prop()
  public member!: Member

  public get fullName() {
    return this.member && `${this.member?.firstName} ${this.member?.lastName}`
  }

  public get initials() {
    return this.member && getInitials(this.member.firstName, this.member.lastName);
  }

  public initialsColour() {
    return {
      backgroundColor: mapInitialsToHexColour(this.initials)
    }
  }
}
</script>
