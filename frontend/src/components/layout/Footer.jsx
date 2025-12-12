import {
  Store,
  Mail,
  Phone,
  ShoppingBag,
  Info,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-tema-100 border-t border-tema-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800">ReuseMart</h3>
                <p className="text-sm text-green-600 font-medium">
                  Go Green, Save Earth
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
              Tempatnya Barang Bekas Berkualitas
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-green-800 font-bold mb-4 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-green-600 rounded"></div>
              Navigasi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/product"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-all group"
                >
                  <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Produk</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-all group"
                >
                  <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Tentang</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-all group"
                >
                  <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Keranjang</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-green-800 font-bold mb-4 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-green-600 rounded"></div>
              Kontak
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="mailto:info@reusemart.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group"
                >
                  <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-600 transition-colors">
                    <Mail className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm break-all font-medium">
                    info@reusemart.com
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/+6282111683365"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group"
                >
                  <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-600 transition-colors">
                    <Phone className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium">Contact Person (Haikal)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-300 mt-10 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ReuseMart.
            <span className="text-green-600 font-medium">
              {" "}
              Sustainability Matters
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
