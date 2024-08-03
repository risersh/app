<script lang="ts">
  import { drawerManager } from "$lib/common/drawers";
  import { confirmOpen } from "$lib/components/confirm/confirm";
  import * as Pagination from "$lib/components/ui/pagination";
  import { Button } from "$ui/button";
  import * as DropdownMenu from "$ui/dropdown-menu";
  import * as Table from "$ui/table";
  import Ellipsis from "lucide-svelte/icons/ellipsis";
  import { toast } from "svelte-sonner";
  import type { Writable } from "svelte/store";
  import Manage from "../manage/manage.svelte";
  import Status from "../status.svelte";
  import type { Topic } from "../topic";

  export let topics: Writable<Topic[]>;

  const open = (topic: Topic) => {
    drawerManager.open({
      id: "manage-topic",
      component: Manage,
      placement: "bottom",
      data: topic
    });
  };
</script>

<div class="flex flex-col gap-1">
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>#</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head>Title</Table.Head>
        <Table.Head class="hidden md:table-cell">Created</Table.Head>
        <Table.Head>
          <span class="sr-only">Actions</span>
        </Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each $topics as topic}
        <Table.Row>
          <Table.Cell on:click={() => open(topic)}>{topic.id}</Table.Cell>
          <Table.Cell on:click={() => open(topic)}>
            <Status status={topic.status} />
          </Table.Cell>
          <Table.Cell on:click={() => open(topic)} class="w-full">{topic.name}</Table.Cell>
          <Table.Cell on:click={() => open(topic)} class="hidden md:table-cell">{topic.created.toLocaleDateString()}</Table.Cell>
          <Table.Cell>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild let:builder>
                <Button aria-haspopup="true" size="icon" variant="ghost" builders={[builder]}>
                  <Ellipsis class="h-4 w-4" />
                  <span class="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item class="text-xs" on:click={() => open(topic)}>Edit</DropdownMenu.Item>
                <DropdownMenu.Item
                  class="text-xs"
                  on:click={() => {
                    confirmOpen("Duplicate Topic", "Are you sure you want to duplicate this topic?").subscribe((result) => {
                      if (result) {
                        topics.update((topics) => topics.filter((t) => t.id !== topic.id));
                        toast.success(`${topic.name} duplicated!`);
                      }
                    });
                  }}>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item
                  class="text-xs text-pink-600"
                  on:click={() => {
                    confirmOpen("Delete Topic", "Are you sure you want to delete this topic?").subscribe((result) => {
                      if (result) {
                        topics.update((topics) => topics.filter((t) => t.id !== topic.id));
                        toast.success(`${topic.name} deleted!`);
                      }
                    });
                  }}>Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
  <div class="flex justify-end">
    <Pagination.Root count={100} perPage={10} let:pages let:currentPage>
      <Pagination.Content class="flex items-center gap-1">
        <Pagination.Item>
          <Pagination.PrevButton disabled={currentPage == 1} />
        </Pagination.Item>
        {#each pages as page (page.key)}
          {#if page.type === "ellipsis"}
            <Pagination.Item>
              <Pagination.Ellipsis />
            </Pagination.Item>
          {:else}
            <Pagination.Item>
              <Pagination.Link {page} isActive={currentPage == page.value}>
                {page.value}
              </Pagination.Link>
            </Pagination.Item>
          {/if}
        {/each}
        <Pagination.Item>
          <Pagination.NextButton />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  </div>
</div>
