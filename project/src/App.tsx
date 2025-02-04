// import React, { useState } from 'react';
// import { Menu, Search, Heart, User, Flag , Button , ChevronDown, MapPin, List, Map, RefreshCw } from 'lucide-react';
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { But } from "@/components/ui/button";
import React, { useState } from 'react';
import { Menu, Search, Heart, User, Flag, ChevronDown, MapPin, List, Map, RefreshCw, } from 'lucide-react';
import { Card, CardContent } from "./card"; 
import { Button } from "./Component/button"; // Use the Button component from your own codebase



function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NB</span>
              </div>
              <span className="ml-2 text-xl font-bold">NOBROKER</span>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600">
                <span>Rent</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-emerald-600">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTYgOWg2TTYgMTNoMTJNNiAxN2gxMiIgc3Ryb2tlPSIjNjQ3NDhCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" 
                alt="Pay Rent" className="w-5 h-5 mr-2" />
              Pay Rent
            </button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
              Post Your Property
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-emerald-600">Sign up</button>
            <button className="px-4 py-2 text-gray-600 hover:text-emerald-600">Log in</button>
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <Heart className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3 flex items-center space-x-4">
          <div className="flex-1 flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Select 'Metro stations or Lines'"
                className="w-full pl-4 pr-24 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <div className="absolute right-0 top-0 h-full px-3 flex items-center border-l bg-gray-50">
                <span className="text-sm text-gray-500">Location</span>
              </div>
            </div>
            <div className="bg-red-500 text-white px-3 py-2 rounded-r-md">
              <span className="text-sm font-medium">Metro</span>
            </div>
          </div>
          <button className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-md flex items-center">
              <List className="w-5 h-5 mr-1" />
              List
            </button>
            <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-md flex items-center">
              <Map className="w-5 h-5 mr-1" />
              Map
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterSidebar() {
  const [rentRange, setRentRange] = useState([0, 500000]);

  return (
    <div className="w-64 bg-white shadow-md p-4 fixed left-0 top-32 bottom-16 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button className="flex items-center text-sm text-gray-600 hover:text-emerald-600">
          <RefreshCw className="w-4 h-4 mr-1" />
          Reset
        </button>
      </div>

      {/* BHK Type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">BHK Type</h3>
        <div className="grid grid-cols-3 gap-2">
          {['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'].map((type) => (
            <button
              key={type}
              className="px-3 py-2 text-sm bg-gray-50 rounded-md hover:bg-emerald-50 hover:text-emerald-600"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Rent Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Rent Range: ₹0 to ₹5 Lacs</h3>
        <input
          type="range"
          min="0"
          max="500000"
          value={rentRange[1]}
          onChange={(e) => setRentRange([0, parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
        />
      </div>

      {/* Visit Properties */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Visit properties within next 2 days</h3>
          <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">New</span>
        </div>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
          <span className="ml-2 text-sm text-gray-600">Show properties where owner is hosting a visit</span>
        </label>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Availability</h3>
        <div className="space-y-2">
          {['Immediate', 'Within 15 Days', 'Within 30 Days', 'After 30 Days'].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="availability"
                className="border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Tenants */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Preferred Tenants</h3>
        <div className="space-y-2">
          {['Family', 'Company', 'Bachelor Male', 'Bachelor Female'].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-600">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="w-64 bg-white shadow-md p-4 fixed right-0 top-32 bottom-16 overflow-y-auto">
      <div className="bg-white rounded-lg">
        <h3 className="text-red-500 font-medium mb-4">Quick links</h3>
        <div className="space-y-2">
          <h4 className="text-gray-700 font-medium mb-2">People also searched for</h4>
          {[
            'Flats in Munnekollal for rent',
            'Flats in Balagere for rent',
            'Flats in Panathur for rent',
            'Flats in Marathahalli for rent',
            'Flats in Karthik Nagar for rent',
            'Flats in Kadubeesanahalli for rent'
          ].map((link, index) => (
            <a
              key={index}
              href="#"
              className="block text-gray-600 hover:text-emerald-600 text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function PropertyCard() { 
  return (
  //   <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden">
  //     <div className="relative">
  //     <h1 className="text-xl font-semibold text-gray-800 mb-6">
  //   {/* 2 BHK Apartment In Pavani Ishta, Marathahalli, Bangalore For Rent In Marathahalli */}
  //   {property.title}
  // </h1><div>
  //       <img 
  //         src={property.image} 
  //         alt={property.title}
  //         className="w-sm h-48 object-cover"
  //       />
  //       {property.lowDeposit && (
  //         <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm">
  //           Low Deposit
  //         </div>
  //       )}
        
  //       </div>
  //     </div>
  //     <div className="p-4">
  //       <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
  //       <p className="text-gray-600 mb-2">{property.location}</p>
  //       <div className="flex justify-between items-center mb-4">
  //         <div>
  //           <span className="text-emerald-600 font-bold">₹{property.rent.toLocaleString()}</span>
  //           <span className="text-sm text-gray-500 ml-1">Rent</span>
  //         </div>
  //         <div>
  //           <span className="text-gray-700 font-semibold">₹{property.deposit.toLocaleString()}</span>
  //           <span className="text-sm text-gray-500 ml-1">Deposit</span>
  //         </div>
  //         <div>
  //           <span className="text-gray-700 font-semibold">₹{property.deposit.toLocaleString()}</span>
  //           <span className="text-sm text-gray-500 ml-1">Deposit</span>
  //         </div>
  //       </div>
  //       <div className="grid grid-cols-2 gap-4 mb-4">
  //         <div className="flex items-center">
  //           <span className="text-gray-600">{property.furnishing}</span>
  //         </div>
  //         <div className="flex items-center">
  //           <span className="text-gray-600">{property.type}</span>
  //         </div>
  //         <div className="flex items-center">
  //           <span className="text-gray-600">{property.tenantType}</span>
  //         </div>
  //         <div className="flex items-center">
  //           <span className="text-gray-600">{property.availability}</span>
  //         </div>
  //       </div>
  //       <button className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
  //         Get Owner Details
  //       </button>
  //     </div>
  //   </div>
  // <div className="flex justify-center items-center h-screen bg-gray-100">
  // <Card className="max-w-3xl bg-white shadow-xl rounded-2xl p-4">
  //   <CardContent>
  //     <div className="grid grid-cols-3 gap-4 items-start">
  //       <div className="col-span-2">
  //         <h2 className="text-lg font-bold text-gray-800">2 BHK Apartment In Pavani Ishta, Marathahalli, Bangalore For Rent In Marathahalli</h2>
  //         <p className="text-sm text-gray-500 mt-1">Pavani Ishta, Marathahalli, Bangalore Sai Baba Temple Rd, Green Garden Layout, <a href="#" className="text-blue-500">Explore Nearby</a></p>
  //         <div className="flex items-center mt-4 space-x-8">
  //           <div>
  //             <p className="text-xl font-semibold text-gray-800">₹ 35,000 +</p>
  //             <p className="text-sm text-gray-500">Rent (Non-Negotiable)</p>
  //           </div>
  //           <div>
  //             <p className="text-xl font-semibold text-gray-800">₹ 2,00,000</p>
  //             <p className="text-sm text-gray-500">Deposit</p>
  //           </div>
  //           <div>
  //             <p className="text-xl font-semibold text-gray-800">1,200 sqft</p>
  //             <p className="text-sm text-gray-500">Builtup</p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="col-span-1 flex flex-col items-center">
  //         <img
  //           src="https://via.placeholder.com/150"
  //           alt="Property"
  //           className="rounded-lg mb-4 w-full h-32 object-cover"
  //         />
  //         <div className="grid grid-cols-2 gap-4 w-full">
  //           <div className="flex flex-col items-start">
  //             <p className="font-semibold text-gray-700">Furnishing</p>
  //             <Button variant="outline" className="text-green-600 text-sm">Furnish</Button>
  //           </div>
  //           <div>
  //             <p className="font-semibold text-gray-700">Apartment Type</p>
  //             <p className="text-sm text-gray-600">2 BHK</p>
  //           </div>
  //           <div>
  //             <p className="font-semibold text-gray-700">Preferred Tenants</p>
  //             <p className="text-sm text-gray-600">Family</p>
  //           </div>
  //           <div>
  //             <p className="font-semibold text-gray-700">Available From</p>
  //             <p className="text-sm text-gray-600">15-Feb-2025</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="mt-4 flex items-center justify-between">
  //       <But className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">Get Owner Details</Button>
  //       <div className="flex items-center space-x-1">
  //         <Heart className="text-gray-500 w-2 h-2 cursor-pointer hover:text-red-500" />
  //         <Flag className="text-gray-500 w-2 h-2 cursor-pointer hover:text-blue-500" />
  //       </div>
  //     </div>
  //   </CardContent>
  // </Card>
// </div>
<main className="pt-32 pb-4 pl-64 pr-64 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
  <div className="grid grid-cols-1 gap-8">
  <div className="grid grid-cols-3 gap-4 items-start bg-red-50 shadow-lg rounded-lg p-6">
      <div className="col-span-2">
        <h2 className="text-lg font-bold text-gray-800">2 BHK Apartment In Pavani Ishta, Marathahalli, Bangalore For Rent In Marathahalli</h2>
        <p className="text-sm text-gray-500 mt-1">Pavani Ishta, Marathahalli, Bangalore Sai Baba Temple Rd, Green Garden Layout, <a href="#" className="text-blue-500">Explore Nearby</a></p>
        <div className="flex items-center mt-4 space-x-8">
          <div>
            <p className="text-xl font-semibold text-gray-800">₹ 35,000 +</p>
            <p className="text-sm text-gray-500">Rent (Non-Negotiable)</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">₹ 2,00,000</p>
            <p className="text-sm text-gray-500">Deposit</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">1,200 sqft</p>
            <p className="text-sm text-gray-500">Builtup</p>
          </div>
          
        </div>
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
          alt="Property"
          className="rounded-lg mb-4 w-53 h-36 "
        />
      </div>

      <div className="col-span-1 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Property"
          className="rounded-lg mb-4 w-32 h-32 "
        />
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-start">
            <p className="font-semibold text-gray-700">Furnishing</p>
            <Button variant="outline" className="text-green-600 text-sm">Furnish</Button>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Apartment Type</p>
            <p className="text-sm text-gray-600">2 BHK</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Preferred Tenants</p>
            <p className="text-sm text-gray-600">Family</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Available From</p>
            <p className="text-sm text-gray-600">15-Feb-2025</p>
          </div>
        </div>
      </div>
    
    <div className="mt-4 flex items-center justify-between">
      <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">Get Owner Details</Button>
      <div className="flex items-center space-x-2">
        <Heart className="text-gray-500 w-5 h-5 cursor-pointer hover:text-red-500" />
        <Flag className="text-gray-500 w-5 h-5 cursor-pointer hover:text-blue-500" />
      </div>
    </div>
    </div>
  </div>
</div>
</main>
  );
}
function PropertyCardss() {
  return (
    <main className="pt-8 pb-4 pl-64 pr-64 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
  <div className="grid grid-cols-1 gap-8">
    <div className="grid grid-cols-3 gap-4 items-start bg-red-50 shadow-lg rounded-lg p-6">
      <div className="col-span-2">
        <h2 className="text-lg font-bold text-gray-800">2 BHK Apartment In Pavani Ishta, Marathahalli, Bangalore For Rent In Marathahalli</h2>
        <p className="text-sm text-gray-500 mt-1">Pavani Ishta, Marathahalli, Bangalore Sai Baba Temple Rd, Green Garden Layout, <a href="#" className="text-blue-500">Explore Nearby</a></p>
        <div className="flex items-center mt-4 space-x-8">
          <div>
            <p className="text-xl font-semibold text-gray-800">₹ 35,000 +</p>
            <p className="text-sm text-gray-500">Rent (Non-Negotiable)</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">₹ 2,00,000</p>
            <p className="text-sm text-gray-500">Deposit</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">1,200 sqft</p>
            <p className="text-sm text-gray-500">Builtup</p>
          </div>
          
        </div>
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
          alt="Property"
          className="rounded-lg mb-4 w-53 h-36 "
        />
      </div>

      <div className="col-span-1 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Property"
          className="rounded-lg mb-4 w-32 h-32 "
        />
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-start">
            <p className="font-semibold text-gray-700">Furnishing</p>
            <Button variant="outline" className="text-green-600 text-sm">Furnish</Button>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Apartment Type</p>
            <p className="text-sm text-gray-600">2 BHK</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Preferred Tenants</p>
            <p className="text-sm text-gray-600">Family</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Available From</p>
            <p className="text-sm text-gray-600">15-Feb-2025</p>
          </div>
        </div>
      </div>
    
    <div className="mt-4 flex items-center justify-between">
      <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full">Get Owner Details</Button>
      <div className="flex items-center space-x-2">
        <Heart className="text-gray-500 w-5 h-5 cursor-pointer hover:text-red-500" />
        <Flag className="text-gray-500 w-5 h-5 cursor-pointer hover:text-blue-500" />
      </div>
    </div>
    </div>
  </div>
</div>
</main>
  );
}

function App() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  // const properties = [
  //   {
  //     id: 1,
  //     title: '2 BHK House For Rent In M N Homes',
  //     location: 'Independent House, Near Kundalahalli Gate',
  //     rent: 24000,
  //     deposit: 60000,
  //     furnishing: 'Semi Furnished',
  //     type: '2 BHK',
  //     tenantType: 'All',
  //     availability: 'Ready to Move',
  //     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  //     lowDeposit: true
  //   },
  //   {
  //     id: 2,
  //     title: '2 BHK Apartment In Keerthana Kings Bliss',
  //     location: 'Keerthana Kings Bliss, Green Garden Layout',
  //     rent: 32000,
  //     deposit: 100000,
  //     furnishing: 'Semi Furnished',
  //     type: '2 BHK',
  //     tenantType: 'Family',
  //     availability: 'Ready to Move',
  //     image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=800&q=80',
  //     lowDeposit: false
  //   }, {
  //     id: 1,
  //     title: '2 BHK House For Rent In M N Homes',
  //     location: 'Independent House, Near Kundalahalli Gate',
  //     rent: 2000,
  //     deposit: 60000,
  //     builtup: 1200,
  //     furnishing: 'Semi Furnished',
  //     type: '2 BHK',
  //     tenantType: 'All',
  //     availability: 'Ready to Move',
  //     preferredTenants: 'Family',
  //     availablefrom: '2024-09-01',
  //     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  //     lowDeposit: true
  //   }, {
  //     id: 1,
  //     title: '2 BHK House For Rent In M N Homes',
  //     location: 'Independent House, Near Kundalahalli Gate',
  //     rent: 24000,
  //     deposit: 60000,
  //     furnishing: 'Semi Furnished',
  //     type: '2 BHK',
  //     tenantType: 'All',
  //     availability: 'Ready to Move',
  //     preferredTenants: 'Family',
  //     availablefrom: '2024-09-01',
  //     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  //     lowDeposit: true
  //   }, 
  //   // Add more properties as needed
  // ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <FilterSidebar />
      <QuickLinks />
      {/* <main className="pt-32 pb-16 pl-64 pr-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-8 bg-yellow-50"> */}
            {/* {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
             */}
             
             <PropertyCard />
             <PropertyCardss />
             <PropertyCardss />
             <PropertyCardss />
             <PropertyCardss />
            {/* </div> */}
               
        {/* // </div> */}
      {/* // </main> */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 text-center text-sm">
            © 2024 NoBroker Technologies Solution. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;