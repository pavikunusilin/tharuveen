<template>
  <div class="container">
    <navbar />
    <form class="w-full flex flex-col items-center justify-center">
      <h1 class="text-center text-3xl font-semibold py-6">
        Guestbook
      </h1>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="text-center block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            id="guest-name"
            class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            type="text"
            placeholder="Your dear name sir/ma'am"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="text-center block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Message
          </label>
        </div>
        <div class="md:w-2/3">
          <textarea
            id="inline-username"
            class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            type="password"
            placeholder="Your lovely message to the bride & groom"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-red-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded md:flex items-center"
            type="button"
          >
            Send some love!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
