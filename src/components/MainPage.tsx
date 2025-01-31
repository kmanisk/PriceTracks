import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import HeroCarousel from "@/components/HeroCarousel";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const HomePage = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="head-text">
              Price
              <span className="text-blue-400">Pal</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            {/* Custom Input for Search */}
            <Input
              placeholder="Search products..."
              className="mt-6 p-4 rounded-md border border-gray-300"
            />

            {/* Custom Button */}
            <Button className="mt-4">Explore</Button>
          </div>

          <HeroCarousel />
        </div>
      </section>

      {/* Trending Section (Unchanged) */}
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
