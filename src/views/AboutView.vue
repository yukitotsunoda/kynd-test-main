<template>
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold">About My Project</p>

    <div>
      <p class="font-bold italic">What you added/changed and the rationale behind it</p>
      <li>Created new components for the members page. The MemberCard component was added under the 'components' folder
        in case of resuing it in somewhere else.</li>
      <li>Added a new module to the store for members. Also, all the related code are placed under 'modules/members' not
        be bloated when it grows in scale.</li>
      <li>Added a helper function to format strings under 'util/helper.ts' for the reusability.</li>
      <li>Added new npm packages (moment & tailwindcss/line-clamp).</li>

      <p class="font-bold italic mt-4">Any improvements you would suggest to either the UX worflow, the UI design, or the
        code
      </p>
      <p class="font-bold italic">- UI/UX</p>
      <li>Display a text or spinner while loading members, and disable the load button once clicked to prevent
        multiple clicks.
      </li>
      <li>Apply lazy loading to the router once the bundle size becomes large.</li>
      <li>Add some error handling if fetching data from API.</li>
      <p class="font-bold italic">- Code</p>
      <li>Upgrade dependencies which may have vulnerbilities (there are some detected by 'yarn audit').</li>
      <li>Include unit tests.</li>
      <li>Add more linting configurations (e.g. tab size) for the sake of consistency among the team.</li>
      <li>Possibly, replace the build tool with 'Vite' for better performance.</li>

      <p class="font-bold italic mt-4">Any assumptions you had to make because information was missing</p>
      <li>A page transition does not clear the members once they have been loaded previously.</li>
      <li>Members are ordered by the joined-at date (according to the wireframe).</li>

      <p class="font-bold italic mt-4">Any roadblocks or issues you encountered</p>
      <li>Nothing much</li>
    </div>
    <p class="mt-6">Thank you for your time and consideration :)</p>
    <p>Yukito Tsundoa</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})
export default class AboutView extends Vue {
}
</script>
