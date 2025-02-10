---
layout: post
title: Strapi - Headless CMS favorite admin tanpa harus ribet buat konten
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbz7JMYy9A_3oSCqYh2nREtaaLaze03DCxbQ&s
categories: ["Web Development", "Mobile Development"]
tags: ["Headless CMS", "RESTful API"]
---

CMS atau Content Management System merupakan sebuah konsep perangkat lunak dimana pengguna atau end user dapat membuat, mengelola, dan mempublikasikan konten digital di internet. Mungkin yang pernah terdengar di telinga kita adalah platform CMS seperti Wordpress, Wix, Blogspot, dan lainnya. Namun apa bedanya platform-platform tersebut dengan Strapi? mari kita bahas!

<br>
Strapi merupakan sebuah Headless CMS dimana kita bisa membuat konten digital pada CMS seperti umumnya tetapi terdapat kelebihan sendiri. 

<br>
## Sejarah Headless CMS dan Perbandinganya dengan Tradisional CMS
Dulu kita mengenal Wordpress dan sejenisnya. Teknologi tersebut biasanya disebut dengan Tradisional CMS. CMS tersebut tidak dapat mengikuti perkembangan zaman, dimana kita perlu mengakses konten di berbagai device yang beragam. Seperti Game Console, Smart TV, Smart Watch, IoT, dan lainnya. Tradisional CMS pada dasarnya dibuat untuk device yang umum seperti desktop dan smartphone melalui web browser. Tetapi, karena tantangan yang sebelumnya disebutkan, hal ini akan menjadi masalah karena jangkauan audiens menjadi terbatas. Dari sinilah muncul istilah _Headless CMS_.

