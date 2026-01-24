import Link from 'next/link';

import { TopBar } from '../components/TopBar';
import { PRODUCTS } from '../config/products';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const ProductsList = () => (
  <div className="font-sans text-gray-900 antialiased">
    <Meta
      title={AppConfig.site_name}
      description="Discover our range of professional software tools"
    />
    <TopBar />
    <main className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-center text-4xl font-bold">Our Products</h1>
      <p className="mb-12 text-center text-xl text-gray-600">
        Professional software tools for your business needs
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
              <h3 className="mb-3 text-lg text-gray-700">{product.title}</h3>
              <p className="mb-4 text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/products/${product.id}`}
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn More
                </Link>
                <a
                  href={product.payhipLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} {AppConfig.site_name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default ProductsList;
