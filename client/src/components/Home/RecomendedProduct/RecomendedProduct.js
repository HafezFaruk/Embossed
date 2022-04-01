import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img5 from "../../../images/product1.jpg";
import img4 from "../../../images/product10.jpg";
import img7 from "../../../images/product12.jpg";
import img1 from "../../../images/product2.jpg";
import img2 from "../../../images/product3.jpg";
import img3 from "../../../images/product4.jpg";
import img6 from "../../../images/product8.jpg";
import img8 from "../../../images/product9.jpg";

const RecomendedProduct = () => {
    return (
        <div className="container mb-20">
            <h2 className="text-3xl font-medium pb-6">Recomended for You</h2>
            <div className="">
            <div className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img1} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer chair</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Queen Headboard</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-throught">$55.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img2} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </a>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">madeline sofa</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Fabric Sofa bed</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$120.00</p>
                        <p className="text-sm text-gray-400 line-throught">$100.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(160)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img3} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">black archie</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">black bedside</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$400.00</p>
                        <p className="text-sm text-gray-400 line-throught">$380.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(130)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img4} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">bianco chair</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">fabric accent chair</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$60.00</p>
                        <p className="text-sm text-gray-400 line-throught">$55.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(170)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img5} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer chair</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Queen Headboard</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-throught">$55.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img6} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">madeline sofa</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">Fabric Sofa bed</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$120.00</p>
                        <p className="text-sm text-gray-400 line-throught">$100.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(160)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img7} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">black archie</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">black bedside</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$400.00</p>
                        <p className="text-sm text-gray-400 line-throught">$380.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(130)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src={img8} className="w-full" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to="/productDetails" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                             <AiFillEye/>
                        </Link>
                        <a href="/#" className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <BsSuitHeartFill/>
                        </a>
                    </div>
                </div>
                <div className="pt-3 pb-3 px-4">
                    <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">bianco chair</h4>
                    </a>
                    <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">fabric accent chair</p>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$60.00</p>
                        <p className="text-sm text-gray-400 line-throught">$55.00</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(170)</div>
                    </div>
                </div>
                <a href="/#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">add to card</a>
            </div>
        </div>
            </div>
        </div>
    );
};

export default RecomendedProduct;