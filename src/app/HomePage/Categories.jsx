"use client";
import { useEffect, useState } from "react";
import "@/app/HomePage/Homepage.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import productsData from "./productsData";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Categories({ onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const categoryImages = {
    "All Products": "/all-product.svg",
    Oilseeds: "/oilseed.svg",
    Pulses: "/pulses.svg",
    "Other Grains": "/grain.svg",
    Spices: "/spices.svg",
  };

  const filteredProducts = productsData
    .filter(
      (product) =>
        selectedCategory === "All Products" ||
        product.category === selectedCategory
    )
    .map((product) => ({
      ...product,
      rating: Math.random() > 0.5 ? 4.5 : 4,
    }));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect && category !== "All Products") {
      onCategorySelect(category);
    }
  };

  return (
    <>
      <div className="relative top-20 w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center lg:relative lg:left-30" data-aos="fade-down">
          {/* Title Line */}
          <div className="flex items-center justify-center space-x-3">
            <hr className="w-10 border border-[#2E7D32]" />
            <p className="text-xs sm:text-sm text-[#2E7D32] font-medium uppercase tracking-wider">
              Featured Products
            </p>
            <hr className="w-10 border border-[#2E7D32]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-6 leading-snug sm:leading-tight">
            Premium{" "}
            <span className="text-[#2E7D32]">Agricultural</span>{" "}
            Products
          </h2>

          {/* Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-[#4B5563] font-normal mt-6 leading-relaxed sm:leading-loose">
            Agrolla Impex is a distinguished One Star Export House and a leading
            <br className="hidden md:inline" />
            manufacturer and exporter of peanuts, oilseeds, grains, and pulses.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-16 catagory-container h-[1000px]">
          {/* Categories - Mobile/Tablet Dropdown */}
          <div className="w-full px-4 lg:hidden" data-aos="fade-right">
            <div className="p-4 shadow-md bg-stone-50 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="/catagory.svg"
                  alt="Category Icon"
                  className="w-10 h-10"
                />
                <span className="ml-3 text-xl font-semibold text-gray-800">
                  Select Category
                </span>
              </div>
              <div className="relative">
                <select
                  id="categorySelect"
                  value={selectedCategory}
                  onChange={(e) => handleCategoryClick(e.target.value)}
                  className="w-full h-[45px] appearance-none bg-white p-3 rounded-lg border border-gray-300 shadow-inner text-gray-800 transition duration-200 text-center text-xl font-semibold"
                >
                  {Object.keys(categoryImages).map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="text-lg text-center font-regular"
                    >
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Only shown on desktop */}
          <aside 
            className="hidden lg:block lg:w-[20%] bg-stone-50 rounded-xl shadow-lg catagory-aside h-[900px]"
            data-aos="fade-right"
          >
            <div className="flex items-center px-4 pt-4">
              <img src="/catagory.svg" alt="Category Icon" className="h-12" />
              <span className="ml-4 text-2xl font-semibold">Categories</span>
            </div>
            <ul className="px-4 pb-6 mt-6 space-y-4">
              {Object.keys(categoryImages).map((cat, index) => (
                <li
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition hover:bg-green-100 ${
                    selectedCategory === cat ? "bg-green-200" : ""
                  }`}
                  data-aos="fade-right"
                  data-aos-delay={index * 50}
                >
                  <img src={categoryImages[cat]} alt={cat} className="h-14" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{cat}</p>
                    <p className="text-sm text-gray-600">
                      {cat === "All Products"
                        ? "View all items"
                        : cat === "Oilseeds"
                        ? "Premium quality seeds"
                        : cat === "Pulses"
                        ? "Fresh & organic"
                        : cat === "Other Grains"
                        ? "Whole & natural"
                        : "Pure & aromatic"}
                    </p>
                  </div>
                </li>
              ))}

              {/* "Need Help?" section - hidden on tablet and below */}
              <li 
                className="h-[240px] bg-[#F2F9F2] rounded-2xl p-4 mt-6 hidden lg:block"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center h-12">
                  <img src="/help.svg" alt="Help Icon" />
                  <p className="ml-3 text-2xl font-bold">Need Help?</p>
                </div>
                <p className="text-[#4B5563] text-xl mt-4">
                  Contact our customer support team anytime
                </p>
                <p className="text-[#4CAF50] text-xl mt-2">
                  Contact Support →
                </p>
              </li>
            </ul>
          </aside>

          {/* Product Grid */}
          <section 
            className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-2 catagory-section h-[980px] overflow-scroll"
            data-aos="fade-up"
          >
            {filteredProducts.map((product, index) => {
              const fullStars = Math.floor(product.rating);
              const hasHalfStar = product.rating % 1 >= 0.5;
              const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl h-[450px] card cursor-pointer relative flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                  onClick={() => router.push(`/Product/${product.id}`)}
                  data-aos="zoom-in"
                  data-aos-delay={index % 3 * 100}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-48 rounded-xl"
                  />
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(fullStars)].map((_, i) => (
                      <FaStar key={`full-${i}`} className="text-yellow-500" />
                    ))}
                    {hasHalfStar && (
                      <FaStarHalfAlt className="text-yellow-500" />
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar key={`empty-${i}`} className="text-gray-300" />
                    ))}
                    <span className="text-[#6B7280] text-lg font-semibold">
                      {product.reviews}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-left text-gray-600 line-clamp-3">
                    {product.description}
                  </p>
                  {/* Category Badge at the bottom */}
                  <div className="flex justify-start mt-4">
                    <span className="text-xs font-semibold tracking-wide text-white bg-green-600 rounded-lg flex items-center justify-center shadow-sm h-[30px] w-[100px]">
                      {product.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}