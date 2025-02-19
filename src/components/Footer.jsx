export default function Footer() {
    return (
       <>
            <h1>This is Footer page</h1>
            
       </>
    )
}




import img1 from '../assets/images/img1.avif';
import img2 from '../assets/images/img2.avif';
import { useState, useEffect, useRef } from 'react';
import '../assets/styles/style.css'
import { Link } from 'react-router-dom';

export default function Home() {
    const images = [
        img1, img2, img1
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPreviousBtn = () => {
        setCurrentIndex((previndex) => previndex === 0 ? images.length - 1 : previndex - 1);
    }
    const goToNextBtn = () => {
        setCurrentIndex((previndex) => (previndex + 1) % images.length);
    }

    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [showAll, setShowAll] = useState(false);
    const offers = [
        "Snag £200 Cashback On Select Rooms!",
        "Snag £200 Cashback On Select Rooms!",
        "Exclusive Cashback Of £50 For Referring A Friend On Amber!",
        "Get An Additional £20 Cashback By Booking Via The Amber App"
    ];
    const visibleOffers = showAll ? offers : offers.slice(0, 2);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const propertyInfo =
        "Strategically positioned for academic convenience, iQ East Court London at 450 Mile End Rd, E1 4GG stands as a preferred choice for student accommodation in London. Offering a variety of room types, providing a wide range of different types of studios so students have an array of options to suit their preferences. Renowned institutions like Queen Mary University of London (Mile End), Queen Mary University (Whitechapel), and Hult International Business School are easily accessible, substantiating why iQ East Court London is a prime choice.";


    const tabs = [
        {
            id: "Studio1",
            label: "Studio 1",
            title: "Studio One",
            content: "This is Studio 1 content. All-in-one space with a bedroom, private bathroom, living area, and kitchenette — Ideal for complete independence",
            img: img1,
            availableFrom: "15 Feb, 2025",
            price: "389",
            features: ["Studio", "Entire Place", "Private Bathroom", "Private Kitchen", "14 sqm"]
        },
        {
            id: "Studio2",
            label: "Studio 2",
            title: "Studio Two",
            content: "This is Studio 2 content. All-in-one space with a bedroom, private bathroom, living area, and kitchenette — Ideal for complete independence",
            img: img1,
            availableFrom: "1 Mar, 2025",
            price: "420",
            features: ["Studio", "Entire Place", "Private Bathroom", "Private Kitchen", "16 sqm"]
        },
        {
            id: "Studio1",
            label: "Studio 1",
            title: "Studio One",
            content: "This is Studio 1 content. All-in-one space with a bedroom, private bathroom, living area, and kitchenette — Ideal for complete independence",
            img: img1,
            availableFrom: "15 Feb, 2025",
            price: "389",
            features: ["Studio", "Entire Place", "Private Bathroom", "Private Kitchen", "14 sqm"]
        },
        {
            id: "Studio1",
            label: "Studio 1",
            title: "Studio One",
            content: "This is Studio 1 content. All-in-one space with a bedroom, private bathroom, living area, and kitchenette — Ideal for complete independence",
            img: img1,
            availableFrom: "15 Feb, 2025",
            price: "389",
            features: ["Studio", "Entire Place", "Private Bathroom", "Private Kitchen", "14 sqm"]
        },
    ];
    const tenancies = [
        { id: 1, tabId: "Studio1", duration: "29 weeks", moveIn: "15 Feb, 2025", moveOut: "6 Sept, 2025", price: "389" },
        { id: 2, tabId: "Studio2", duration: "40 weeks", moveIn: "1 Mar, 2025", moveOut: "10 Dec, 2025", price: "420" },
        { id: 3, tabId: "Studio2", duration: "52 weeks", moveIn: "15 Apr, 2025", moveOut: "30 Apr, 2026", price: "450" },
        { id: 4, tabId: "Studio1", duration: "29 weeks", moveIn: "15 Feb, 2025", moveOut: "6 Sept, 2025", price: "389" },
        { id: 5, tabId: "Studio1", duration: "29 weeks", moveIn: "15 Feb, 2025", moveOut: "6 Sept, 2025", price: "389" },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [openAccordion, setOpenAccordion] = useState('Studio1');
    const [openTenancies, setOpenTenancies] = useState(false);
    const uniqueTabs = Array.from(new Set(tabs.map(tab => tab.id)))
        .map(id => tabs.find(tab => tab.id === id));
    const filteredTenancies = tenancies.filter(tenancy => tenancy.tabId === activeTab);

    const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

    const faqs = [
        { question: "Are sites secure at iQ East Court London?", answer: "Instant booking allows you to quickly book the property by paying the amount." },
        { question: "What payment methods are accepted?", answer: "You can pay via credit card, debit card, and bank transfer." },
        { question: "Can I cancel my booking?", answer: "Yes, but cancellation policies vary by property. Please check the terms before booking." },
        { question: "Is Wi-Fi included in the rent?", answer: "Yes, high-speed Wi-Fi is included in the rental price." },
        { question: "Do I need to pay a deposit?", answer: "Yes, a security deposit is required and refundable upon lease completion." },
        { question: "Are pets allowed?", answer: "Pets are allowed in select properties. Check the listing details." },
        { question: "What is the minimum lease period?", answer: "Most properties require a minimum lease of 6 months." },
        { question: "Do I need to provide any documents for booking?", answer: "Yes, ID proof and income verification may be required." },
    ];
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [showfaqsAll, setShowfaqsAll] = useState(false);
    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    const [view, setView] = useState("map");
    const [activeAddressTab, setAddressActiveTab] = useState("addressTab1"); // Default active tab

    const ratings = [
        { title: "Location", rating: "4.5/5", icon: <i class="fa-solid fa-star mx-2 fa-sx"></i> },
        { title: "Staff & Management", rating: "4.0/5", icon: <i class="fa-solid fa-star mx-2 fa-sx"></i> },
        { title: "Social Experience", rating: "4.0/5", icon: <i class="fa-solid fa-star mx-2 fa-sx"></i> },
        { title: "Amenities", rating: "4.0/5", icon: <i class="fa-solid fa-star mx-2 fa-sx"></i> },
    ];
    const reviews = [
        {
            name: "Jacob F",
            rating: "5.0",
            text: "I've lived here for two years now and I am yet to encounter anything that can be deemed as a negative. The staff is incredibly helpful and very kind....",
            images: [img1, img2],
        },
        {
            name: "Vaishnavi V",
            rating: "5.0",
            text: "I've stayed here for the past year and I've had one of the best experiences. The rooms are bright, vibrant and of a decent size. The property has excellent facilities...",
            images: [img1, img2],
        },
        {
            name: "Mavi F",
            rating: "4.8",
            text: "It has been a great place to live since moving in. Every place has its issues but honestly, the team helped me when I contacted...",
            images: [img1, img2],
        },
    ];

    const properties = [
        {
            id: 1,
            image: img1,
            title: "GoBritanya White City Residence",
            location: "London, England, GB",
            price: "£495",
        },
        {
            id: 2,
            image: img2,
            title: "GoBritanya Lewisham Residence",
            location: "London, England, GB",
            price: "£375",
        },
        {
            id: 3,
            image: img1,
            title: "Host View Studios, London",
            location: "London, England, GB",
            price: "£355",
        },
        {
            id: 4,
            image: img2,
            title: "North Lodge, London",
            location: "London, England, GB",
            price: "£250",
        },
        {
            id: 5,
            image: img1,
            title: "Rahere Court, London",
            location: "London, England, GB",
            price: "£325",
        },
    ];
    const [currentPropertiesIndex, setCurrentPropertiesIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 1024) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(4);
            }
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);
    const prevPropertiesSlide = () => {
        setCurrentPropertiesIndex((prev) =>
            prev === 0 ? properties.length - itemsPerPage : prev - 1
        );
    };
    const nextPropertiesSlide = () => {
        setCurrentPropertiesIndex((prev) =>
            prev >= properties.length - itemsPerPage ? 0 : prev + 1
        );
    };


    const mapRef = useRef(null);
    const scrollToMap = () => {
        console.log("Button clicked!"); // Debugging log
        mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };


    return (
        <>
            <div className="grid grid-cols-12 bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500">
                <div className="col-span-12 sm:col-span-1 md:col-span-8 lg:col-span-8 xl:col-span-8 2xl:col-span-8">
                    <div className='border border-1 border-t-0 rounded-lg p-6 mb-3'>
                        <p className="UniColor text-l my-1">United Kingdom / England / London</p>
                        <div className="grid grid-cols-12 mx-auto">
                            <div className="col-span-12 sm:col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-9 2xl:col-span-9">
                                <div className="my-3">
                                    <div className="relative w-full max-w-2xl mx-auto">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img src={images[currentIndex]} alt="banners" className="w-full" />
                                        </div>
                                        <div className="absolute top-2 left-2 bg-white text-green-700 text-sm px-3 py-1 rounded-md">
                                            Immediate Move-In
                                        </div>
                                        <div className="absolute bottom-2 left-2 bg-white text-black text-sm px-3 py-1 rounded-full">
                                            <i class="fa-solid fa-star mx-2 fa-sx text-green-700"></i>4.9 (10)
                                        </div>
                                        <button
                                            onClick={goToPreviousBtn}
                                            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white px-3 py-2 rounded-full focus:outline-none">
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </button>
                                        <button
                                            onClick={goToNextBtn}
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white px-3 py-2 rounded-full focus:outline-none">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 bg-white">
                                <div className='flex flex-col space-y-3'>
                                    <img src={img1} alt="Video" className="rounded w-full h-auto" />
                                    <img src={img1} alt="Video" className="rounded w-full h-auto" />
                                    <img src={img1} alt="Video" className="rounded w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-2 sm:grid-cols-3 lg:grid-cols-6">
                            <button className="flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 border border-black p-1 rounded-lg w-full">
                                <i className="fa-solid fa-camera"></i>
                                <span className="text-sm">Photos</span>
                            </button>
                            <button className="flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 border border-black p-1 rounded-lg w-full">
                                <i className="fa-regular fa-circle-play"></i>
                                <span className="text-sm">Videos</span>
                            </button>
                            <button className="flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 border border-black p-1 rounded-lg w-full">
                                <i className="fa-solid fa-cube"></i>
                                <span className="text-sm">3D Views</span>
                            </button>
                            <button onClick={scrollToMap} className="flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 border border-black p-1 rounded-lg w-full">
                                <span className="text-sm">Map View</span>
                            </button>
                        </div>

                        <div className='md:grid md:grid-cols-12 gap-1 mx-auto my-5'>
                            <div className="col-span-10">
                                <div className='my-1'>
                                    <h1 className='text-l md:text-2xl font-bold'>iQ East Court, London</h1>
                                    <p className='text-m md:text-sm text-gray-500'>Mile End Rd, London, E1 4GG, United Kingdom</p>
                                </div>
                                <div className='my-4'>
                                    <div className='flex justify-start'>
                                        <div>
                                            <img src="https://th.bing.com/th/id/OIP.hh9AKoGzTm2qG35s4wwD4QHaE8?w=230&h=180&c=7&r=0&o=5&pid=1.7" alt="map" style={{ width: "50px", height: "auto" }} />
                                        </div>
                                        <div className='text-m space-x-2'>
                                            <p>4.3 mi from City Center</p>
                                            <p>(26m . 31m . 1h 27m)</p>
                                            <p className='UniColor' onClick={scrollToMap} >View map</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 md:flex md:justify-around text-sm">
                                    <p className="flex items-center gap-2 md:px-2 md:py-2 border border-gray-300 mx-2 rounded-full">
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        Queen Mary University of London... | 0.11 mi
                                    </p>
                                    <p className="flex items-center gap-2 md:px-2 md:py-2 border border-gray-300 mx-2 rounded-full">
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        University of Cumbria London Ca... | 1.04 mi
                                    </p>
                                </div>

                            </div>
                            <div className="text-right md:col-span-2">
                                <p className='text-s md:text-sm text-gray-500'>From</p>
                                <h1 className='text-sm md:text-xl font-bold'><i class="fa-solid fa-indian-rupee-sign"></i>389</h1>
                                <p className='text-s md:text-sm text-gray-500'>per week</p>
                            </div>
                        </div>

                        <div className="my-3 flex flex-wrap justify-start md:justify-start gap-2">
                            <button className="flex justify-between border p-2 gap-1 rounded-full">
                                <i className="fa-regular fa-circle-check UniColor"></i>
                                <span className="text-xs font-medium">Pay In Instalment</span>
                            </button>
                            <button className="flex justify-between border p-2 gap-1 rounded-full">
                                <i className="fa-regular fa-circle-check UniColor"></i>
                                <span className="text-xs font-medium">No Visa No Pay</span>
                            </button>
                            <button className="flex justify-between border p-2 gap-1 rounded-full">
                                <i className="fa-solid fa-children UniColor"></i>
                                <span className="text-xs font-medium">Dual Occupancy</span>
                            </button>
                            <button className="flex justify-between border p-2 gap-1 rounded-full">
                                <i className="fa-solid fa-dumbbell UniColor"></i>
                                <span className="text-xs font-medium">Gym</span>
                            </button>
                            <button className="flex justify-between border p-2 gap-1 rounded-full">
                                <i className="fa-solid fa-file-lines UniColor"></i>
                                <span className="text-xs font-medium">Bills Included</span>
                            </button>
                            <button onClick={() => setIsAmenitiesModalOpen(true)} className='flex justify-between p-2 gap-1'>
                                <span className="text-xs font-medium UniColor">View All</span>
                            </button>
                        </div>

                    </div>

                    <div className='border border-1 rounded-lg p-6 my-3'>
                        <h2 className="text-xl font-semibold mb-3">Offers ({offers.length})</h2>
                        <div className="space-y-2">
                            {visibleOffers.map((offer, index) => (
                                <div key={index} className="flex justify-between items-center border-b py-2 last:border-b-0">
                                    <div className="flex items-center gap-2">
                                        <i class="fa-solid fa-tag UniColor"></i>
                                        <span>{offer}</span>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            ))}
                        </div>
                        <button
                            className="text-red-500 mt-2 flex items-center"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "View less offers" : "View more offers"}
                            {showAll ? <i class="fa-solid fa-chevron-right"></i> : <i class="fa-solid fa-chevron-right"></i>}
                        </button>
                    </div>

                    <div className='border border-1 rounded-lg p-6 my-3'>
                        <h2 className="text-xl font-semibold mb-3">About the Property</h2>
                        <p className="text-gray-700">
                            {propertyInfo.substring(0, 250)}...
                        </p>
                        <button
                            className="text-red-500 mt-2 flex items-center"
                            onClick={() => setIsModalOpen(true)}>
                            Show more
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                        {/* Modal */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <h2 className="text-xl font-semibold">About the Property</h2>
                                        <button onClick={() => setIsModalOpen(false)}>
                                            <i class="fa-solid fa-xmark text-gray-600 hover:text-black"></i>
                                        </button>
                                    </div>
                                    <p className="text-gray-500 mt-4">{propertyInfo}</p>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                            onClick={() => setIsModalOpen(false)}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className='border border-1 rounded-lg p-6 my-3'>
                            <h2 className="text-xl font-semibold mb-3">Room Types ({uniqueTabs.length})</h2>
                            <div className="flex">
                                {uniqueTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-2 text-l font-medium border-b-2 ${activeTab === tab.id ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
                                            } hover:text-blue-500`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Selected Room Data */}
                        {uniqueTabs.map((tab) =>
                            activeTab === tab.id && (
                                <div key={tab.id} className="border border-1 rounded-lg p-6 my-3">
                                    <div className="flex justify-start">
                                        <i className="fa-solid fa-box p-3 bg-gray-200 rounded"></i>
                                        <p className="mx-3 text-lg font-bold">{tab.title}</p>
                                    </div>
                                    <div className="flex justify-between my-2">
                                        <p className="text-sm">{tab.content}</p>
                                        <button onClick={() => setOpenAccordion(openAccordion === tab.id ? null : tab.id)}>
                                            <i className={`fa-solid ${openAccordion === tab.id ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        )}

                        {/* Room Details */}
                        {uniqueTabs.map((tab) =>
                            activeTab === tab.id && openAccordion === tab.id && (
                                <div key={tab.id} className="border border-1 rounded-lg p-6 my-2">
                                    <div className='grid grid-cols-12 gap-1 mx-auto'>
                                        <div className="col-span-3">
                                            <img src={tab.img} alt={tab.title} className='rounded h-50 w-50' />
                                        </div>
                                        <div className="col-span-9 p-2">
                                            <h1 className='font-bold text-lg mb-4'>{tab.title}</h1>
                                            <p className='text-l'>Available From: {tab.availableFrom} · Starting From: <span className='font-bold'><i class="fa-solid fa-indian-rupee-sign"></i>{tab.price}/week</span></p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center text-s my-2 gap-3">
                                                {tab.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center justify-center md:justify-start gap-2">
                                                        <i className="fa-solid fa-circle-check text-sm mt-0.5"></i>
                                                        <p className="text-sm">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className='UniColor text-m mt-3'>View More Details <i className="fa-solid fa-chevron-right"></i></p>
                                        </div>
                                    </div>

                                    {/* Filtered Tenancies */}
                                    <div>
                                        {filteredTenancies.slice(0, openTenancies ? filteredTenancies.length : 2).map((tenancy, index) => (
                                            <div key={index} className='grid grid-cols-1 lg:border-b-2 lg:grid lg:grid-cols-12 gap-1 mx-auto'>
                                                <div className="col-span-8 p-2 flex justify-between">
                                                    <p className='text-sm'>Duration <br /><span className='font-bold text-sm'>{tenancy.duration}</span></p>
                                                    <p className='text-sm'>Move In <br /><span className='font-bold text-sm'>{tenancy.moveIn}</span></p>
                                                    <p className='text-sm'>Move Out <br /><span className='font-bold text-sm'>{tenancy.moveOut}</span></p>
                                                </div>
                                                <div className='col-span-1'></div>
                                                <div className="col-span-2 p-2">
                                                    <div className='flex justify-between space-x-3'>
                                                        <p className='text-m font-bold'>{tenancy.price}/week</p>
                                                        <button className='text-white UniBgColor py-1 px-4 rounded'>Book</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {filteredTenancies.length > 2 && (
                                            <div className='mx-auto my-2 flex justify-end'>
                                                <button onClick={() => setOpenTenancies(!openTenancies)} className="UniColor">
                                                    {openTenancies ? "View Less Tenancies" : `View More Tenancies (${filteredTenancies.length - 2})`}
                                                    <i className={`fa-solid mx-3 ${openTenancies ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    <div className='border border-1 rounded-lg p-6 my-3'>
                        <h2 className="text-xl mb-3 font-bold">Amenities</h2>
                        <div>
                            <div className='border-t-2'>
                                <p className="text-gray-700 text-l mt-3 font-bold">
                                    Bills Included
                                </p>
                                <div>
                                    <div className='grid grid-col-10 md:grid md:grid-cols-12 gap-6 max-w-6xl mx-auto p-6'>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Water</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Heating</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Electricity</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Wifi</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Content Insurance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-t-2'>
                                <p className="text-gray-700 mt-3 text-l font-bold">
                                    Common Amenities
                                </p>
                                <div>
                                    <div className='grid grid-col-10 md:grid md:grid-cols-12 gap-6 max-w-6xl mx-auto p-6'>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Breakfast Bar</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Lounge</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Close To Universities</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Free Gym</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Social Spaces</p>
                                        </div>
                                        <div className='col-span-4'>
                                            <p className="text-gray-700">Games Room</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="text-red-500 flex items-center"
                            onClick={() => setIsAmenitiesModalOpen(true)}>
                            View all amenities (21)
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                        {/* Modal */}
                        {isAmenitiesModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen flex flex-col">
                                    {/* Header (Fixed) */}
                                    <div className="flex justify-between items-center pb-2">
                                        <h2 className="text-xl font-semibold">Amenities</h2>
                                        <button onClick={() => setIsAmenitiesModalOpen(false)}>
                                            <i className="fa-solid fa-xmark text-gray-600 hover:text-black"></i>
                                        </button>
                                    </div>

                                    {/* Scrollable Content */}
                                    <div className="overflow-y-auto max-h-[70vh] p-4 scrollbar-hidden">
                                        {/* Bills Included */}
                                        <div className='border-t-2'>
                                            <p className="text-gray-700 mt-3 font-bold text-l">Bills Included</p>
                                            <div className='grid grid-cols-2 gap-4 p-2'>
                                                <p className="text-gray-700">Water</p>
                                                <p className="text-gray-700">Heating</p>
                                                <p className="text-gray-700">Electricity</p>
                                                <p className="text-gray-700">Wifi</p>
                                                <p className="text-gray-700">Content Insurance</p>
                                            </div>
                                        </div>

                                        {/* Common Amenities */}
                                        <div className='border-t-2 mt-4'>
                                            <p className="text-gray-700 mt-3 font-bold text-l">Common Amenities</p>
                                            <div className='grid grid-cols-2 gap-4 p-2'>
                                                <p className="text-gray-700">Breakfast Bar</p>
                                                <p className="text-gray-700">Lounge</p>
                                                <p className="text-gray-700">Close To Universities</p>
                                                <p className="text-gray-700">Free Gym</p>
                                                <p className="text-gray-700">Social Spaces</p>
                                                <p className="text-gray-700">Games Room</p>
                                            </div>
                                        </div>

                                        {/* Property Rules */}
                                        <div className='border-t-2 mt-4'>
                                            <p className="text-gray-700 mt-3 font-bold text-l">Property Rules</p>
                                            <div className='grid grid-cols-2 gap-4 p-2'>
                                                <p className="text-gray-700">No Pets Allowed</p>
                                                <p className="text-gray-700">No Smoking Allowed</p>
                                            </div>
                                        </div>

                                        {/* Safety and Security */}
                                        <div className='border-t-2 mt-4'>
                                            <p className="text-gray-700 mt-3 font-bold text-l">Safety and Security</p>
                                            <div className='grid grid-cols-2 gap-4 p-2'>
                                                <p className="text-gray-700">24/7 Staff Presence</p>
                                                <p className="text-gray-700">24/7 Security</p>
                                                <p className="text-gray-700">CCTV</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer (Fixed) */}
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                            onClick={() => setIsAmenitiesModalOpen(false)}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='border border-1 rounded-lg p-6 my-3'>
                        <h2 className="text-xl font-semibold mb-3">Cancellation Policies (6)</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center border-t-2 py-2 last:border-b-0">
                                <div className="flex justify-between">
                                    <i class="fa-solid fa-star UniColor mx-2 fa-sx"></i>
                                    <p className='text-black mx-3'>Cooling Off Period <br></br><p>This property  <span className='font-bold'>offers</span> cooling-off period.</p></p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="flex justify-between items-center border-t-2 py-2 last:border-b-0">
                                <div className="flex justify-between">
                                    <i class="fa-solid fa-star UniColor mx-2 fa-sx"></i>
                                    <p className='text-black mx-3'>No Visa No Pay <br></br><p>This property  <span className='font-bold'>allows</span> cooling-off period.</p></p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="flex justify-between items-center border-t-2 py-2 last:border-b-0">
                                <div className="flex justify-between">
                                    <i class="fa-solid fa-star UniColor mx-2 fa-sx"></i>
                                    <p className='text-black mx-3'>Cooling Off Period <br></br><p>This property  <span className='font-bold'>offers</span> cooling-off period.</p></p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className='border border-1 rounded-lg p-6 my-3'>
                        <h2 className="text-xl font-semibold mb-3">Payment Policies (4)</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center border-t-2 py-2 last:border-b-0">
                                <div className="flex justify-between">
                                    <i class="fa-solid fa-star UniColor mx-2 fa-sx"></i>
                                    <p className='text-black mx-3'>Booking Deposit <br></br><p>This property  <span className='font-bold'>offers</span> cooling-off period.</p></p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="flex justify-between items-center border-t-2 py-2 last:border-b-0">
                                <div className="flex justify-between">
                                    <i class="fa-solid fa-star UniColor mx-2 fa-sx"></i>
                                    <p className='text-black mx-3'>Pay In Instalment <br></br><p>This property  <span className='font-bold'>allows</span> cooling-off period.</p></p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="flex justify-between items-center border-t-2 py-2 last:border-b-0">
                                <div className="flex justify-between">
                                    <i class="fa-solid fa-star UniColor mx-2 fa-sx"></i>
                                    <p className='text-black mx-3'>Mode Of Payment <br></br><p>This property  <span className='font-bold'>offers</span> cooling-off period.</p></p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className='border border-1 rounded-lg p-6 my-3'>
                        <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
                        <div className="w-full mx-auto my-3">
                            <input
                                type="text"
                                placeholder="Enter your query or topic here"
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className='my-4'>
                            <div className="w-full mx-auto">
                                {faqs.slice(0, showfaqsAll ? faqs.length : 6).map((faq, index) => (
                                    <div key={index} className="my-2 border-t">
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full flex justify-between items-center p-3 text-left"
                                        >
                                            <span>{faq.question}</span>
                                            <i className={`fa-solid ${expandedIndex === index ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </button>
                                        {expandedIndex === index && (
                                            <div className="p-4 bg-gray-100">
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {!showfaqsAll && faqs.length > 6 && (
                                    <button
                                        onClick={() => setShowfaqsAll(true)}
                                        className="mt-4 UniColor">
                                        View All Questions
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4" >
                    <div className='border border-1 rounded-lg p-3 my-2 pb-5 '>
                        <div className='flex justify-between my-3'>
                            <h2 className="text-m font-semibold">iQ East Court, London</h2>
                            <div className='mb-2'>
                                <button className='rounded-full p-1.5 mx-1 border border-1 text-sm'><i class="fa-regular fa-heart fa-sm"></i></button>
                                <button className='rounded-full p-1.5 mx-1 border border-1 text-sm'><i class="fa-solid fa-arrow-up-from-bracket fa-sm"></i></button>
                            </div>
                        </div>
                        <button className="w-full UniColor UniBorderColor py-2 rounded-md shadow-md ">
                            View Rooms
                        </button>
                        <button className="w-full UniBgColor text-white py-2 rounded-md shadow-md mt-3">
                            Enquire Now
                        </button>
                    </div>
                    <div className='border border-1 rounded-lg p-3 my-2'>
                        <div className="w-full max-w-md mx-auto">
                            <div className="text-sm">
                                <button
                                    onClick={() => toggleAccordion(0)}
                                    className="w-full flex justify-between p-3 border-b">
                                    Instant Booking
                                    <i className={`fa-solid ${openIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </button>
                                {openIndex === 0 && (
                                    <div className="p-4">
                                        <p>Instant booking allows you to quickly book the property by paying the amount.</p>
                                    </div>
                                )}
                            </div>

                            <div className="text-sm">
                                <button
                                    onClick={() => toggleAccordion(1)}
                                    className="w-full flex justify-between p-3 border-b">
                                    Lowest Price Guaranteed
                                    <i className={`fa-solid ${openIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </button>
                                {openIndex === 1 && (
                                    <div className="p-4">
                                        <p>We guarantee to match the price of your accommodation if you find an identical offer on another.</p>
                                        <u><Link href='#'>Learn More</Link></u>
                                    </div>
                                )}
                            </div>

                            <div className="text-sm">
                                <button
                                    onClick={() => toggleAccordion(2)}
                                    className="w-full flex justify-between p-3">
                                    Verified Properties
                                    <i className={`fa-solid ${openIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </button>
                                {openIndex === 2 && (
                                    <div className="p-4">
                                        <p>We guarantee that what you see on our website is exactly what you'll get.</p>
                                    </div>
                                )}
                            </div>

                            <div className="text-sm">
                                <button
                                    onClick={() => toggleAccordion(3)}
                                    className="w-full flex justify-between p-3">
                                    24x7 Personal Assistance
                                    <i className={`fa-solid ${openIndex === 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </button>
                                {openIndex === 3 && (
                                    <div className="p-4">
                                        <p>For any doubts or queries, a quick call is all it takes - we're here to assist you promptly.</p>
                                    </div>
                                )}
                            </div>

                            <div className="text-sm">
                                <button
                                    onClick={() => toggleAccordion(4)}
                                    className="w-full flex justify-between p-3">
                                    5.8K+ Reviews
                                    <i className={`fa-solid ${openIndex === 4 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </button>
                                {openIndex === 4 && (
                                    <div className="p-4">
                                        <p>We've earned an excellent rating from over 5,800+ students for our outstanding services.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section ref={mapRef} >
                <div className='md:grid md:gap-6 mx-auto p-6 overflow-y-auto max-h-[screen] scrollbar-hidden'>
                    <div className='border border-1 rounded-lg p-3 my-2 pb-5 '>
                        <div className='flex justify-between'>
                            <h1 className='text-l md:text-2xl font-bold'>Nearby Locations and Map</h1>
                            <div className=' md:flex justify-between'>
                                <button
                                    onClick={() => setView("map")}
                                    className={`px-6 py-2 rounded-lg text-sm ${view === "map" ? "border border-2 text-black" : "bg-gray-200"}`}>
                                    Map View
                                </button>
                                <button
                                    onClick={() => setView("street")}
                                    className={`px-6 py-2 rounded-lg text-sm ${view === "map" ? "border border-2 text-black" : "bg-gray-200"}`}>
                                    Street View
                                </button>
                            </div>
                        </div>
                        <div className='my-5'>
                            {view === "map" ? (
                                <div className="p-2">
                                    {/* Tab Buttons */}
                                    <div className="md:flex border-b">
                                        <button
                                            onClick={() => setAddressActiveTab("addressTab1")}
                                            className={`px-6 py-2 text-m font-semibold ${activeTab === "tab1" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
                                                }`}
                                        >
                                            Universities
                                        </button>
                                        <button
                                            onClick={() => setAddressActiveTab("addressTab2")}
                                            className={`px-6 py-2 text-m font-semibold ${activeTab === "tab2" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
                                                }`}
                                        >
                                            Bus Stations
                                        </button>
                                        <button
                                            onClick={() => setAddressActiveTab("addressTab3")}
                                            className={`px-6 py-2 text-m font-semibold ${activeTab === "tab3" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
                                                }`}
                                        >
                                            Train Stations
                                        </button>
                                    </div>

                                    {/* Tab Content */}
                                    <div className="mt-4 p-4 border rounded-lg">
                                        {activeAddressTab === "addressTab1" && (
                                            <div className='md:flex justify-between'>
                                                <div className="w-full md:w-full lg:w-full">
                                                    <iframe
                                                        title='map1'
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188839.20277303818!2d73.69814984457464!3d18.52487061439116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1739902899074!5m2!1sen!2sin"
                                                        className="w-full h-[450px] rounded-lg"
                                                        style={{ border: "0" }} // Corrected JSX style
                                                        allowFullScreen
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    ></iframe>
                                                </div>
                                                <div className='p-3'>
                                                    <p className='border-b my-5'>Queen Mary University Of London (stop E) <span className='ml-5 text-right'>0.2 mi</span></p>
                                                    <p className='border-b my-5'>Queen Mary University Of London (stop E) <span className='ml-5 text-right'>0.2 mi</span></p>
                                                    <p className='border-b my-5'>Queen Mary University Of London (stop E) <span className='ml-5 text-right'>0.2 mi</span></p>
                                                    <p className='border-b my-5'>Queen Mary University Of London (stop E) <span className='ml-5 text-right'>0.2 mi</span></p>
                                                </div>
                                            </div>
                                        )}

                                        {activeAddressTab === "addressTab2" && (
                                            <div>
                                                <h2 className="text-xl font-bold">Tab 2 Content</h2>
                                                <p>This is the content for Tab 2.</p>
                                            </div>
                                        )}

                                        {activeAddressTab === "addressTab3" && (
                                            <div>
                                                <h2 className="text-xl font-bold">Tab 3 Content</h2>
                                                <p>This is the content for Tab 3.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    <div className="w-full h-screen flex items-center justify-center">
                                        <iframe
                                            title='map2'
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188839.20277303818!2d73.69814984457464!3d18.52487061439116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1739902899074!5m2!1sen!2sin"
                                            className="w-full h-full"
                                            style={{ border: "0" }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <div className='md:grid md:gap-6 mx-auto p-6 overflow-y-auto max-h-[screen] scrollbar-hidden'>
                <div className='border border-1 rounded-lg p-3 pb-5'>
                    <div className='md:flex justify-between'>
                        <div>
                            <h1 className='text-xl'>Interested in the <span className='UniColor'>property?</span></h1>
                            <p className='text-sm'>Explore the place with our 360° live virtual tour</p>
                        </div>
                        <div className='flex justify-between'>
                            <button className="w-full UniColor UniBorderColor py-2 px-3 rounded-md shadow-md ">
                                Request now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:grid md:gap-6 mx-auto p-6 overflow-y-auto max-h-[screen] scrollbar-hidden">
                <div className="border border-1 rounded-lg p-3">
                    <div className="flex justify-start items-center">
                        <span className="text-xs font-medium px-2 py-1 bg-green-600 text-white rounded-sm">
                            4.9 <i class="fa-solid fa-star mx-2 fa-sx"></i>
                        </span>
                        <h1 className="text-xl font-bold mx-2">Reviews</h1>
                    </div>
                    <p className="my-3">Summary curated from the web</p>
                    <div className="grid grid-cols-1 md:grid md:grid-cols-4 gap-6 pb-4">
                        {ratings.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <h3 className="text-lg">{item.title}</h3>
                                <p className="text-gray-700 font-medium">{item.rating}</p>
                                <div className="text-2xl text-gray-600">{item.icon}</div>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600 mt-4">
                        IQ East Court offers a convenient location near the metro and shopping areas,
                        with friendly and helpful staff. However, some students have reported issues
                        with room cleanliness, maintenance, and high prices. The social environment
                        is generally positive, but there are concerns about noise and safety in the
                        surrounding area.
                    </p>
                </div>

                <div className="border border-1 rounded-lg p-5">
                    <h2 className="text-2xl font-bold mb-4">10 Reviews</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:flex md:justify-start md:col-span-3 py-4 bg-white">
                        <img src={img1} alt="Video" className='rounded h-20 w-20 mx-4' />
                        <img src={img1} alt="Video" className='rounded h-20 w-20 mx-4' />
                        <img src={img1} alt="Video" className='rounded h-20 w-20 mx-4' />
                        <img src={img1} alt="Video" className='rounded h-20 w-20 mx-4' />
                        <img src={img1} alt="Video" className='rounded h-20 w-20 mx-4' />
                        <img src={img1} alt="Video" className='rounded h-20 w-20 mx-4' />
                    </div>

                    <div className="md:grid md:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="border rounded-lg p-4 shadow-md">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold">
                                        {review.name[0]}
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold">{review.name}</h3>
                                        <span className="text-green-600 text-sm font-medium">
                                            {review.rating}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm">{review.text} <span className="text-blue-500 cursor-pointer">Read more</span></p>

                                {/* Review Images */}
                                <div className="flex gap-2 mt-3">
                                    {review.images.map((img, imgIndex) => (
                                        <img key={imgIndex} src={img} alt="Review" className="w-16 h-16 object-cover rounded-md" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='border-t my-5'>
                        <p className='UniColor mt-5'>View All</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto p-6 overflow-y-auto max-h-screen scrollbar-hidden">
                <div className="border border-1 rounded-lg p-3">
                    <div className="mx-auto p-6">
                        <h2 className="text-2xl font-bold mb-4">Similar Properties</h2>
                        <div className="relative">
                            {/* Flex container with responsive behavior */}
                            <div className="flex overflow-hidden gap-4">
                                {properties
                                    .slice(currentPropertiesIndex, currentPropertiesIndex + itemsPerPage)
                                    .map((property) => (
                                        <div
                                            key={property.id}
                                            className="w-full sm:w-full md:w-full lg:min-w-[250px] lg:max-w-sm border rounded-lg overflow-hidden shadow-md bg-white relative"
                                        >
                                            <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                                                <i className="fa-regular fa-heart fa-sm"></i>
                                            </button>
                                            <img
                                                src={property.image}
                                                alt={property.title}
                                                className="w-full h-40 object-cover"
                                            />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold truncate">{property.title}</h3>
                                                <p className="text-gray-600 text-sm">{property.location}</p>
                                                <p className="mt-2 text-lg font-bold">
                                                    From <span className="text-black">{property.price}</span> / week
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevPropertiesSlide}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>

                            <button
                                onClick={nextPropertiesSlide}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 shadow-lg rounded-full"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-12 mx-auto p-6 overflow-y-auto max-h-[screen] scrollbar-hidden">
                <div className='border border-1 rounded-lg p-6 my-3'>
                    <h2 className="text-lg font-semibold mb-3">Student Accommodations in London</h2>
                    <div className='my-4'>
                        <div className="w-full mx-auto">
                            {faqs.slice(0, showfaqsAll ? faqs.length : 6).map((faq, index) => (
                                <div key={index} className="my-2 border-t">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center p-3 text-left"
                                    >
                                        <span>{faq.question}</span>
                                        <i className={`fa-solid ${expandedIndex === index ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                    </button>
                                    {expandedIndex === index && (
                                        <div className="p-4 bg-gray-100">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {!showfaqsAll && faqs.length > 6 && (
                                <button
                                    onClick={() => setShowfaqsAll(true)}
                                    className="mt-4 UniColor">
                                    View All Questions
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
















