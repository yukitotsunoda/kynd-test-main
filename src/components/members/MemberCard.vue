<template>
  <div>
    {{ member }}
  </div>
</template>

<script lang="ts">
import { Member } from '@/services/members'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})

export default class MemberCard extends Vue {
  @Prop()
  public member!: Member

  public get fullName() {
    return this.member && `${this.member?.firstName} ${this.member?.lastName}`
  }

  public initialsColour() {
    return {
    }
  }
}
</script>

  