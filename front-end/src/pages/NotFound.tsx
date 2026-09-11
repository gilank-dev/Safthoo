import { Link } from 'react-router-dom';
import { useSeo } from '../utils/seo';

export default function NotFound() {
  useSeo({
    title: '404 — Halaman Tidak Ditemukan · Safthoo',
    description: 'Halaman atau produk yang kamu cari tidak ditemukan di Safthoo. Kembali ke katalog sepatu dan apparel.',
    path: '/404',
    noindex: true,
  });

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 mb-4">
        404 — Halaman Tidak Ditemukan
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-4">
        Halaman Ini Tidak Ada
      </h1>
      <p className="text-stone-500 max-w-md mb-8 leading-relaxed">
        Tautan mungkin salah ketik atau produknya sudah tidak dijual.
        Yuk balik ke katalog dan lihat koleksi lainnya.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="px-6 py-3 bg-stone-900 hover:bg-stone-700 text-white font-semibold text-sm rounded-lg transition-colors"
        >
          Kembali ke Katalog
        </Link>
        <Link
          to="/cart"
          className="px-6 py-3 bg-white hover:bg-stone-100 border border-stone-300 text-stone-900 font-semibold text-sm rounded-lg transition-colors"
        >
          Lihat Keranjang
        </Link>
      </div>
    </div>
  );
}
