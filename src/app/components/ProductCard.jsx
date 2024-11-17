import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }) {
  return (
    <div className="bg-[#ffffff] border border-[#EBEBEB] rounded-lg overflow-hidden px-4 py-5">
      <div className="aspect-[3/2] bg-[#374151] relative">
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div >
        <p className="text-[#9CA3AF] text-sm mb-1">{product.brand}</p>
        <h3 className="text-[#222222] text-2xl font-medium mb-1">{product.name}</h3>
        <p className="text-[#9CA3AF] text-sm mb-1">SKU: {product.sku}</p>
        {product.multipleSizes && (
          <p className="text-[#4ADE80] text-sm mb-2">
            Multiple Sizes Available
          </p>
        )}
        <div className="flex justify-between items-center mt-2">
          <div className="text-[#222222] font-semibold">
            From <br />{" "}
            <span className="text-3xl">${product.price.toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-4 w-full text-center">
          <Link
            href="#"
            className="bg-[#FFBA00] hover:bg-[#F59E0B] block text-black font-bold py-2 px-4 rounded text-sm transition-colors"
          >
            VIEW PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;