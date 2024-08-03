<script lang="ts">
  import { camelcase } from "$lib/common/strings";
  import { Button } from "$ui/button";
  import * as Card from "$ui/card";
  import * as Tabs from "$ui/tabs";
  import Icon from "@iconify/svelte";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  import { querystring, replace } from "svelte-spa-router";
  import { writable } from "svelte/store";
  import { openTopicCreate } from "../create/create";
  import type { Topic } from "../topic";
  import Table from "./table.svelte";

  const query = new URLSearchParams($querystring);
  const filter = writable(query.get("status") ?? "all");

  const change = (status: string) => {
    filter.set(status);
    replace(`/topics?status=${status}`);
  };

  const topics = writable<Topic[]>([
    {
      id: "1",
      name: "Topic 1",
      content: `# Topic 1

This is a topic.`,
      status: "active",
      created: new Date()
    },
    {
      id: "2",
      name: "Topic 2",
      status: "draft",
      content: `# Topic 2

This is a topic.`,
      created: new Date()
    },
    {
      id: "3",
      name: "Topic 3",
      status: "archived",
      content: `# Topic 3

This is a topic.`,
      created: new Date()
    }
  ]);
</script>

<div class="flex flex-col gap-2">
  <div class="flex w-full items-center justify-between px-4 text-lg font-semibold">
    <div class="flex items-center justify-between gap-2">
      <Icon icon="icon-park-outline:topic-discussion" class="size-12 text-slate-700" />
      <div class="flex flex-col">
        <div class="text-lg font-semibold text-indigo-600">Topics Bot</div>
        <div class="-mt-1 text-sm text-slate-600">Manage and schedule topics across your guild(s).</div>
      </div>
    </div>
    <Button size="sm" class="h-8 gap-1 bg-emerald-500" on:click={openTopicCreate}>
      <CirclePlus class="h-3.5 w-3.5" />
      <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Create Topic</span>
    </Button>
  </div>
  <main class="flex flex-1 items-start gap-4 px-4">
    <Tabs.Root value={$filter} class="flex w-full flex-col gap-2">
      <Card.Root>
        <Card.Header>
          <div class="flex justify-between">
            <div class="flex flex-col gap-1">
              <Card.Title>{camelcase($filter)} Topics</Card.Title>
              <Card.Description class="text-slate-600">Manage topics across your guilds.</Card.Description>
            </div>
            <div class="flex items-center gap-2">
              <Tabs.List class="">
                <Tabs.Trigger value="all" on:click={() => change("all")}>All</Tabs.Trigger>
                <Tabs.Trigger value="pending" on:click={() => change("pending")}>Pending</Tabs.Trigger>
                <Tabs.Trigger value="active" on:click={() => change("active")}>Active</Tabs.Trigger>
                <Tabs.Trigger value="archived" class="hidden sm:flex" on:click={() => change("archived")}>Archived</Tabs.Trigger>
              </Tabs.List>
            </div>
          </div>
        </Card.Header>
        <Card.Content class="flex flex-1 flex-col gap-1">
          <Table {topics} />
        </Card.Content>
      </Card.Root>
    </Tabs.Root>
  </main>
</div>
