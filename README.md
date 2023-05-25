# M-Knows Consulting Frontend Monorepo

## Didalam Repo ini terdapat 3 Aplikasi Berikut

- KampusGratis
- KampusGratis Admin
- LXP
- LXP Admin
- CreditScoring
- CreditScoring Admin

## Demo Aplikasi

- [Development Build KampusGratis](https://mknows-fe-kg.vercel.app/)
- [Production Build KampusGratis](https://mknows-fe-kg.netlify.app/)
- [Development Build KampusGratis Admin](https://mknows-fe-kg-admin.vercel.app/)
- [Production Build KampusGratis Admin](https://mknows-fe-kg-admin.netlify.app/)

- [Development Build LXP](https://mknows-fe-lxp.vercel.app/)
- [Production Build LXP](https://mknows-fe-lxp.netlify.app/)
- [Development Build LXP Admin](https://mknows-fe-lxp-admin.vercel.app/)
- [Production Build LXP Admin](https://mknows-fe-lxp-admin.netlify.app/)

- [Development Build CreditScoring](https://mknows-fe-cs.vercel.app/)
- [Production Build CreditScoring](https://mknows-fe-cs.netlify.app/)
- [Development Build CreditScoring Admin](https://mknows-fe-cs-admin.vercel.app/)
- [Production Build CreditScoring Admin](https://mknows-fe-cs-admin.netlify.app/)

# Cara Menggunakan GIT dengan Baik dan Benar

### Jika Kamu baru di Project ini maka kamu bisa ke Section Installasi

# Cara Berkontribusi di Project Ini

# Di Mohon jangan PUSH Langsung ke Branch "develop"

## Cara Branching

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git checkout -b "improvement/apa-yang-di-improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git checkout -b "bugfix/apa-yang-di-fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git checkout -b "feature/fitur-apa-yang-di-buat`

## Cara Commit

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui

  > `git commit -m "improvement: apa yang di improve`

- Jika kamu bermaksud untuk _Bug Fixing_

  > `git commit -m "bugfix: apa yang di fix`

- Jika kamu bermaksud untuk menambah _Feature_

  > `git commit -m "feature: fitur apa yang di buat`

## Cara Mengatasi Konflik

- 1 Stash dulu kerjaan kamu supaya gak ilang

> `git stash`

- 2 Setelah itu kamu perlu pull perubahan dari branch `develop`

> `git pull origin develop`

- 3 Setelah kamu berhasil melakukan pembaruan dari branch `develop` selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter-_stash_

> `git stash pop`

- 4 Lanjutkan Pekerjaan dengan Semestinya

- 5 Tapi jika ketika melakukan langkah-langkah di atas masih terjadi error konflik atau karena ketololan kamu, maka ikuti langkah yang bawah

## Cara Mengatasi Konflik Versi 2

- 1 Pindah dulu ke Branch `develop`

> `git checkout develop`

- 2 Kemudian pull perubahan terbaru dari branch `develop`

> `git pull`

- 3 Kemudian Pindah lagi ke branch yang sedang kamu kerjakan

> `git checkout <branch mu>`

- 4 Selanjutnya kita perlu merge perubahan terbaru dari `develop`

> `git merge origin develop`

## Rekomendasi Kode Editor

Visual Studio Code

### Rekomendasi Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier
- Error Lens
- ESLint

## Setup Project

- Clone Project ini ( Direkomendasikan menggunakan SSH )

  > `git clone git@github.com:magang-mknows/mknows-fe`

## Install NodeJS dan Yarn

- Anda perlu menginstall dulu NodeJS dan Yarn ( Direkomendasikan menggunakan NodeJS Versi LTS )

  > `npm i -g yarn`

## Install Dependency

- Pasang Dependency

  > `yarn install`

## Menjalankan Development Server

- Untuk menjalankan Project KampusGratis dengan mode Development ketik perintah berikut

  > `yarn kg:serve`

- Untuk menjalankan Project KampusGratis-Admin dengan mode Development ketik perintah berikut

  > `yarn kg-admin:serve`

- Untuk menjalankan Project LXP dengan mode Development ketik perintah berikut

  > `yarn lxp:serve`

- Untuk menjalankan Project LXP-Admin dengan mode Development ketik perintah berikut

  > `yarn lxp-admin:serve`

- Untuk menjalankan Project CreditScoring dengan mode Development ketik perintah berikut

  > `yarn cs:serve`

- Untuk menjalankan Project CreditScoring-Admin dengan mode Development ketik perintah berikut

  > `yarn cs-admin:serve`

## Membuild Aplikasi ke Production

- Untuk membuild Project KampusGratis ketik perintah berikut

  > `yarn kg:build`

- Untuk membuild Project KampusGratis-Admin ketik perintah berikut

  > `yarn kg-admin:build`

- Untuk membuild Project LXP ketik perintah berikut

  > `yarn lxp:build`

  - Untuk membuild Project LXP-Admin ketik perintah berikut

  > `yarn lxp-admin:build`

- Untuk membuild Project CreditScoring ketik perintah berikut

  > `yarn cs:build`

- Untuk membuild Project CreditScoring-Admin ketik perintah berikut

  > `yarn cs-admin:build`

## Development With Nix

Development dengan Nix membuat proses Develop menjadi lebih mudah dan ringkas, semua dependency akan terurus dengan sendirinya, juga independent artinya tidak akan menggangu environment yang lain

- Pasang Nixpkgs

> `sh <(curl -L https://nixos.org/nix/install) --no-daemon`

- Pasang nix-flakes

> `nix-env -iA nixpkgs.nixFlakes`

- Setup nix-flakes \
  Edit file yang ada di `~/.config/nix/nix.conf` atau `/etc/nix/nix.conf` dan tambahkan:

> `experimental-features = nix-command flakes`

- Pasang nix-direnv

> `nix-env -f '<nixpkgs>' -iA nix-direnv`

- Setup nix-direnv

> `source $HOME/.nix-profile/share/nix-direnv/direnvrc`

- Masuk ke folder yang sudah di clone kemudian jalankan perintah berikut

> `direnv allow`

- Dan enjoy tinggal tunggu dependency terinstall dengan sendirinya

## Setup Env KampusGratis

Masuk kedalam folder `apps/kg/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`

## Setup Env KampusGratis-Admin

Masuk kedalam folder `apps/kg-admin/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`

## Setup Env LXP

Masuk kedalam folder `apps/lxp/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`

## Setup Env LXP-Admin

Masuk kedalam folder `apps/lxp-admin/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`

## Setup Env CS

Masuk kedalam folder `apps/cs/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`

## Setup Env CS-Admin

Masuk kedalam folder `apps/cs-admin/` Copy terlebih dahulu `.env.example` kemudian rename ke `.env`

## Setup Husky

Untuk bisa menggunakan husky agar berjalan baik dan benar maka perlu di inisialisasi dulu

- Jalankan perintah
  > `npx husky-init`
