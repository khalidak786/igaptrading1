document.addEventListener('DOMContentLoaded', () => {
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Data for products with SVG icons
    const productData = {
        'Energy Commodities': [
            { name: 'Crude Oil', description: 'Essential energy source for transportation and industrial processes. Sourced from key oil-producing regions globally.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9c0 3.298 1.408 6.273 3.5 8.243l.534.425a1.125 1.125 0 001.442-.423l.256-.513a1.125 1.125 0 00-.423-1.442l-.534-.425c-1.396-1.31-2.203-3.13-2.203-5.088 0-4.004 3.248-7.252 7.252-7.252S19.252 7.996 19.252 12c0 1.958-.807 3.778-2.203 5.088l-.534.425a1.125 1.125 0 00-.423 1.442l.256.513c.231.463.793.617 1.442.423l.534-.425C20.342 17.523 22.5 14.887 22.5 12c0-5.01-4.425-9-9.75-9zm-6 9a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H6zm3 0a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H9zm3 0a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Oil drop
            { name: 'Natural Gas', description: 'Clean-burning fossil fuel, used for electricity and heating. We facilitate trade of LNG and pipeline gas.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-500 mx-auto"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v2.25V18a3 3 0 01-3 3H6a3 3 0 01-3-3V8.25V6zm1.5 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zM16.5 9a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-1.5z" clip-rule="evenodd" /><path d="M12 11.25a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" /></svg>' }, // Gas tank/molecule
            { name: 'Coal', description: 'Primary energy source for power generation and steelmaking. Various grades including thermal and coking coal.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-800 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9c0 3.298 1.408 6.273 3.5 8.243l.534.425a1.125 1.125 0 001.442-.423l.256-.513a1.125 1.125 0 00-.423-1.442l-.534-.425c-1.396-1.31-2.203-3.13-2.203-5.088 0-4.004 3.248-7.252 7.252-7.252S19.252 7.996 19.252 12c0 1.958-.807 3.778-2.203 5.088l-.534.425a1.125 1.125 0 00-.423 1.442l.256.513c.231.463.793.617 1.442.423l.534-.425C20.342 17.523 22.5 14.887 22.5 12c0-5.01-4.425-9-9.75-9zM12 11.25a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /><path d="M12 2.25c-5.325 0-9.75 3.99-9.75 9c0 3.298 1.408 6.273 3.5 8.243l.534.425a1.125 1.125 0 001.442-.423l.256-.513a1.125 1.125 0 00-.423-1.442l-.534-.425c-1.396-1.31-2.203-3.13-2.203-5.088 0-4.004 3.248-7.252 7.252-7.252S19.252 7.996 19.252 12c0 1.958-.807 3.778-2.203 5.088l-.534.425a1.125 1.125 0 00-.423 1.442l.256.513c.231.463.793.617 1.442.423l.534-.425C20.342 17.523 22.5 14.887 22.5 12c0-5.01-4.425-9-9.75-9zM12 11.25a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" /></svg>' }, // Coal lump
            { name: 'Refined Petroleum Products', description: 'Gasoline, diesel, jet fuel – derived from crude oil. We ensure reliable supply for various sectors.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-red-700 mx-auto"><path fill-rule="evenodd" d="M12.97 2.59a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L13.5 5.56v10.94a.75.75 0 01-1.5 0V5.56L5.53 11.15a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 01.44-.22z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12.97 2.59a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L13.5 5.56v10.94a.75.75 0 01-1.5 0V5.56L5.53 11.15a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 01.44-.22z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 15.75a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75z" clip-rule="evenodd" /></svg>' }, // Fuel pump
        ],
        'Metals & Minerals': [
            { name: 'Iron Ore', description: 'Primary raw material for steel production globally. Various grades and origins available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-700 mx-auto"><path fill-rule="evenodd" d="M3.75 6.75a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v6.75a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V6.75zM12 8.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM10.5 12a.75.75 0 00-1.5 0v.008a.75.75 0 001.5 0V12zm3 0a.75.75 0 00-1.5 0v.008a.75.75 0 001.5 0V12z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Rock/ore
            { name: 'Copper', description: 'Ductile metal with high thermal and electrical conductivity, vital for electronics and construction. Available in cathodes, rods, and concentrates.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-orange-700 mx-auto"><path fill-rule="evenodd" d="M1.5 5.625c0-1.144.496-2.195 1.34-2.932A3.375 3.375 0 016.75 2.25h10.5c1.236 0 2.364.516 3.16 1.393.844.737 1.34 1.788 1.34 2.932v12.75A1.5 1.5 0 0121 20.25H3a1.5 1.5 0 01-1.5-1.5V5.625zM6 10a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H6zM18 10a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H18zM12 10a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Wire/coil
            { name: 'Aluminum', description: 'Lightweight and corrosion-resistant, used in aerospace, automotive, and packaging. Ingots, billets, and primary aluminum available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-gray-400 mx-auto"><path fill-rule="evenodd" d="M19.5 7.5a3 3 0 00-3-3h-9a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3v-9zM8.25 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Ingot
            { name: 'Zinc', description: 'Used in galvanizing steel, batteries, and die-casting alloys. We supply various forms including ingots and dust.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-500 mx-auto"><path fill-rule="evenodd" d="M10.875 1.5C11.625 1.5 12 1.875 12 2.625V18h.008a.75.75 0 01-.008 1.5H12v2.25a.75.75 0 01-1.5 0V19.5H10.5v-2.25h-.008a.75.75 0 01.008-1.5H10.5v-2.25h-.008a.75.75 0 01.008-1.5H10.5V6a.75.75 0 01-1.5 0V4.5H9v-2.25a.75.75 0 01-1.5 0V1.5H10.875z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Battery
            { name: 'Lead', description: 'Used in batteries, ammunition, and radiation shielding. Ingots and other forms are available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-600 mx-auto"><path fill-rule="evenodd" d="M10.5 6a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V6zM13.5 6a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V6zM12 18a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Shield
            { name: 'Nickel', description: 'Key component in stainless steel, alloys, and batteries. We offer various grades of nickel.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Coin/disc
            { name: 'Gold', description: 'Precious metal used in jewelry, finance, and electronics. Bullion, coins, and industrial gold available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-500 mx-auto"><path fill-rule="evenodd" d="M10.75 1.5a.75.75 0 00-.75.75V3.75h1.5V2.25a.75.75 0 00-.75-.75zM12 21a9 9 0 100-18 9 9 0 000 18z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M10.75 1.5a.75.75 0 00-.75.75V3.75h1.5V2.25a.75.75 0 00-.75-.75zM12 21a9 9 0 100-18 9 9 0 000 18z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 18a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 6a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Gold bar
            { name: 'Silver', description: 'Precious metal with high conductivity, used in electronics and photography. Bars, coins, and granules available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-gray-300 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Silver coin
            { name: 'Platinum', description: 'Rare metal used in catalytic converters, jewelry, and dentistry. Various forms including sponges and ingots.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-400 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Platinum bar
        ],
        'Agricultural Products': [
            { name: 'Wheat', description: 'Globally important cereal crop, key for food production. Various types including durum, hard red winter, and spring wheat.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-600 mx-auto"><path fill-rule="evenodd" d="M8.25 6.75a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H8.25zM12 6.75a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12zM15.75 6.75a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H15.75zM12 21a9 9 0 100-18 9 9 0 000 18z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Wheat stalk
            { name: 'Corn (Maize)', description: 'Versatile crop used for food, animal feed, and biofuels. Yellow and white corn available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Corn cob
            { name: 'Soybeans', description: 'High-protein crop for feed, oil, and various food products. Non-GMO and GMO options.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-lime-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Soybean pod
            { name: 'Sugar', description: 'Sweet crystalline substance, used extensively in food industry. Raw and refined sugar available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-rose-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Sugar cube
            { name: 'Coffee', description: 'Globally traded beverage commodity. Arabica and Robusta beans from various origins.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-amber-900 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Coffee bean
            { name: 'Cocoa', description: 'Used in chocolate and other food products. Beans, butter, and powder available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-red-800 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Cocoa bean
            { name: 'Cotton', description: 'Natural fiber used in textile industry. Various grades and staple lengths.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-200 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Cotton boll
            { name: 'Rubber', description: 'Natural or synthetic polymer, widely used in various industries. Ribbed Smoked Sheets (RSS) and Technically Specified Rubber (TSR).', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-900 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Rubber tree leaf
        ],
        'Chemicals & Plastics (Raw/Intermediary)': [
            { name: 'Plastic Pellets (Polyethylene, Polypropylene)', description: 'Raw forms of plastic, essential for injection molding and extrusion. Various grades for different applications.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-400 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Plastic pellet
            { name: 'Sulfuric Acid', description: 'Workhorse chemical, used in fertilizers, chemicals, and refining. High-purity and industrial grades.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-red-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Acid drop
            { name: 'Sodium Hydroxide (Caustic Soda)', description: 'Used in soaps, textiles, paper, and detergents. Flakes, pearls, and liquid forms available.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-purple-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Chemical bottle
            { name: 'Ethylene', description: 'Crucial feedstock for polyethylene and other chemicals. Supplied in various purity levels.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Molecular structure
            { name: 'Propylene', description: 'Used to produce polypropylene, resins, and fibers. Industrial grade for manufacturing.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-indigo-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Molecular structure
            { name: 'Industrial Solvents', description: 'Various chemical compounds used for dissolving materials in manufacturing processes. Acetone, toluene, and xylene.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Flask/beaker
        ],
        'Intermediary / Semi-Finished Products': [
            { name: 'Steel Billets/Slabs/Blooms', description: 'Semi-finished steel products, foundation for bars, wires, and sheets. Various sizes and steel grades.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v18a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9z" clip-rule="evenodd" /><path d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9z" /></svg>' }, // I-beam
            { name: 'Aluminum Ingots/Bars', description: 'Primary forms of aluminum, used in casting and manufacturing. Various alloys for specific applications.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-gray-400 mx-auto"><path fill-rule="evenodd" d="M19.5 7.5a3 3 0 00-3-3h-9a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3v-9zM8.25 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Ingot
            { name: 'Textile Yarn & Fabric', description: 'Spun fibers and woven materials used in clothing and home goods production. Cotton, polyester, silk, and blends.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-pink-400 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Yarn spool
            { name: 'Wood Pulp', description: 'Raw material for paper, cardboard, and other cellulose products. Bleached and unbleached kraft pulp.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-amber-800 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Wood log/chip
            { name: 'Electronic Components (Basic)', description: 'Resistors, capacitors, diodes, and other fundamental building blocks for electronics. High quality and tested components.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-teal-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Circuit board fragment
        ],
        'Industrial & Manufactured Goods': [
            { name: 'Steel Rebar', description: 'Reinforcing steel bar used in concrete construction. Various diameters and grades for structural integrity.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Rebar cross-section
            { name: 'Cement', description: 'Binding material for concrete and construction. OPC, PPC, and other special cements.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Cement bag
            { name: 'Industrial Pumps', description: 'Used for moving fluids in various industrial applications. Centrifugal, positive displacement, and specialized pumps.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-cyan-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Pump
            { name: 'Generators (Industrial)', description: 'Converts mechanical energy into electrical energy for various industries. Diesel, gas, and renewable energy generators.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-700 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Generator
            { name: 'Heavy Machinery Parts', description: 'Components for construction, mining, and agricultural machinery. Engine parts, hydraulic components, and tracks.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-orange-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Gear
            { name: 'Automotive Components', description: 'Parts for vehicle manufacturing, including engines, body panels, etc. OEM and aftermarket components.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-800 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Car wheel
            { name: 'Textile Products (Finished)', description: 'Fabrics, ready-made garments, home textiles. Wide range of materials and designs.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-pink-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Shirt
            { name: 'Electrical Cables & Wires', description: 'Conductors for power transmission and electrical systems. Copper and aluminum cables, various gauges.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Electrical plug
            { name: 'Solar Panels', description: 'Devices for converting sunlight into electricity. Monocrystalline, polycrystalline, and thin-film panels.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Solar panel
            { name: 'Wind Turbines', description: 'Equipment for converting wind energy into electricity. Various capacities for commercial and industrial use.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-teal-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Wind turbine
            { name: 'Pharmaceutical Raw Materials', description: 'Active pharmaceutical ingredients (APIs) and excipients for drug manufacturing. High-purity and certified materials.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-lime-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Pharmaceutical pill
            { name: 'Paper Products', description: 'Various paper types including printing paper, packaging paper, and specialty papers. Virgin and recycled options.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-400 mx-auto"><path fill-rule="evenodd" d="M11.25 4.5h-1.5a.75.75 0 00-.75.75v14.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75zm-6 0h-1.5a.75.75 0 00-.75.75v14.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75zM17.25 4.5h-1.5a.75.75 0 00-.75.75v14.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /></svg>' }, // Paper stack
        ],
        'Commodity-Linked Financial Instruments': [
            { name: 'Futures Contracts (e.g., WTI Crude Futures)', description: 'Agreements to buy/sell a commodity at a predetermined price and date. Used for hedging and speculation.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Chart/graph
            { name: 'Options Contracts', description: 'Gives the holder the right, but not the obligation, to buy/sell a commodity. Provides flexibility in volatile markets.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Scales of justice
            { name: 'Exchange Traded Funds (ETFs)', description: 'Investment funds that hold commodities or commodity futures. Offers diversified exposure to commodity markets.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-purple-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Stock chart
        ],
        'Recyclables & Environmental Solutions': [
            { name: 'Scrap Metals (Ferrous & Non-Ferrous)', description: 'Recycled metals for reuse in manufacturing. Includes steel, aluminum, copper scrap.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-500 mx-auto"><path fill-rule="evenodd" d="M1.5 6.75a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v6.75a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V6.75zM12 8.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM10.5 12a.75.75 0 00-1.5 0v.008a.75.75 0 001.5 0V12zm3 0a.75.75 0 00-1.5 0v.008a.75.75 0 001.5 0V12z" clip-rule="evenodd" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>' }, // Metal recycling symbol
            { name: 'Waste Paper & Cardboard', description: 'Recycled paper and cardboard for pulp and paper industry. OCC, mixed paper, deinked pulp.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-400 mx-auto"><path fill-rule="evenodd" d="M11.25 4.5h-1.5a.75.75 0 00-.75.75v14.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75zm-6 0h-1.5a.75.75 0 00-.75.75v14.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75zM17.25 4.5h-1.5a.75.75 0 00-.75.75v14.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /></svg>' }, // Paper recycling symbol
            { name: 'Recycled Plastics (PET, HDPE, PVC)', description: 'Post-consumer and post-industrial plastic waste for new plastic production. Flakes, pellets, and regrind.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-500 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Plastic recycling symbol
            { name: 'E-Waste', description: 'Electronic waste recycling for precious metals and other valuable materials. WEEE compliance and safe disposal.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-purple-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // E-waste icon
            { name: 'Biofuels (Ethanol, Biodiesel)', description: 'Renewable energy sources derived from biomass. Sustainable alternatives to fossil fuels.', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-600 mx-auto"><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 2.25c-5.325 0-9.75 3.99-9.75 9s4.425 9 9.75 9 9.75-3.99 9.75-9-4.425-9-9.75-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" /></svg>' }, // Leaf with droplet
        ],
    };

    // SVG for the main banner (abstract representation of global trade/connections)
    const globalTradeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-24 h-24 text-blue-500 mb-6 mx-auto animate-pulse">
        <path fill-rule="evenodd" d="M10.87 8.618A2.25 2.25 0 0112 7.5a2.25 2.25 0 011.13.118l6.195 1.549A2.25 2.25 0 0121 11.25v2.5a2.25 2.25 0 01-1.13 1.983l-6.196 1.549A2.25 2.25 0 0112 16.5a2.25 2.25 0 01-1.13-.118L4.674 14.26A2.25 2.25 0 013 12.75v-2.5a2.25 2.25 0 011.13-1.983l6.196-1.549zM12 9.75a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12zm-3.268 4.29a.75.75 0 00-.75.75V15h.008a.75.75 0 000-1.5H8.732zm6.536 0a.75.75 0 00-.75.75V15h.008a.75.75 0 000-1.5h-.008zM12 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clip-rule="evenodd" />
    </svg>
    `;

    // Inject the global trade SVG into its container
    document.getElementById('global-trade-svg').innerHTML = globalTradeSvg;

    // State for managing page visibility and search term
    let currentActivePage = 'home-page';
    let searchTerm = '';
    const productShowDetails = {}; // Stores state for product description toggles

    // Get page elements
    const homePage = document.getElementById('home-page');
    const aboutPage = document.getElementById('about-page');
    const expertisePage = document.getElementById('expertise-page');
    const productsPage = document.getElementById('products-page');
    const pages = [homePage, aboutPage, expertisePage, productsPage];

    // Get buttons
    const aboutUsBtnHome = document.getElementById('about-us-btn-home');
    const expertiseBtnHome = document.getElementById('expertise-btn-home');
    const exploreProductsBtnHome = document.getElementById('explore-products-btn-home');
    const backToHomeAbout = document.getElementById('back-to-home-about');
    const backToHomeExpertise = document.getElementById('back-to-home-expertise');
    const backToHomeProducts = document.getElementById('back-to-home-products');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const categoryNavigation = document.getElementById('category-navigation');
    const productListing = document.getElementById('product-listing');
    const noProductsMessage = document.getElementById('no-products-message');

    // Message Modal Elements
    const messageModal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseButton = document.querySelector('#message-modal .close-button');
    const modalOkButton = document.getElementById('modal-ok-button');

    // Function to show custom message modal
    const showMessage = (message) => {
        modalMessage.textContent = message;
        messageModal.classList.remove('hidden');
    };

    // Function to hide custom message modal
    const hideMessage = () => {
        messageModal.classList.add('hidden');
    };

    // Attach event listeners to modal buttons
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', hideMessage);
    }
    if (modalOkButton) {
        modalOkButton.addEventListener('click', hideMessage);
    }
    // Close modal if clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === messageModal) {
            hideMessage();
        }
    });

    // Function to navigate between pages
    const showPage = (pageId, resetSearch = true) => {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
        currentActivePage = pageId;

        // Reset search term if navigating from product page
        if (resetSearch && pageId !== 'products-page') {
            searchTerm = '';
            searchInput.value = '';
        }

        if (pageId === 'products-page') {
            renderProducts();
        }
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    // Filter products based on search term
    const getFilteredProducts = () => {
        if (!searchTerm) {
            return productData;
        }

        const filtered = {};
        Object.keys(productData).forEach(category => {
            const productsInCategory = productData[category].filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (productsInCategory.length > 0) {
                filtered[category] = productsInCategory;
            }
        });
        return filtered;
    };

    // Function to render products
    const renderProducts = (activeCategory = null) => {
        const filtered = getFilteredProducts();
        productListing.innerHTML = ''; // Clear previous products
        categoryNavigation.innerHTML = ''; // Clear previous categories

        const categoriesWithResults = Object.keys(filtered);

        if (categoriesWithResults.length === 0) {
            noProductsMessage.classList.remove('hidden');
            return;
        } else {
            noProductsMessage.classList.add('hidden');
        }

        // Determine the active category to display
        let currentCategoryToDisplay = activeCategory;
        if (!currentCategoryToDisplay || !categoriesWithResults.includes(currentCategoryToDisplay)) {
            currentCategoryToDisplay = categoriesWithResults[0]; // Default to the first category with results
        }

        // Render category navigation buttons
        categoriesWithResults.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.classList.add('px-6', 'py-3', 'rounded-full', 'text-lg', 'font-semibold', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-105', 'shadow-md');

            if (category === currentCategoryToDisplay) {
                button.classList.add('bg-blue-600', 'text-white', 'border-2', 'border-blue-800');
            } else {
                button.classList.add('bg-white', 'text-blue-700', 'border-2', 'border-blue-400', 'hover:bg-blue-50');
            }
            button.addEventListener('click', () => renderProducts(category));
            categoryNavigation.appendChild(button);
        });

        // Render products for the active category
        filtered[currentCategoryToDisplay].forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('bg-white', 'rounded-2xl', 'shadow-lg', 'p-6', 'text-center', 'border-t-4', 'border-blue-500', 'transform', 'transition', 'duration-300', 'hover:scale-105', 'hover:shadow-xl');

            productCard.innerHTML = `
                <div class="mb-4">${product.svg}</div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h3>
                <p id="description-${product.name.replace(/\s/g, '-')}" class="text-gray-700 text-base">
                    ${productShowDetails[product.name] ? product.description : `${product.description.substring(0, 100)}...`}
                </p>
                <button data-product-name="${product.name}" class="toggle-details-btn text-blue-500 hover:underline mt-2 text-sm">
                    ${productShowDetails[product.name] ? 'Show Less' : 'Read More'}
                </button>
                <button data-product-name="${product.name}" class="inquire-btn mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Inquire
                </button>
            `;
            productListing.appendChild(productCard);
        });

        // Add event listeners for "Read More" and "Inquire" buttons after rendering
        document.querySelectorAll('.toggle-details-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productName = event.target.dataset.productName;
                productShowDetails[productName] = !productShowDetails[productName];
                renderProducts(currentCategoryToDisplay); // Re-render to update description
            });
        });

        document.querySelectorAll('.inquire-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productName = event.target.dataset.productName;
                showMessage(`Thank you for your interest in ${productName}! Please contact us via email or WhatsApp.`);
            });
        });
    };

    // Event Listeners for Navigation
    if (aboutUsBtnHome) aboutUsBtnHome.addEventListener('click', () => showPage('about-page'));
    if (expertiseBtnHome) expertiseBtnHome.addEventListener('click', () => showPage('expertise-page'));
    if (exploreProductsBtnHome) exploreProductsBtnHome.addEventListener('click', () => showPage('products-page'));
    if (backToHomeAbout) backToHomeAbout.addEventListener('click', () => showPage('home-page'));
    if (backToHomeExpertise) backToHomeExpertise.addEventListener('click', () => showPage('home-page'));
    if (backToHomeProducts) backToHomeProducts.addEventListener('click', () => showPage('home-page'));

    // Search functionality
    const handleSearch = () => {
        searchTerm = searchInput.value.trim();
        showPage('products-page', false); // Show products page without resetting search term
        renderProducts(); // Re-render products with the new search term
    };

    if (searchButton) searchButton.addEventListener('click', handleSearch);
    if (searchInput) searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Initial render of the home page
    showPage('home-page');
});
