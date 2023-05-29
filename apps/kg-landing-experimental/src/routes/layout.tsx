import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="flex items-center w-full h-screen justify-center">
      <Slot />
    </section>
  );
});
