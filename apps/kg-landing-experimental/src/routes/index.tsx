import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <h1 class="text-black font-bold text-4xl">Hallo this is Landing KG Build With </h1>;
});

export const head: DocumentHead = {
  title: "Kampus Gratis",
  meta: [
    {
      name: "Kampus Gratis Landing Page",
      content: "Kampus Gratis adalah Website",
    },
  ],
};
