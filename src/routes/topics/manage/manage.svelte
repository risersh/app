<script lang="ts">
  import { confirmOpen } from "$lib/components/confirm/confirm";
  import Editor from "$lib/components/editor/editor.svelte";
  import { Button } from "$ui/button";
  import Icon from "@iconify/svelte";
  import type { DrawerInstance } from "@svelte.codes/drawer";
  import { ControlContainer, Form, FormControl, Input, maxLength, minLength, Select } from "@svelte.codes/forms";
  import { onMount } from "svelte";
  import { toast } from "svelte-sonner";
  import type { Topic } from "./../topic.ts";

  export let instance: DrawerInstance<Topic>;
  export let title = "Manage Topic";
  export let description = "Manage the topic details and settings.";

  console.log(instance.data);

  const form = new Form({
    controls: [
      {
        name: "title",
        placeholder: "Enter the topic title..",
        validators: [minLength(1)],
        value: instance.data.name
      },
      {
        name: "content",
        placeholder: "Enter the topic content..",
        validators: [minLength(3), maxLength(5)],
        value: instance.data.content
      },
      {
        name: "status",
        placeholder: "Select status..",
        data: [
          {
            label: "Draft",
            value: "draft"
          },
          {
            label: "Pending",
            value: "pending"
          }
        ],
        value: instance.data.status
      },
      {
        name: "publish",
        placeholder: "Publish now?"
      }
    ]
  });

  const selected = (form.getControl("status") as FormControl<string> | undefined)?.data?.[0] ?? null;
  let date = new Date();
  let titleControl: Input;
  let time;
  let value = "";

  onMount(() => {
    setTimeout(() => {
      titleControl.element.focus();
      const length = titleControl.element.value.length;
      titleControl.element.setSelectionRange(length, length);
    }, 100);
  });

  const markdown = `
# h1
asdf

## h2
asdf

### h3
asdf

#### h4
asdf

##### h5
asdf

###### h6
asdf


> xx

123
- [x] Hello
- [ ] World
- [x] Testing
- Remirror
\`\`\`ts
const new = 1
\`\`\`
`;
</script>

<div class="px-1.5">
  <div class="flex w-full flex-col gap-4 rounded-t-2xl border-t-2 border-zinc-900/75 bg-black p-4 shadow-lg shadow-slate-600">
    <div class="flex justify-between gap-2">
      <div class="flex items-start gap-2">
        <Icon icon="icon-park-outline:topic-discussion" class="size-12 text-slate-500" />
        <div class="flex flex-col">
          <div class="text-lg font-bold text-purple-600">{title}</div>
          <div class="-mt-1 text-sm text-slate-600">{description}</div>
        </div>
      </div>
      <div
        class=""
        on:click={() => {
          instance.manager.close("manage-topic");
        }}>
        <Icon icon="mdi:close" class="size-6 cursor-pointer text-slate-800 hover:text-slate-500" />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <!-- <div class="">
        <SveltyPicker bind:value={time} format="hh:ii" displayFormat="HH:ii P" />
      </div> -->
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-10">
          <ControlContainer label="Title">
            <Input bind:this={titleControl} control={form.getControl("title")} autofocus />
          </ControlContainer>
        </div>
        <div class="col-span-2">
          <ControlContainer label="Status">
            <Select control={form.getControl("status")} {selected} />
          </ControlContainer>
        </div>
      </div>
      <ControlContainer label="Content">
        <div class="rounded-lg border-2 border-slate-800 p-2">
          <Editor preview={true} markdown={instance.data.content} />
        </div>
      </ControlContainer>
    </div>
    <div class="flex justify-end gap-2">
      <Button
        on:click={() => {
          confirmOpen("Delete Topic", "Are you sure you want to delete this topic?").subscribe((result) => {
            if (result) {
              console.log("Deleted");
              instance.manager.close("manage-topic");
            }
          });
        }}
        variant="outline">Delete</Button>
      <Button
        variant="default"
        on:click={() => {
          console.log(form.getControl("title")?.value);
          instance.manager.close("manage-topic");
          toast.success("Your changes have been saved!");
        }}>Save</Button>
    </div>
  </div>
</div>
