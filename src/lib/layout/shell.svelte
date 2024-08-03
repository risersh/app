<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "../../routes/routes";
  import Header from "./header.svelte";
  import VerticalNav from "./vertical-nav/vertical-nav.svelte";
</script>

<aside class="inset-y fixed left-0 mt-[70px] flex h-[calc(100vh-75px)] flex-col px-1.5">
  <VerticalNav />
</aside>
<div class="flex h-full flex-col gap-4">
  <Header />
  <div class="mt-[75px]">
    <Router {routes} />
  </div>
</div>
