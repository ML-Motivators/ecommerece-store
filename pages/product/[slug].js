import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiFillShopping } from "react-icons/ai";
import Product from "@/models/Product";
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Post = ({ buyNow, addToCart, product, variants }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const checkServiceability = async () => {
    let pins = await fetch(`http://localhost:3000/api/pincode`);
    let pinJson = await pins.json();

    if (pinJson.includes(parseInt(pin))) {
      setService(true);
      toast.success('Your Pin Code Serviceable!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setService(false);
      toast.error('Sorry, Pin Code not Serviceable!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariant = (newsize, newcolor) => {
    const url = `http://localhost:3000/product/${variants[newcolor][newsize]["slug"]}`;
    window.location = url;
  };

  return (
    <>
      <section className="text-gray-600  overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <ToastContainer
            position="top-center"
            autoClose={1500}
            limit={5}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 block relative h-[45vh] md:h-[70vh] rounded overflow-hidden shadow-lg">
              <img
                alt="e-commerce"
                className=" object-fill object-center w-full h-full m-auto block px-8 md:px-24 rounded"
                src={product.img}
              />
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                VIRTUAL-Wardrob
              </h2>
              <h1 className="text-gray-900 text-3xl font-medium mb-1">
                {product.title}({product.size}/{product.color})
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>

                  {Object.keys(variants).includes("red") &&
                    Object.keys(variants["red"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "red");
                        }}
                        className={`border-2 rounded-full bg-red-700 hover:bg-red-600 w-6 h-6 focus:outline-none ${color === "red" ? "border-black" : "border-gray-300"
                          }`}></button>
                    )}

                  {Object.keys(variants).includes("blue") &&
                    Object.keys(variants["blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "blue");
                        }}
                        className={`border-2 rounded-full bg-blue-700 hover:bg-blue-600 w-6 h-6 focus:outline-none ${color === "blue" ? "border-black" : "border-gray-300"
                          }`}></button>
                    )}

                  {Object.keys(variants).includes("black") &&
                    Object.keys(variants["black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "black");
                        }}
                        className={`border-2 rounded-full bg-black hover:bg-black w-6 h-6 focus:outline-none ${color === "black"
                            ? "border-pink-600"
                            : "border-gray-300"
                          }`}></button>
                    )}

                  {Object.keys(variants).includes("white") &&
                    Object.keys(variants["white"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "white");
                        }}
                        className={`border-2 rounded-full bg-white hover:bg-white w-6 h-6 focus:outline-none ${color === "white" ? "border-black" : "border-gray-300"
                          }`}></button>
                    )}

                  {Object.keys(variants).includes("pink") &&
                    Object.keys(variants["pink"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "pink");
                        }}
                        className={`border-2 rounded-full bg-pink-700 hover:bg-pink-600 w-6 h-6 focus:outline-none ${color === "pink" ? "border-black" : "border-gray-300"
                          }`}></button>
                    )}

                  {Object.keys(variants).includes("green") &&
                    Object.keys(variants["green"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "green");
                        }}
                        className={`border-2 rounded-full bg-green-700 hover:bg-green-600 w-6 h-6 focus:outline-none ${color === "green" ? "border-black" : "border-gray-300"
                          }`}></button>
                    )}

                  {Object.keys(variants).includes("yellow") &&
                    Object.keys(variants["yellow"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "yellow");
                        }}
                        className={`border-2 rounded-full bg-yellow-400 hover:bg-yellow-500 w-6 h-6 focus:outline-none ${color === "yellow"
                            ? "border-black"
                            : "border-gray-300"
                          }`}></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {Object.keys(variants[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(variants[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(variants[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(variants[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className=" font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() =>
                    buyNow(slug, 1, product.price, product.title, size, color)
                  }
                  className="flex ml-4 text-black text-sm  border-0 py-2 px-2 focus:outline-none  rounded">
                  Buy Now
                </button>
                <button
                  onClick={() =>
                    addToCart(
                      slug,
                      1,
                      product.price,
                      product.title,
                      size,
                      color
                    )
                  }
                  className="flex ml-2 text-black text-sm  border-0 py-2 px-2 focus:outline-none rounded">
                  
                  <AiFillShopping className="text-xl mx-1 hidden md:flex" /> Add
                  to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pin mt-2 flex text-sm">
                <input
                  onClick={onChangePin}
                  type="text"
                  className="p-1 border border-gray-500 rounded-md"
                  placeholder="Enter Your Pin Code"
                />
                <button
                  onClick={checkServiceability}
                  className="flex ml-4 text-white bg-pink-500 text-sm  border-0 py-2 px-2 focus:outline-none  rounded">
                  Pin Code
                </button>
              </div>
              {service != null && !service && (
                <div className="text-sm text-red-700 mt-1">
                  Sorry! We do not serve the area yet.
                </div>
              )}

              {service && service != null && (
                <div className="text-sm text-green-700 mt-1">
                  Yay! We serve the area.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: product.title, category: product.category });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Post;
