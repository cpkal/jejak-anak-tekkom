---
layout: post
title: Belajar menggunakan Git [PART 1]
image: https://book.git-scm.com/images/logos/2color-lightbg@2x.png
categories: ["Web Development"]
tags: ["Git", "VCS", "Team Management"]
---

Di industri Software Development, tidak ada yang bekerja secara mandiri mengerjakan seluruh aplikasi, pasti akan ada sebuah tim yang bekerja sama untuk menanganinya. Bekerja secara tim artinya perlu koordinasi dan komunikasi antar anggota tim. Pastinya, ada tugas-tugas yang telah ditentukan pada setiap anggota tim.

<br>
Sebut saja tim A dari perusahaan X memiliki tugas untuk mengembangkan website permintaan klien mereka. Website tersebut merupakan website ecommerce, pastinya banyak fitur-fitur yang harus ditugaskan ke masing-masing anggota untuk dikerjakan dan layak diuji. Kemudian, Tim tersebut memiliki sebuah cara untuk berkoordinasi dan bekerja sama satu sama lain, website yang mereka kembangkan menggunakan __Git__ dan __Github__ untuk __Version Control System__ dan __Remote Repository__ mereka.

<br>

## Apa itu _Version Control System_ dan _Remote Repository_?
Version control system merupakan sebuah software yang digunakan sebagai alat yang membantu sebuah tim untuk mengatur _source code_ mereka jikalau terjadi perubahan oleh anggota tim. Hal tersebut akan menjadi keuntungan besar untuk sebuah tim agar dapat bekerja sama untuk mengerjakan bagian-bagian mereka. 

<br>
Remote Repository contohnya [Github](https://github.com) merupakan salah satunya adalah sebuah website yang dapat digunakan untuk menghosting _source code_ kalian. Biasanya juga, website-website seperti ini menyediakan fitur untuk _automation deployment_ dimana kalian dapat menggunakananya untuk deploy aplikasi ke production secara otomatis dengan mengkonfigurasi beberapa file saja untuk berfungsi. Masalah deploy ulang secara manual dan repetitif dapat diatasi.

<br>
## Instalasi Git
Untuk instalasi Git pada masing-masing sistem operasi yang kalian gunakan, dapat menggunakan link ini __[Instalasi Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)__

<br>
## Git Command
Git command ini biasanya perintah yang kalian dapat kalian eksekusi pada terminal kalian untuk memanfaatkan fitur-fitur Version Control dari Git.
Berikut merupakan perintah-perintah umum yang biasanya digunakan:

<br>
### git init
Perintah ini digunakan untuk inisialisasi Git, biasanya akan membuat folder `.git`.
### git status
Perintah ini digunakan untuk melihat informasi-informasi seperti, kalian ada di _branch_ mana, file telah dimodifikasi, dihapus, dan ditambahkan dimana. 

### git add 
Perintah ini digunakan untuk menambahkan file pada 'Staging Area'

### git commit
Perintah ini digunakan untuk menyimpan perubahan pada repository lokal kalian.

### git push
Perintah ini digunakan untuk menyimpan aplikasi kalian ke _Remote Repository_ yang telah kalian tentukan

### git pull
Perintah ini digunakan untuk mengambil perubahan pada _Remote Repository_ kalian jika _Local Repository_ tertinggal beberapa commit dan langsung menggabungkannya dengan branch lokal kalian

### git fetch
Perintah ini sama seperti pull, namun tidak menggabungkannya langsung dengan local branch.

### git log
Perintah ini menampilkan _log_ dari _commit_ terdahulu.

### git checkout
Perintah ini digunakan untuk membuat branch, berpindah branch, atau kembali ke commit tertentu.


### git merge
Perintah ini digunakan untuk menggabungkan branch

### git tag
Perintah ini untuk memberi tag, biasanya versi dari aplikasi kalian jika sudah rilis maupun jika ingin menandakan update terbaru

<br>
## Contoh Penggunaan Git
Buat sebuah file dengan format apapun asalkan kalian dapat modifikasi isi file tersebut, di sini penulis menggunakan format `.txt`. 
Lalu isi file tersebut dengan teks apapun, nantinya akan kita ubah atau kita tambahkan teksnya.
![Isi File](/assets/images/posts//belajar-git-part-1/img1.png){: .center-image}

<br>
Gunakan perintah `git init` dan pastikan kalian menjalankan perintah tersebut pada terminal dan direktori folder yang tepat.
![Git init](/assets/images/posts/belajar-git-part-1/img2.png){: .center-image}

<br>
Lalu, coba ketikkan perintah `git status`, maka kalian dapat melihat bahwa file tersebut belum masuk pada _Staging Area_
![Git init](/assets/images/posts/belajar-git-part-1/img3.png){: .center-image}

<br>
Kemudian, coba jalankan perintah `git add.`, dengan perintah ini, maka file akan berada pada _Staging Area_ dan jika kalian jalankan `git status` lagi, maka warna akan berubah menjadi hijau menandakan file telah berada di _Staging Area_.
![Git init](/assets/images/posts/belajar-git-part-1/img4.png){: .center-image}

<br>
Selanjutnya, jalankan perintah `git commit`. Perintah ini akan menyimpan file maupun folder pada _Staging Area_ dan melakukan _snapshot_ dari keadaan file maupun folder pada waktu tertentu. Dengan perintah ini, kalian bisa kembali ke _commit_ sebelumnya untuk melakukan _rollback_. Mungkin skenario ini cocok untuk bug pada update aplikasi terbaru, dan melakukan rollback dimana ketika bug tersebut tidak ada. 
![Git init](/assets/images/posts/belajar-git-part-1/img5.png){: .center-image}

<br>
Coba tambahkan teks pada file kalian. 
![Git init](/assets/images/posts/belajar-git-part-1/img6.png){: .center-image}

<br>
Lalu coba jalankan perintah lagi dimulai dari `git status` hingga `git commit` seperti pada langkah sebelumnya.
![Git init](/assets/images/posts/belajar-git-part-1/img7.png){: .center-image}

<br>
Kemudian, jalankan perintah `git log` untuk melihat riwayat `commit`. Riwayat ini biasanya menampilkan _branch_ kamu sekarang dan daftar dari _commit_ ini seperti: commit 99ed602445b66af5bb154ba1989f29f857dcc429
![Git init](/assets/images/posts/belajar-git-part-1/img8.png){: .center-image}

<br>
Untuk melakukan _rollback_ ke _commit_ sebelumnya, jalankan perintah `git checkout` dan masukkan `commit-id` yang terlihat pada gambar sebelumnya, masukkan hanya teks randomnya saja, tidak dengan teks `commit` awalan.
![Git init](/assets/images/posts/belajar-git-part-1/img9.png){: .center-image}

<br>
Jika kalian lihat dengan perintah `git branch` kalian akan berada di branch baru dan file kalian akan kembali seperti awal sebelum melakukan perubahan menambahkan teks
![Git init](/assets/images/posts/belajar-git-part-1/img10.png){: .center-image}
<br>
![Git init](/assets/images/posts/belajar-git-part-1/img11.png){: .center-image}

<br>

## Penutup
Dengan demikian, belajar Git Part 1 telah selesai. Pada artikel selanjutnya, penulis akan membahas penggunaan Github sebagai _Remote Repository_ dan beberapa perintah Git yang belum kita bahas pada artikel ini. 

<br>
#### Credit Thumbnail Image: Git Logo by Jason Long, licensed under Creative Commons Attribution 3.0 Unported License.
