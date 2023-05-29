import { atom, selectorFamily } from "recoil";
import { DictionaryType } from "./constant";

export const GuideDictionaryState = atom<Array<DictionaryType>>({
  key: "option-dictionary-state",
  default: [
    {
      id: "1",
      title: "Batch",
      description: "Batch merupakan angkatan dari program pelatihan yang sedang diikuti.",
      slug: "batch",
    },
    {
      id: "2",
      title: "Poin",
      description:
        "Nilai keseluruhan karyawan dari beban pelatihan yang ia ambil. Poin digunakan sebagai predikat kelulusan karyawan.",
      slug: "poin",
    },
    {
      id: "3",
      title: "Nilai",
      description: "Merupakan representasi hasil dari tes yang dilakukan yang berupa angka.",
      slug: "nilai",
    },
    {
      id: "4",
      title: "Program Pelatihan",
      description:
        "Kesatuan rencana belajar sebagai pedoman penyelenggaraan pendidikan akademik dan atau profesional atas dasar suatu kurikulum.",
      slug: "program-pelatihan",
    },
    {
      id: "5",
      title: "Huruf Index",
      description:
        "Adalah singkatan dari “Indeks Prestasi,” yang artinya sama seperti nilai akhir batch.",
      slug: "huruf-index",
    },
    {
      id: "6",
      title: "Mentor",
      description:
        "Tenaga pengajar yang memiliki tugas utama mengajar, membimbing, dan atau melatih karyawan.",
      slug: "mentor",
    },
  ],
});

export const queryOptionDictionary = atom({
  key: "query-option-dictionary",
  default: "",
});

export const filterOptionDictionary = selectorFamily({
  key: "filter-option-dictionary",
  get:
    (query: string) =>
    ({ get }) =>
      get(GuideDictionaryState).filter((item) => (item.slug as unknown as string).includes(query)),
});
