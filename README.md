# Frontend Assessment - PT Kledo

Proyek ini merupakan hasil pengerjaan assessment untuk posisi **Frontend Developer** di PT Kledo.

## Deskripsi Proyek

Aplikasi **Filter Wilayah Indonesia** yang memungkinkan pengguna untuk memilih wilayah secara hierarkis (Provinsi → Kota/Kabupaten → Kecamatan) dengan fitur-fitur berikut:

### Fitur Utama

1. **Cascading Filter** - Dropdown yang saling terkait:
   - Pilih Provinsi → Kota/Kabupaten terfilter sesuai provinsi
   - Pilih Kota/Kabupaten → Kecamatan terfilter sesuai kota/kabupaten

2. **Persistensi Data** - Filter state disimpan di `localStorage` sehingga pilihan tetap tersimpan meskipun browser di-refresh

3. **Reset Filter** - Tombol untuk menghapus semua pilihan filter

4. **Responsive Design** - Layout yang menyesuaikan dengan berbagai ukuran layar (mobile, tablet, desktop)

5. **Sidebar Toggle** - Sidebar dapat dibuka/tutup dengan animasi smooth

6. **GPU-Accelerated Animations** - Animasi yang smooth menggunakan CSS transform3d

## Tech Stack

- **React 18** - Library UI
- **TypeScript** - Type safety
- **React Router DOM 6** - Routing dengan data loader
- **Tailwind CSS 3** - Styling utility-first
- **Vite** - Build tool & dev server

## Struktur Komponen

```
src/
├── components/
│   ├── Sidebar.tsx      # Panel filter dengan dropdown cascading
│   ├── Breadcrumb.tsx   # Navigasi breadcrumb
│   └── MainContent.tsx  # Area konten utama
├── loaders/
│   └── regionLoader.ts  # Data loader untuk React Router
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx              # Komponen utama
├── main.tsx             # Entry point
└── index.css            # Tailwind styles & custom animations
```

## Spesifikasi Teknis

### Combobox Names
- `province` - Dropdown provinsi
- `regency` - Dropdown kota/kabupaten
- `district` - Dropdown kecamatan

### Element Specifications
- Breadcrumb menggunakan class `breadcrumb`
- Main content menggunakan tag `<main>`

### LocalStorage
- Key: `regionFilter`
- Format: `{ province: string, regency: string, district: string }`

## Cara Menjalankan

### Prerequisites
- Node.js >= 18
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/RizqyNurfauzella/FE-DEV-PT.Kledo-Assessmen.git

# Masuk ke direktori
cd FE-DEV-PT.Kledo-Assessmen

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

## Screenshot

Aplikasi menampilkan:
- Sidebar dengan 3 dropdown filter (Provinsi, Kota/Kabupaten, Kecamatan)
- Breadcrumb yang menunjukkan path navigasi
- Main content yang menampilkan wilayah yang dipilih

## Author

**Rizqy Nurfauzella**

---

*Dibuat sebagai bagian dari assessment Frontend Developer PT Kledo*
