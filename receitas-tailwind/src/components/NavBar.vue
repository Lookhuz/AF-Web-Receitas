<template>
  <div class="flex justify-center">
    <Disclosure as="nav" class="flex border-b-2 border-gray-400" v-slot="{ open }" style="width: 60%;">
      <div class="flex h-16 items-center">
        <div>
          <img src="./../assets/logo.png" alt="receitas_icon" class="pl-2 w-9">
        </div>
        
        <div class="flex space-x-4">
          <RouterLink to="/" active-class="active-link" class="navs p-3 rounded-md">Receitas</RouterLink>
          <RouterLink to="/" active-class="active-link" class="navs p-3 rounded-md">Receitas Salgadas</RouterLink>
          <RouterLink to="/" active-class="active-link" class="navs p-3 rounded-md">Receitas Doces</RouterLink>
        </div>

      </div>
      <div class="flex h-16 items-center">
        <RouterLink to="/" active-class="active-link" class="navs p-3 rounded-md">Receitas Favoritas</RouterLink>
      </div>
    </Disclosure>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
import router from '@/router/router';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  },
  data() {
    return {
      navigation: [
        { name: 'Receitas', href: '/', current: false },
        // { name: 'EUR', href: '/eur', current: false },
        // { name: 'BB', href: '/bb', current: false },
        // { name: 'USD_BB', href: '/usd-bb', current: false },
        // { name: 'EUR_BB', href: '/eur-bb', current: false },
        // { name: 'Itau', href: '/itau', current: false },
        // { name: 'USD_itau', href: '/usd-itau', current: false },
        // { name: 'EUR_itau', href: '/eur-itau', current: false },
      ]
    }
  }
}
</script>

<style>
.navs:hover {
  color: white;
}
</style>