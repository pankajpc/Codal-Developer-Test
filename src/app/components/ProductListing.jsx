"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

export default function ProductListing({ filters = { brand: [] } }) {
  const [sortBy, setSortBy] = useState("price-high-to-low");
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 6;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setAllProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle filtering and sorting separately
  useEffect(() => {
    if (allProducts.length === 0) return;

    const filteredProducts = allProducts.filter(
      (product) =>
        !filters.brand ||
        filters.brand.length === 0 ||
        filters.brand.includes(product.brand)
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortBy === "price-high-to-low") {
        return b.price - a.price;
      } else if (sortBy === "price-low-to-high") {
        return a.price - b.price;
      }
      return 0;
    });

    setDisplayProducts(sortedProducts);
    setCurrentPage(1);
  }, [filters, sortBy, allProducts]);

  if (loading) {
    return <div className="text-white text-center">Loading products...</div>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(displayProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-[#222222] text-center">Loading products...</div>
    );
  }

  return (
    <div className="bg-[#ffffff] text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-[#9CA3AF] hover:text-[#9CA3AF]">
                Browse Categories
              </a>
              <ChevronRight className="h-4 w-4 mx-2 text-[#707070]" />
            </li>
            <li className="flex items-center">
              <a href="#" className="text-[#9CA3AF] hover:text-[#9CA3AF]">
                Lubricants
              </a>
              <ChevronRight className="h-4 w-4 mx-2 text-[#707070]" />
            </li>
            <li className="text-[#222222]">Hydraulic Fluids</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-[#222222]">
          Hydraulic Fluids
        </h1>
        <p className="text-[#222222] mb-8 text-sm">
          Hydraulic oil is a fluid that has several functions. It serves as an
          energy transfer or power transmission medium, lubricant, and sealant.
          Also, it is a fluid that cools the equipment and carries contaminants
          away. Based on the division of hydraulics into hydrodynamics and
          hydrostatics, we have different hydraulic fluids. Firstly, hydraulic
          fluids for hydrodynamic applications are called power-transmission
          oils. Secondly, hydraulic fluids for hydrostatic application are
          called hydraulic oils.{" "}
          <a href="#" className="text-[#3B82F6] hover:underline">
            Read more.
          </a>
        </p>

        <div>
          <div className="flex flex-col space-y-4 mb-6 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <div className="text-sm text-[#9CA3AF] order-2 sm:order-1 text-center">
              Showing {indexOfFirstProduct + 1} -{" "}
              {Math.min(indexOfLastProduct, displayProducts.length)} of{" "}
              {displayProducts.length}
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 order-1 sm:order-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#9CA3AF]">Sort By:</span>
                <div className="relative flex-grow sm:flex-grow-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-auto appearance-none bg-[#1F2937] border border-[#4B5563] text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-[#9CA3AF] text-sm"
                  >
                    <option value="price-high-to-low">
                      Price: High to Low
                    </option>
                    <option value="price-low-to-high">
                      Price: Low to High
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9CA3AF]">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
