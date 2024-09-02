---
layout: post
title: Membuat Livestream website seperti Twitch menggunakan NextJS 
image: https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories: ["Web Development"]
tags: ["NextJS", "RTMP", "Websocket", "Docker"]
---

Pernahkan kalian bertanya-tanya bagaimana sebenarnya website live streaming platform seperti Twitch, YouTube Live, dan sejenisnya itu didevelop? Setidaknya penulis penasaran bagaimana para developer hebat di luar sana mengembangkan website yang ringan dan efisien bahkan dapat meng-handle banyak user sekaligus untuk menonton streamer favorite mereka.

<br>
Twitch contohnya jika kalian tidak tahu merupakan anak perusahaan dari Amazon. Ya, Amazon yang menyediakan berbagai services untuk cloud. Jadi tidak heran ya kalau memang perusahaan tersebut dapat menghandle banyak user sekaligus. Tetapi, sebenarnya apa sih dibalik itu? kita akan melihatnya dalam sudut pandang yang lebih simple. Di sini penulis telah membuat website seperti Twitch menggunakan NextJS. Dengan catatan, website ini dibuat hanya untuk edukasi dan menjadikannya pembelajaran dan pengalaman.

<br>
## Apa itu _Streaming_?
Dalam konteks pemrograman, streaming ini merupakan sebuah data yang secara kontinyu terhubung. Jika dianalogikan _streaming_ atau _stream_ ini seperti sebuah sungai dimana air merupakan datanya. Air secara terus menerus berganti dan diteruskan namun tidak tersimpan di satu tempat. Contohnya ketika kamu nonton streaming, maka kamu tidak perlu mendownload videonya, kamu hanya perlu mengaksesnya dan menikmatinya tanpa khawatir penyimpanan kamu harus penuh. 

<br>
## Apa itu _Live Stream_?
Penting: Streaming dan Live Streaming itu berbeda. Streaming dapat dilakukan tanpa harus real time, sedangkan live streaming harus real time. Livestream merupakan sebuah aktivitas menyiarkan sebuah video langsung secara real time tanpa perlu melakukan record terlebih dahulu. Live stream memberikan kita keuntungan seperti dapat menonton langsung video secara langsung dan real-time tanpa perlu mengunduhnya terlebih dahulu. Biasanya para live streamer menggunakan software seperti OBS Studio untuk kemudian diintegrasikan ke platform yang dituju untuk disiarkan. Nah server yang dituju ini merupakan _Ingest Server_.

<br>
## Apa itu _Ingest Server_?
Sederhananya, Ingest Server layaknya server pada umumnya, namun server dapat menerima sebuah media streaming (video, audio, dll.). Ia akan memproses media streaming kamu, mengubah media stream kamu ke beberapa kualitas menggunakan _transcoding_, menyiarkan media streaming kamu ke _backend_ yang dituju, bahkan dapat dikonfigurasi untuk menyimpan media streaming kamu jika server kamu memang memiliki kapasitas yang besar. Biasanya server ini menggunakan protokol RTMP (RealTime Messaging Protocol) untuk menangani media streaming.

<br> 
## RTMP dan HLS
RTMP atau _RealTime Messaging Protocol_ merupakan sebuah protokol berbasis TCP yang digunakan untuk berbagai media streaming seperti audio, video, dan data lainnya. Ini akan kita gunakan sebagai streamer yang menyiarkan streaming mereka.
<br>
HLS atau _HTTP Live Streaming_ merupakan protokol media streaming yang berbasis HTTP. Ini akan kita gunakan sebagai viewer/penonton yang memerlukan video live stream.

<br>
## Hasil Implementasi
Saya akan menunjukkan alur dari aplikasi

<br>
1.Halaman utama 
![Screenshoot Halaman Utama](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img1.png){: .center-image}
<br>
2.Halaman Login/Register
![Screenshoot Halaman Login/Register](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img2.jpeg){: .center-image}

<br>
3.Halaman utama setelah login
![Screenshoot Halaman Utama setelah login](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img3.png){: .center-image}

<br>
4.Halaman Studio - Stream Manager
![Screenshoot Studio Stream Manager](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img4.png){: .center-image}

<br>
5.Copy streamkey ke OBS (Settings > Stream > Custom) dan click Apply
![Setting OBS](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img5.png){: .center-image}

<br>
6. Klik "Start Streaming"
![OBS Start Streaming](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img6.png){: .center-image}

<br>
7.Halaman utama ketika ada streamer streaming
![Halaman utama streamer streaming](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img7.png){: .center-image}

<br>
8.Halaman ketika menonton streamer
![Halaman utama streamer streaming](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img8.png){: .center-image}

<br>
9.Mengirim chat
![Chat](/assets/images/posts//membuat-live-stream-website-seperti-twitch/img9.png){: .center-image}

<br>
## Kesimpulan
Untuk membuat sebuah website streaming diperlukan sebuah Ingest server, Websocket Server, dan NextJS. 

<br>
#### __Source Code__
NextJS Application: [NextJS](https://github.com/cpkal/twitch-clone)
<br>
Ingest Server: [Ingest Server](https://github.com/cpkal/twitch-clone-ingest-server) (Jalankan di Docker jika perlu)
<br>

Websocket Server: [Websocket Server](https://github.com/cpkal/twitch-clone-socket)

<br>
#### Credit: Thumbnail image by [Libby Penner](https://unsplash.com/@libby_penner) on Unsplash 

