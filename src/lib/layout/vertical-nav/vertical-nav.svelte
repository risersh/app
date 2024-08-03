<script lang="ts">
  import { Button } from "$ui/button";
  import * as Tooltip from "$ui/tooltip";
  import Icon from "@iconify/svelte";
  import { link } from "svelte-spa-router";
  import type { VerticalNavItem } from "./vertical-nav-item";

  const items: VerticalNavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "material-symbols:dashboard-customize-rounded",
      classes: "text-slate-600"
    },
    {
      label: "Topics",
      href: "/topics",
      icon: "ic:baseline-business-center"
    },
    {
      label: "Topics",
      href: "/topics",
      icon: "icon-park-outline:topic-discussion"
    }
  ];
</script>

<nav class="grid gap-1 px-3 py-1.5">
  {#each items as item}
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a use:link={item.href}>
          <Button variant="ghost" size="icon" class="rounded-lg text-slate-400 {item.classes}" aria-label={item.label} builders={[builder]}>
            <Icon icon={item.icon} class="size-7" />
          </Button>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" sideOffset={5}>{item.label}</Tooltip.Content>
    </Tooltip.Root>
  {/each}
</nav>
<nav class="mt-auto grid gap-1 p-2">
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg text-yellow-600" aria-label="Help" builders={[builder]}>
        <Icon icon="mdi:professional-hexagon" class="size-7" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
  </Tooltip.Root>
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg text-pink-500" aria-label="Help" builders={[builder]}>
        <Icon icon="solar:help-bold-duotone" class="size-7" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
  </Tooltip.Root>
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button variant="ghost" size="icon" class="mt-auto rounded-lg text-slate-600" aria-label="Account" builders={[builder]}>
        <Icon icon="tabler:settings-2" class="size-7" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" sideOffset={5}>Account</Tooltip.Content>
  </Tooltip.Root>
</nav>
