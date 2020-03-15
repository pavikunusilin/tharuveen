<template>
  <nav
    class="max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full pt-8"
  >
    <div class="flex lg:hidden">
      <button
        type="button"
        class="px-2 text-white hover:text-white focus:outline-none focus:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6 fill-current text-black"
        >
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>
    <ul
      class="pt-8 lg:pt-0 lg:flex lg:items-center lg:justify-center hidden"
    >
      <li
        class="block py-2 lg:px-4 flex lg:justify-center group cursor-pointer z-50"
      >
        <a
          href="/"
          title="Home"
          class="text-black hover:text-purple-600"
        >
          Home
        </a>
      </li>
      <li
        class="block py-2 lg:px-4 flex lg:justify-center group cursor-pointer z-50"
      >
        <a
          href="/journey"
          title="Journey"
          class="text-black hover:text-purple-600"
        >
          Journey
        </a>
      </li>
      <li
        class="block py-2 lg:px-4 flex lg:justify-center group cursor-pointer z-50"
      >
        <a
          href="/gallery"
          title="gallery"
          class="text-black hover:text-purple-600"
        >
          Gallery
        </a>
      </li>
      <li
        class="block py-2 lg:px-4 flex lg:justify-center group cursor-pointer z-50"
      >
        <a
          href="/guestbook"
          title="Guestbook"
          class="text-black hover:text-purple-600"
        >
          Guestbook
        </a>
      </li>
    </ul>
  </nav>
</template>