![Geeks For Geeks Headless CMS vs Traditional CMS Visualization](https://media.geeksforgeeks.org/wp-content/uploads/20240430163628/Traditional-vs-headless.png){: .center-image}
<p class="text-center">Sumber: GeeksForGeeks</p>


<br>
Headless CMS merupakan cara kita mendeliver sebuah konten digital ke berbagai platform. Headless CMS sendiri menganut _Frontend Agnostic_ yang artinya teknologi ini dapat dikonsumsi diberbagai device dengan ukuran yang berbeda-beda. Headless CMS pada dasarnya akan memberikan sebuah respons API pada setiap konten yang buat. Makanya, dinamakan Headless CMS karena teknologi ini dengan memanfaatkan API dapat dikonsumsi diberbagai device. 

<br>

| Fitur | Tradisional CMS | Headless CMS |
|-------|--------|---------|
| Arsitektur | Tightly Coupled Monolithic (Frontend terikat erat dengan Backend) | Decoupled (Frontend dan Backend terpisah) |
| Deliver Konten | HTML CSS | API-Based (JSON, GrapQL, dll) |
| Flexibility | Berbasiskan template dan kurang fleksibel | Sangat Fleksibel dan kustomisasi frontend |
| Tech Stack | Biasanya MySQL dan PHP | Bebas dikonsumsi bahasa apapun asal mendukung REST API |
| Opsi Frontned | Template dan Tema telah disediakan | Bebas menggunakan frontend dan teknologi modern untuk frontend (React, Vue, Angular, dll.)
| Support | Hanya di Web | Bisa di device apapun asal mendukung internet |
| Contoh Platform | Wordpress, DruPal, Joomla | Strapi, Contentful, Sanity |

<br>

## Strapi In Action
Kita akan coba menggunakan Strapi untuk membuat konten blog sederhana. Hasil akhirnya nanti akan berupa API yang bisa dikonsumsi. Untuk mengikuti tutorial ini kita akan menginstall Strapi v5 dan kalian perlu menginstall:

<br>

Node.js (v18 dan v20)
NPM atau yarn
Python (SQLite)

1.Pertama-tama kita install terlebih dahulu Strapi, lalu download hingga proses selesai

<br>

<code>
    npx create-strapi@latest strapi-blog-jejakanaktekkom
</code>

<br>

2.Kemudian, lakukan konfigurasi berikut
![Konfigurasi Instalasi Strapi](/assets/images/posts/blog-strapi/instalasi.png){: .center-image}

<br>
3. Masuk ke folder project kalian, dalam kasus ini gunakan perintah cd strapi-blog-jejakanaktekkom dan jalankan npm run develop

<br>

![Run Strapi](/assets/images/posts/blog-strapi/run-strapi.png){: .center-image}

<br>
4. Masuk ke link yang tertera di console lalu buat akun untuk admin


<br>

![Register Admin Strapi](/assets/images/posts/blog-strapi/register-admin.png){: .center-image}

<br>


![Register Admin Success Strapi](/assets/images/posts/blog-strapi/register-admin-success.png){: .center-image}

<br>
5. Untuk membuat blog/artikel, kita akan membuat sesederhana mungkin, kali ini struktur artikel hanya akan berupa sebuah judul, cover, konten, dan author yang membuatnya. Strapi sendiri sebelum kita mendefiniskan sebuah fitur, kita definisikan terlebih dahulu data struktur dari konten yang akan kita buat. Entitas disini terdapat 2 yaitu Author dan Blog/Article. Author kita berikan data struktur seperti nama, nomor telepon dan alamat. Lalu Blog/Article atau kita sebut saja Post kita beri struktur seperti yang telah disebutkan yaitu judul, cover, dan konten.

<br>


Di Strapi sendiri terdapat sebuah fitur bernama *Content Type Builder*. Di sini kamu akan mendefiniskan data struktur tadi. Pertama kita buat Author terlebih dahulu.
![Buat content type author dengan builder](/assets/images/posts/blog-strapi/create-content-type.png){: .center-image}

<br>



Kita akan pilih author struktur datanya seperti yang telah disebutkan dengan tipe data text. Kita tambahkan field tersebut dengan text
![Fields untuk Author model](/assets/images/posts/blog-strapi/fields-author.png){: .center-image}

<br>


Jika selesai tinggal klik save saja.

Kemudian, kita akan membuat Content Type untuk Post
![Buat content type post dengan builder](/assets/images/posts/blog-strapi/create-post.png){: .center-image}

<br>

untuk fields type kita akan gunakan text pada title, media untuk cover, dan richtext WYSIWYG untuk konten

<br>


Untuk cover, kita gunakan media dengan setting Single Media, karena kita perlu hanya satu gambar saja untuk cover, lalu di advance setting kita hanya perlu tipe gambar saja, uncheck audio dan video
![Media Cover](/assets/images/posts/blog-strapi/create-post.png){: .center-image}
![Image only cover](/assets/images/posts/blog-strapi/image-only.png){: .center-image}

<br>

Untuk field content, kita pilih jenis Rich text

Lalu untuk menghubungkan artikel dengan author kita buat field relation untuk menghubungkan antar 2 data model yang berbeda.
![Relation Data Model](/assets/images/posts/blog-strapi/relation.png){: .center-image}

<br>

Dengan pengaturan tersebut, author dapat membuat banyak postingan.  

Hasil dari yang kita lakukan sebelumnya untuk Post harusnya seperti ini, jika sudah klik save
![Fields post](/assets/images/posts/blog-strapi/fields-post.png){: .center-image}

<br>


6.Selesai untuk kita buat data struktur sebuah blog. Sekarang kita hanya perlu mengisi konten seperti pada CMS biasa dengan Content Manager

![Buat konten](/assets/images/posts/blog-strapi/content-manager.png){: .center-image}

<br>


7. Langkah terakhir, buat postingan dapat di akses oleh publik dengan cara ke halaman setting > role permission > post > ceklis find & findOne
![Permission](/assets/images/posts/blog-strapi/permission.png){: .center-image}

<br>

Kita akses dengan masuk ke halaman http://localhost:1337/api/posts maka kita dapat melihat hasil, API ini dapat dikonsumsi di semua frontend
![Rest API](/assets/images/posts/blog-strapi/restapi.png){: .center-image}

