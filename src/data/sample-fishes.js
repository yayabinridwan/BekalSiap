// This is just some sample data so you don't have to think of your own!
const listMenu = {
  "penyakit": {
    "autisme": {
      "0": {
        "pic": "https://res.cloudinary.com/bekalsiap/image/upload/v1541123097/Mie_tpung_beras.png",
        "name": "Mie Tepung Beras",
        "description": "Nilai gizi per porsi:, Energi: 133 Kal, Protein: 3,4 g, Lemak: 1,5 g, Karbohidrat: 25,5 g",
        "totalCal": "133",
        "harga": 30000
      },
      "1": {
        "pic": "https://res.cloudinary.com/bekalsiap/image/upload/v1541123098/One_spot_view.png",
        "name": "One Spot View",
        "description": "Nilai gizi per porsi:, Energi: 287 Kkal, Protein: 20, g, Lemak: 14,3 g, Karbohidrat: 13,2 g",
        "totalCal": "287",
        "harga": 30000
      },
      "2": {
        "pic": "https://res.cloudinary.com/bekalsiap/image/upload/v1541123098/Caneloni.png",
        "name": "Caneloni Beras",
        "description": "Nilai gizi per porsi:, Energi: 212 Kkal, Protein: 14,4 g, Lemak: 11,5 g, Karbohidrat: 11,0",
        "totalCal": "212",
        "harga": 30000
      },
      "3": {
        "pic": "https://img-global.cpcdn.com/003_recipes/657a7f586e75d47f/260x366cq50/photo.jpg",
        "name": "Shirataki Goreng",
        "description": "Makanan ini mengandung air hampir 97% dan 3% serat. ",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "4": {
        "pic": "https://img-global.cpcdn.com/003_recipes/602d0cdb4f7e3391/751x532cq70/photo.jpg",
        "name": "Sop Bihun Jamur",
        "description": "Makanan sumber karbohidrat yang tidak mengandung gluten misalnya beras, singkong, ubi, talas, jagung, tepung beras, tapioca, ararut, maizena, bihun, soun, dsb",
        "totalCal": "135",
        "harga": 30000,
        "status": "available"
      },
      "5": {
        "pic": "https://img-global.cpcdn.com/003_recipes/ba41b9f5acef10ca/751x532cq70/photo.jpg",
        "name": "Tiwul Goreng",
        "description": "Tiwul mengandung kalori yang lebih rendah dibandingkan beras, namun cukup memenuhi kebutuhan tubuh.",
        "totalCal": "435",
        "harga": 30000,
        "status": "available"
      },
      "6": {
        "pic": "https://img-global.cpcdn.com/003_recipes/8c3e38a4d1017756/751x532cq70/photo.jpg",
        "name": "Sup Kwetiauw Daging",
        "description": "Kwetiau adalah jenis pasta yang semi- transparan yang terbuat dari tepung beras dan air . Kebanyakan sangat panjang dan tipis , tetapi kamu juga dapat menemukan kwetiau yang datar. Tepung beras adalah tepung yang terbuat dari beras dengan proses penggilingan. Mengandung karbohidrat, kalsium, protein, zat besi dan vitamin C, sehingga banyak manfaatnya. ",
        "totalCal": "435",
        "harga": 30000,
        "status": "available"
      }
    },
    "diabetes": {
      "0": {
        "pic": "https://img-global.cpcdn.com/003_recipes/2d45de3e00d89580/751x532cq70/photo.jpg",
        "name": "Mash Potatoes",
        "description": "Kentang tumbuk juga menilai tinggi pada indeks glikemik, alat yang mengukur dampak makanan pada tingkat gula darah. Makanan serat tinggi yang tidak diolah, seperti gandum utuh dan kebanyakan buah dan sayuran, cenderung makanan rendah glikemik karena serat memperlambat laju peningkatan gula darah. Pemrosesan dan memasak sering meningkatkan indeks glikemik makanan. Makanan tinggi glikemik memiliki peringkat 70 atau lebih. Laporan indeks glikemik Universitas Sydney melaporkan bahwa kentang tumbuk memiliki indeks glikemik 83. Kentang tumbuk instan memiliki indeks glikemik 87, menurut Harvard Health Publications. Jika Anda mengikuti diet indeks glikemik untuk mengontrol diabetes Anda, makanlah porsi kecil makanan glikemik tinggi, seperti kentang tumbuk, dan seimbangkan mereka dengan makanan rendah glisemik dalam makanan Anda.",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "1": {
        "pic": "https://img-global.cpcdn.com/003_recipes/657a7f586e75d47f/260x366cq50/photo.jpg",
        "name": "Shirataki Goreng (FREE MSG)",
        "description": "Shirataki sendiri makin populer saat berbagai diet yang melarang konsumsi karbohidrat, gula, dan gluten menjamur. Makanan ini mengandung air hampir 97% dan 3% serat. Manfaatnya mulai dari membantu mengontrol konsumsi gula untuk pengidap diabetes, membantu mengontrol tekanan darah, meningkatkan fungsi metabolisme, mempercantik kulit, dan tentunya menurunkan berat badan.",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "2": {
        "pic": "https://img-global.cpcdn.com/003_recipes/602d0cdb4f7e3391/751x532cq70/photo.jpg",
        "name": "Sop Bihun Jamur",
        "description": "Makanan sumber karbohidrat yang tidak mengandung gluten misalnya beras, singkong, ubi, talas, jagung, tepung beras, tapioca, ararut, maizena, bihun, soun, dsb",
        "totalCal": "135",
        "harga": 30000,
        "status": "available"
      },
      "3": {
        "pic": "https://img-global.cpcdn.com/003_recipes/ba41b9f5acef10ca/751x532cq70/photo.jpg",
        "name": "Tiwul Goreng",
        "description": "Tiwul mengandung kalori yang lebih rendah dibandingkan beras, namun cukup memenuhi kebutuhan tubuh. Tiwul juga dipercaya dapat mencegah penyakit maag, perut keroncongan, dan lain-lain. Di daerah madiun Jawa Timur, tiwul dikonsumsi dengan mencampurkan jagung kedalamnya. Hal ini dipercaya dapat menyembuhkan berbagai penyakit, seperti diabetes,dan darah tinggi. Selain itu sumber vitamin B kompleks dan beberapa kelompok vitamin lainnya dapat membantu  pertumbuhan tubuh dan memproduksi sel darah merah untuk mengurangi anemia serta tidak mengandung gluten",
        "totalCal": "435",
        "harga": 30000,
        "status": "available"
      },
      "4": {
        "pic": "https://img-global.cpcdn.com/003_recipes/8c3e38a4d1017756/751x532cq70/photo.jpg",
        "name": "Sup Kwetiauw Daging",
        "description": "Kwetiau adalah jenis pasta yang semi- transparan yang terbuat dari tepung beras dan air . Kebanyakan sangat panjang dan tipis , tetapi kamu juga dapat menemukan kwetiau yang datar. Tepung beras adalah tepung yang terbuat dari beras dengan proses penggilingan. Mengandung karbohidrat, kalsium, protein, zat besi dan vitamin C, sehingga banyak manfaatnya. ",
        "totalCal": "435",
        "harga": 30000,
        "status": "available"
      }
    },
    "hipertensi": {
      "0": {
        "pic": "https://img-global.cpcdn.com/003_recipes/657a7f586e75d47f/260x366cq50/photo.jpg",
        "name": "Shirataki Goreng (FREE MSG)",
        "description": "Shirataki sendiri makin populer saat berbagai diet yang melarang konsumsi karbohidrat, gula, dan gluten menjamur. Makanan ini mengandung air hampir 97% dan 3% serat. Manfaatnya mulai dari membantu mengontrol konsumsi gula untuk pengidap diabetes, membantu mengontrol tekanan darah, meningkatkan fungsi metabolisme, mempercantik kulit, dan tentunya menurunkan berat badan.",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "1": {
        "pic": "https://img-global.cpcdn.com/003_recipes/602d0cdb4f7e3391/751x532cq70/photo.jpg",
        "name": "Sop Bihun Jamur",
        "description": "Makanan sumber karbohidrat yang tidak mengandung gluten misalnya beras, singkong, ubi, talas, jagung, tepung beras, tapioca, ararut, maizena, bihun, soun, dsb",
        "totalCal": "135",
        "harga": 30000,
        "status": "available"
      },
      "2": {
        "pic": "https://img-global.cpcdn.com/003_recipes/ba41b9f5acef10ca/751x532cq70/photo.jpg",
        "name": "Tiwul Goreng",
        "description": "Tiwul mengandung kalori yang lebih rendah dibandingkan beras, namun cukup memenuhi kebutuhan tubuh. Tiwul juga dipercaya dapat mencegah penyakit maag, perut keroncongan, dan lain-lain. Di daerah madiun Jawa Timur, tiwul dikonsumsi dengan mencampurkan jagung kedalamnya. Hal ini dipercaya dapat menyembuhkan berbagai penyakit, seperti diabetes,dan darah tinggi. Selain itu sumber vitamin B kompleks dan beberapa kelompok vitamin lainnya dapat membantu  pertumbuhan tubuh dan memproduksi sel darah merah untuk mengurangi anemia serta tidak mengandung gluten",
        "totalCal": "435",
        "harga": 30000,
        "status": "available"
      },
      "3": {
        "pic": "https://img-global.cpcdn.com/003_recipes/8c3e38a4d1017756/751x532cq70/photo.jpg",
        "name": "Sup Kwetiauw Daging",
        "description": "Kwetiau adalah jenis pasta yang semi- transparan yang terbuat dari tepung beras dan air . Kebanyakan sangat panjang dan tipis , tetapi kamu juga dapat menemukan kwetiau yang datar. Tepung beras adalah tepung yang terbuat dari beras dengan proses penggilingan. Mengandung karbohidrat, kalsium, protein, zat besi dan vitamin C, sehingga banyak manfaatnya. ",
        "totalCal": "435",
        "harga": 30000,
        "status": "available"
      }
    },
    "gagal-ginjal": {
      "0": {
        "pic": "https://img-global.cpcdn.com/003_recipes/657a7f586e75d47f/260x366cq50/photo.jpg",
        "name": "Shirataki Goreng (FREE MSG)",
        "description": "Shirataki sendiri makin populer saat berbagai diet yang melarang konsumsi karbohidrat, gula, dan gluten menjamur. Makanan ini mengandung air hampir 97% dan 3% serat. Manfaatnya mulai dari membantu mengontrol konsumsi gula untuk pengidap diabetes, membantu mengontrol tekanan darah, meningkatkan fungsi metabolisme, mempercantik kulit, dan tentunya menurunkan berat badan.",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "1": {
        "pic": "https://img-global.cpcdn.com/003_recipes/e7c924ec12ad0cdb/751x532cq70/photo.jpg",
        "name": "Nasi Goreng Jamur Enoki",
        "description": "",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "2": {
        "pic": "https://img-global.cpcdn.com/003_recipes/d521f286cae74941/751x532cq70/photo.jpg",
        "name": "Tumis Bokchoy-Jamur ",
        "description": "",
        "totalCal": "50",
        "harga": 30000,
        "status": "available"
      },
      "3": {
        "pic": "https://img-global.cpcdn.com/003_recipes/f432a439df727514/751x532cq70/photo.jpg",
        "name": "Sauteed Mushroom ",
        "description": "",
        "totalCal": "50",
        "harga": 30000
      }
    }
  },
  "subscribe": {
    "paket": {
      "0":{
        "pic": "https://res.cloudinary.com/bekalsiap/image/upload/v1541325062/3hari.png",
        "name": "3 hari",
        "harga": 270000
      },
      "1": {
        "pic": "https://res.cloudinary.com/bekalsiap/image/upload/v1541325062/7hari.png",
        "name": "7 hari",
        "harga": 567000
      },
      "2": {
        "pic": "https://res.cloudinary.com/bekalsiap/image/upload/v1541324942/30hari.png",
        "name": "30 hari",
        "harga": 2295000
      }
    }
  }
}

export default listMenu;
