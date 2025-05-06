// ===========================
// Visi dan Misi Sekolah
// ===========================
const visiMisi = {
    visi: "Terwujudnya lulusan SMK Hang Tuah 1 Jakarta yang Nasionalis, Religius, Mandiri, Kompeten, Juara, Berjiwa Bahari, dan Berwawasan Global sehingga Mampu BMW (Bekerja, Melanjutkan Kuliah dan Wirausaha).",
    misi: [
      "Menyelenggarakan pendidikan yang berorientasi untuk membentuk karakter peserta didik yang Nasionalis, Religius, Mandiri, Kompeten, dan Juara;",
      "Membekali peserta didik dengan IMTAQ & IPTEK, jiwa bahari dan wawasan global;",
      "Meningkatkan mutu pendidik, tenaga kependidikan, sarana/prasarana sekolah, dan manajemen sekolah untuk meningkatkan pelayanan yang unggul;",
      "Meningkatkan kolaborasi dengan mitra industri dan pemangku kepentingan lainnya dalam mendukung program-program sekolah;",
      "Memfasilitasi peserta didik agar Mampu BMW (Bekerja, Melanjutkan Kuliah atau Wirausaha)."
    ]
  };
  
  // ===========================
  // Jurusan, Fasilitas, Prestasi
  // ===========================
  const jurusan = ["Akuntansi", "Bisnis Daring", "Administrasi Perkantoran", "Desain Komunikasi Visual", "Rekayasa Perangkat Lunak"];
  
  const fasilitas = [
    "Kelas ber-AC",
    "Lab. Komputer",
    "Perpustakaan",
    "Teaching Factory",
    "Lapangan Olahraga",
    "Masjid",
    "Kantin"
  ];
  
  const prestasi = [
    "Juara 1 LKS Web Desain Tingkat Sudin Jakarta Utara 2 Tahun 2025",
    "Juara 1 LKS Cloud Computing Jakarta Utara 2 Tahun 2025",
    "Juara 1 LKS IT for Business Tingkat Sudin Jakarta Utara 2 Tahun 2025",
    "Juara 3 LKS Bisnis Daring Tingkat Sudin Jakarta Utara 2 Tahun 2025",
    "Juara 3 LKS Web Desain Tingkat Sudin Jakarta Utara 2 Tahun 2025"
  ];
  
  // ===========================
  // Data Guru
  // ===========================
  const dataGuru = [
    {
      nama: "Farah Hidayatul Afifah, S.T.",
      tempatLahir: "Jakarta",
      tanggalLahir: "1980-05-15",
      kelamin: "Perempuan",
      agama: "Islam",
      alamat: "Jl. Merdeka No.1, Jakarta",
      mapel: "Rekayasa Perangkat Lunak",
      foto: "img/guru1.jpg"
    },
    {
      nama: "Dede Mulyana",
      tempatLahir: "Bandung",
      tanggalLahir: "1985-08-20",
      kelamin: "Laki-Laki",
      agama: "Islam",
      alamat: "Jl. Pelajar No.45, Jakarta",
      mapel: "Pengembangan Gim",
      foto: "img/guru2.jpeg"
    },
    {
      nama: "Rika Yunita",
      tempatLahir: "Bogor",
      tanggalLahir: "1978-03-12",
      kelamin: "Perempuan",
      agama: "Islam",
      alamat: "Jl. Kenanga No.3, Jakarta",
      mapel: "Matematika",
      foto: "img/guru3.jpg"
    }
  ];
  
  // ===========================
  // Data Siswa
  // ===========================
  const dataSiswa = {
    nis: "00646278",
    nama: "Henry Rizki Nur Afit",
    kelas: "XII RPL ",
    tempatLahir: "Jakarta",
    tanggalLahir: "2006-12-20",
    kelamin: "Laki-laki",
    agama: "Islam",
    alamat: "Jl. Tabah Raya",
    citaCita: "Programmer",
    foto: "img/siswa1.jpg"
  };
  
  // ===========================
  // Jadwal Pembelajaran
  // ===========================
  const jadwal = {
    Senin: ["Bahasa Indonesia", "Matematika", "Pendidikan Agama"],
    Selasa: ["Dasar Program Keahlian", "Bahasa Inggris", "Pengembangan Gim"],
    Rabu: ["Matematika", "Rekayasa Perangkat Lunak", "Bahasa Indonesia"],
    Kamis: ["Pendidikan Pancasila", "Pengembangan Gim", "Pendidikan Agama"],
    Jumat: ["Bahasa Inggris", "Dasar Program Keahlian", "Rekayasa Perangkat Lunak"]
  };
  
  // ===========================
  // Data Nilai Rapor
  // ===========================
  const nilaiRapor = {
    siswa: {
    nis: "00646278",
    nama: "Henry Rizki Nur Afit",
    kelas: "XII RPL ",
    Tahun: "2024-2025"
    },
    mataPelajaranUmum: [
      { mapel: "Pendidikan Agama", nilai: 85 },
      { mapel: "Pendidikan Pancasila", nilai: 80 },
      { mapel: "Bahasa Indonesia", nilai: 88 },
      { mapel: "Bahasa Inggris", nilai: 90 },
      { mapel: "Matematika", nilai: 82 }
    ],
    mataPelajaranKejuruan: [
      { mapel: "Dasar Program Keahlian", nilai: 87 },
      { mapel: "Rekayasa Perangkat Lunak", nilai: 92 },
      { mapel: "Pengembangan Gim", nilai: 89 }
    ]
  };
  