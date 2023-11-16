<template>
  <div class="w-full shadow-md m-2 px-6 py-4 rounded-2xl lg:w-[30%]">
    <div class="flex">
      <div class="w-12 h-12 rounded-full flex justify-center items-center mr-6" :style="initialsColour()">
        {{ initials }}
      </div>
      <div class="flex flex-col justify-center items-start">
        <p class="text-sm">
          {{ fullName }}
        </p>
        <p class="text-xs">
          Member for {{ joinedFor }}
        </p>
      </div>
    </div>
    <div class="text-sm text-left mt-4 line-clamp-2">
      {{ member.lastMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { Member } from '@/services/members'
import { mapInitialsToHexColour } from '@/utils/colours'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getInitials } from '@/utils/helper'
import moment from "moment";

@Component({})

export default class MemberCard extends Vue {
  @Prop()
  public member!: Member

  public get fullName(): string {
    return `${this.member?.firstName} ${this.member?.lastName}`
  }

  public get initials(): string {
    return getInitials(this.member.firstName, this.member.lastName);
  }

  public get joinedFor(): string {
    const diff = moment(moment()).diff(this.member.joinedAt);
    const duration = moment.duration(diff);
    return `${Math.floor(duration.asDays())} days`;
  }

  public initialsColour() {
    return {
      backgroundColor: mapInitialsToHexColour(this.initials)
    }
  }
}
</script>
