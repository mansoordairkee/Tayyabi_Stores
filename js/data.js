// Tayyabi Stores - Product and Brand Data

const brands = [
  { id: "jaquar", name: "Jaquar", description: "Premium bathroom fittings and accessories", logo: "assets/brands/jaquar.jpg" },
  { id: "artize", name: "Artize", description: "Luxury sanitaryware and bath fittings", logo: "assets/brands/artize.png" },
  { id: "essco", name: "Essco", description: "Quality bath products and accessories", logo: "assets/brands/essco.jpg" },
  { id: "astral", name: "Astral", description: "Pipes and plumbing fittings", logo: "assets/brands/astral.jpg" },
  { id: "zoloto", name: "Zoloto", description: "Valves and plumbing accessories", logo: "assets/brands/zoloto.png" },
  { id: "nirali", name: "Nirali", description: "Kitchen sinks and solutions", logo: "assets/brands/nirali.jpeg" },
  { id: "faber", name: "Faber", description: "Kitchen chimneys and appliances", logo: "assets/brands/faber.png" },
  { id: "wilo-pumps", name: "Wilo Pumps", description: "Water pump systems and solutions", logo: "assets/brands/wilo_pumps.png" },
  { id: "ardex-endura", name: "Ardex Endura", description: "Building chemicals and waterproofing", logo: "assets/brands/ardex_endura.jpeg" }
];

const products = [
  // Jaquar Products (15)
  { id: 1, name: "Faucets", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Premium bathroom faucets with chrome finish and ceramic cartridge for smooth, long-lasting operation.", image: "assets/products/jaquar/Faucets.jpg", features: ["Chrome finish", "Ceramic cartridge", "Premium quality", "Long-lasting"] },
  { id: 2, name: "Showers", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Luxury shower systems including rainfall and hand showers for ultimate bathing experience.", image: "assets/products/jaquar/Shower.jpg", features: ["Rainfall experience", "Premium finish", "Easy installation", "Water efficient"] },
  { id: 3, name: "Cloud Showers", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Revolutionary cloud shower technology for spa-like experience at home.", image: "assets/products/jaquar/Cloud.jpg", features: ["Cloud technology", "Spa experience", "Modern design", "Innovative"] },
  { id: 4, name: "Sanitaryware", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Comprehensive range of premium sanitaryware including WCs, basins, and urinals.", image: "assets/products/jaquar/Sanitaryware.jpg", features: ["Ceramic construction", "Modern designs", "Easy to clean", "Durable"] },
  { id: 5, name: "Water Heaters", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Energy-efficient water heaters for instant hot water supply in bathrooms.", image: "assets/products/jaquar/Water Heater.jpg", features: ["Energy efficient", "Instant heating", "Safe operation", "Long life"] },
  { id: 6, name: "Whirlpools", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Luxury whirlpool bathtubs for relaxation and hydrotherapy at home.", image: "assets/products/jaquar/Whirlpool.jpg", features: ["Hydrotherapy jets", "Luxury experience", "Durable construction", "Spa quality"] },
  { id: 7, name: "Bath Tubs", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Elegant freestanding and built-in bathtubs for modern bathrooms.", image: "assets/products/jaquar/Bath Tubs.jpg", features: ["Freestanding & built-in", "Elegant designs", "Comfortable", "Premium quality"] },
  { id: 8, name: "Spas", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Home spa solutions for ultimate relaxation and wellness.", image: "assets/products/jaquar/Spas.jpg", features: ["Spa experience", "Wellness focused", "Luxury design", "Premium features"] },
  { id: 9, name: "Saunas", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Premium sauna systems for health and relaxation at home.", image: "assets/products/jaquar/Sauna.jpg", features: ["Health benefits", "Easy to use", "Premium construction", "Relaxation"] },
  { id: 10, name: "Shower Enclosures", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Modern glass shower enclosures for contemporary bathrooms.", image: "assets/products/jaquar/Shower Enclosure.jpg", features: ["Tempered glass", "Modern design", "Easy maintenance", "Durable frames"] },
  { id: 11, name: "Steam Bath Solutions", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Complete steam bath systems for home wellness and relaxation.", image: "assets/products/jaquar/Steam Bath Solutions.jpg", features: ["Steam therapy", "Wellness benefits", "Complete system", "Easy control"] },
  { id: 12, name: "Shower Panels", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Integrated shower panels with multiple water outlets and massage jets.", image: "assets/products/jaquar/Shower Panels.jpg", features: ["Multiple outlets", "Massage jets", "Integrated design", "Premium finish"] },
  { id: 13, name: "Flushing Systems", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Advanced flushing systems for water-efficient toilet operation.", image: "assets/products/jaquar/Flushing Systems.jpg", features: ["Water efficient", "Dual flush", "Silent operation", "Reliable"] },
  { id: 14, name: "Accessories", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Complete range of bathroom accessories including towel bars, soap dispensers, and more.", image: "assets/products/jaquar/Accessories.jpg", features: ["Complete range", "Premium finish", "Modern designs", "Durable"] },
  { id: 15, name: "Diverters & Shower Valves", category: "Bathroom Fittings & Sanitaryware", brand: "Jaquar", description: "Precision-engineered diverters and shower valves for optimal water control.", image: "assets/products/jaquar/Diverter & Shower Valve.jpg", features: ["Precise control", "Premium quality", "Easy operation", "Long-lasting"] },
  
  // Artize Products (5)
  { id: 16, name: "Faucets", category: "Bathroom Fittings & Sanitaryware", brand: "Artize", description: "Designer faucets born from art, combining aesthetics with functionality.", image: "assets/products/artize/Faucets.jpg", features: ["Artistic design", "Premium finish", "Innovative technology", "Luxury"] },
  { id: 17, name: "Showers", category: "Bathroom Fittings & Sanitaryware", brand: "Artize", description: "Luxury shower systems with cutting-edge design and technology.", image: "assets/products/artize/Showers.jpg", features: ["Designer aesthetics", "Advanced features", "Premium materials", "Luxury experience"] },
  { id: 18, name: "Sanitaryware", category: "Bathroom Fittings & Sanitaryware", brand: "Artize", description: "Premium ceramic sanitaryware with artistic designs for luxury bathrooms.", image: "assets/products/artize/Sanitaryware.jpg", features: ["Artistic designs", "Premium ceramic", "Luxury finish", "Contemporary"] },
  { id: 19, name: "Wellness", category: "Bathroom Fittings & Sanitaryware", brand: "Artize", description: "Wellness-focused bathroom products for complete relaxation and rejuvenation.", image: "assets/products/artize/Wellness.jpg", features: ["Wellness focused", "Spa experience", "Premium quality", "Relaxation"] },
  { id: 20, name: "Flushing Systems", category: "Bathroom Fittings & Sanitaryware", brand: "Artize", description: "Designer flushing systems with advanced technology and elegant design.", image: "assets/products/artize/Flushing Systems.jpg", features: ["Designer aesthetics", "Advanced technology", "Water efficient", "Quiet operation"] },
  
  // Essco Products (7)
  { id: 21, name: "Faucets", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Economical yet quality bathroom faucets for every home.", image: "assets/products/essco/Faucets.jpg", features: ["Quality construction", "Affordable", "Chrome finish", "Reliable"] },
  { id: 22, name: "Sanitaryware", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Complete range of sanitaryware combining quality and economy.", image: "assets/products/essco/Sanitaryware.jpg", features: ["Quality ceramic", "Affordable pricing", "Modern designs", "Durable"] },
  { id: 23, name: "Showers", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Reliable shower systems offering great value for money.", image: "assets/products/essco/Showers.jpg", features: ["Reliable performance", "Good value", "Easy installation", "Quality finish"] },
  { id: 24, name: "Cisterns", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Efficient cisterns with dual-flush technology for water conservation.", image: "assets/products/essco/Cisterns.jpg", features: ["Dual flush", "Water saving", "Reliable operation", "Easy maintenance"] },
  { id: 25, name: "Allied Items", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Comprehensive range of bathroom allied items and mechanisms.", image: "assets/products/essco/Allied Items.jpg", features: ["Complete range", "Quality construction", "Reliable", "Affordable"] },
  { id: 26, name: "Bathroom Accessories", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Essential bathroom accessories for complete bathroom solutions.", image: "assets/products/essco/Bathroom Accessories.jpg", features: ["Essential accessories", "Quality finish", "Affordable", "Durable"] },
  { id: 27, name: "Water Heaters", category: "Bathroom Fittings & Sanitaryware", brand: "Essco", description: "Energy-efficient water heaters for comfortable bathing experience.", image: "assets/products/essco/Water Heaters.jpg", features: ["Energy efficient", "Reliable heating", "Safe operation", "Good value"] },
  
  // Astral Products (12)
  { id: 28, name: "Plumbing Pipes & Fittings", category: "Plumbing Items", brand: "Astral", description: "Premium quality UPVC/CPVC pipes and fittings for plumbing applications.", image: "assets/products/astral/Plumbing Pipes & Fittings.jpg", features: ["Premium quality", "Corrosion resistant", "Long life", "ISI certified"] },
  { id: 29, name: "Sewerage Drainage Pipes & Fittings", category: "Plumbing Items", brand: "Astral", description: "Durable sewerage and drainage pipe systems for efficient waste management.", image: "assets/products/astral/Sewerage Drainage Pipes & Fittings.jpg", features: ["Durable construction", "Leak proof", "Easy installation", "Long-lasting"] },
  { id: 30, name: "Agriculture Pipes & Fittings", category: "Plumbing Items", brand: "Astral", description: "Specialized pipes and fittings for agricultural irrigation systems.", image: "assets/products/astral/Agriculture Pipes & Fittings.jpg", features: ["UV resistant", "Durable", "Weather resistant", "Cost effective"] },
  { id: 31, name: "Water Tanks", category: "Plumbing Items", brand: "Astral", description: "Multi-layered water storage tanks with food-grade material.", image: "assets/products/astral/Water Tanks.jpg", features: ["Multi-layered", "Food grade", "UV resistant", "Long life"] },
  { id: 32, name: "Industrial Pipes & Fittings", category: "Plumbing Items", brand: "Astral", description: "Heavy-duty pipes and fittings for industrial applications.", image: "assets/products/astral/Industrial Pipes & Fittings.jpg", features: ["Heavy duty", "Chemical resistant", "High pressure", "Industrial grade"] },
  { id: 33, name: "Cable Protection", category: "Plumbing Items", brand: "Astral", description: "Protective conduits for electrical and communication cables.", image: "assets/products/astral/Cable Protection.jpg", features: ["Cable protection", "Durable", "Flame retardant", "Easy installation"] },
  { id: 34, name: "Fire Sprinkler Pipes & Fittings", category: "Plumbing Items", brand: "Astral", description: "Fire safety sprinkler system pipes and fittings meeting international standards.", image: "assets/products/astral/Fire Sprinklers Pipes & Fittings.jpg", features: ["Fire safety", "International standards", "Reliable", "Quality assured"] },
  { id: 35, name: "Urban Infrastructure", category: "Plumbing Items", brand: "Astral", description: "Large diameter pipes for urban infrastructure and public utility projects.", image: "assets/products/astral/Urban Infrastructure.jpg", features: ["Large diameter", "High strength", "Long life", "Project grade"] },
  { id: 36, name: "Ancillary Products", category: "Plumbing Items", brand: "Astral", description: "Supporting products and accessories for complete piping solutions.", image: "assets/products/astral/Ancillary Products.jpg", features: ["Complete solutions", "Quality accessories", "Compatible", "Reliable"] },
  { id: 37, name: "Solvent Cement", category: "Plumbing Items", brand: "Astral", description: "High-strength solvent cement for joining UPVC/CPVC pipes.", image: "assets/products/astral/Solvent Cement.jpg", features: ["High strength", "Quick setting", "Leak proof joints", "Easy application"] },
  { id: 38, name: "Insulation Tube", category: "Plumbing Items", brand: "Astral", description: "Thermal insulation tubes for pipes to prevent heat loss.", image: "assets/products/astral/Insulation Tube.jpg", features: ["Thermal insulation", "Energy saving", "Easy installation", "Durable"] },
  { id: 39, name: "Specialty Fittings", category: "Plumbing Items", brand: "Astral", description: "Specialized fittings for unique plumbing requirements.", image: "assets/products/astral/Specialty Fittings.jpg", features: ["Specialized solutions", "Quality construction", "Reliable", "Versatile"] },
  
  // Zoloto Products (13)
  { id: 40, name: "Globe Valves", category: "Plumbing Items", brand: "Zoloto", description: "Precision-engineered globe valves for flow regulation and shut-off.", image: "assets/products/zoloto/Globe Valves.jpg", features: ["Precise control", "Brass construction", "Leak proof", "Long life"] },
  { id: 41, name: "Gate Valves / Sluice Valves", category: "Plumbing Items", brand: "Zoloto", description: "Heavy-duty gate valves for on/off control in plumbing systems.", image: "assets/products/zoloto/Gate Valves_Sluice Valves.jpg", features: ["Heavy duty", "Full bore", "Minimal pressure drop", "Reliable"] },
  { id: 42, name: "Check Valves / NRV", category: "Plumbing Items", brand: "Zoloto", description: "Non-return valves to prevent backflow in piping systems.", image: "assets/products/zoloto/Check Valves_NRV.jpg", features: ["Prevents backflow", "Reliable operation", "Durable", "Low maintenance"] },
  { id: 43, name: "Ball Valves", category: "Plumbing Items", brand: "Zoloto", description: "Quarter-turn ball valves for quick on/off control.", image: "assets/products/zoloto/Ball Valves.jpg", features: ["Quarter turn", "Full bore", "Leak proof", "Easy operation"] },
  { id: 44, name: "Strainers", category: "Plumbing Items", brand: "Zoloto", description: "Y-type strainers for filtering debris from piping systems.", image: "assets/products/zoloto/Strainers.jpg", features: ["Debris filtering", "Easy cleaning", "Durable", "Corrosion resistant"] },
  { id: 45, name: "Butterfly Valves", category: "Plumbing Items", brand: "Zoloto", description: "Compact butterfly valves for flow regulation in large diameter pipes.", image: "assets/products/zoloto/Butterfly Valves.jpg", features: ["Compact design", "Large diameter", "Low torque", "Space saving"] },
  { id: 46, name: "Pressure Reducing Valves", category: "Plumbing Items", brand: "Zoloto", description: "Automatic pressure reducing valves for maintaining constant downstream pressure.", image: "assets/products/zoloto/Pressure Reducing Valves.jpg", features: ["Pressure regulation", "Automatic operation", "Accurate control", "Reliable"] },
  { id: 47, name: "Double Regulating Balancing Valves", category: "Plumbing Items", brand: "Zoloto", description: "Precision balancing valves for HVAC and hydronic systems.", image: "assets/products/zoloto/Double Regulating Balancing Valves.jpg", features: ["Precise balancing", "HVAC systems", "Flow measurement", "Premium quality"] },
  { id: 48, name: "Fire Hydrant Valves / Landing Valves", category: "Plumbing Items", brand: "Zoloto", description: "Fire safety valves for fire fighting systems and hydrants.", image: "assets/products/zoloto/Fire Hydrant Valves_Landing Valves.jpg", features: ["Fire safety", "ISI certified", "Reliable", "Heavy duty"] },
  { id: 49, name: "Transformer Valves", category: "Plumbing Items", brand: "Zoloto", description: "Specialized valves for transformer cooling systems.", image: "assets/products/zoloto/Transformer Valves.jpg", features: ["Specialized application", "Reliable operation", "Quality construction", "Long life"] },
  { id: 50, name: "Steam Traps", category: "Plumbing Items", brand: "Zoloto", description: "Automatic steam traps for removing condensate from steam systems.", image: "assets/products/zoloto/Steam Traps.jpg", features: ["Automatic operation", "Energy saving", "Reliable", "Low maintenance"] },
  { id: 51, name: "Needle Valves", category: "Plumbing Items", brand: "Zoloto", description: "Precision needle valves for fine flow control in instrumentation.", image: "assets/products/zoloto/Needle Valves.jpg", features: ["Fine control", "Precision machined", "Leak proof", "Instrumentation grade"] },
  { id: 52, name: "Other Valves", category: "Plumbing Items", brand: "Zoloto", description: "Specialized valves for unique applications and requirements.", image: "assets/products/zoloto/Other Valves.jpg", features: ["Specialized solutions", "Custom applications", "Quality assured", "Reliable"] },
  
  // Nirali Products (3)
  { id: 53, name: "Kitchen Sinks", category: "Kitchen Fittings", brand: "Nirali", description: "India's No.1 kitchen sink brand offering premium stainless steel sinks.", image: "assets/products/nirali/kitchen sink .jpg", features: ["Stainless steel", "Premium quality", "Modern designs", "Rust resistant"] },
  { id: 54, name: "Floor Drains", category: "Bathroom Fittings & Sanitaryware", brand: "Nirali", description: "High-quality floor drains for efficient water drainage.", image: "assets/products/nirali/floor drains.jpg", features: ["Efficient drainage", "Stainless steel", "Anti-clog design", "Durable"] },
  { id: 55, name: "Kitchen Accessories", category: "Kitchen Fittings", brand: "Nirali", description: "Complete range of kitchen accessories and fittings.", image: "assets/products/nirali/Accessories .jpg", features: ["Complete range", "Quality construction", "Modern designs", "Functional"] },
  
  // Faber Products (7)
  { id: 56, name: "Chimneys", category: "Kitchen Appliances", brand: "Faber", description: "Premium kitchen chimneys for smoke-free cooking experience.", image: "assets/products/faber/Chimneys.jpg", features: ["Powerful suction", "Silent operation", "Modern design", "Easy cleaning"] },
  { id: 57, name: "Gas Appliances", category: "Kitchen Appliances", brand: "Faber", description: "High-performance gas hobs and cooktops for modern kitchens.", image: "assets/products/faber/Gas Appliances.jpg", features: ["High efficiency", "Safety features", "Durable", "Modern design"] },
  { id: 58, name: "Built-in Appliances", category: "Kitchen Appliances", brand: "Faber", description: "Premium built-in kitchen appliances for modular kitchens.", image: "assets/products/faber/Built in Appliances.jpg", features: ["Built-in design", "Premium quality", "Modern aesthetics", "Space saving"] },
  { id: 59, name: "Dishwashers", category: "Kitchen Appliances", brand: "Faber", description: "Efficient dishwashers for spotless cleaning and hygiene.", image: "assets/products/faber/Dishwashers.jpg", features: ["Efficient cleaning", "Water saving", "Multiple programs", "Energy efficient"] },
  { id: 60, name: "Water Heaters", category: "Kitchen Appliances", brand: "Faber", description: "Instant water heaters for kitchen and bathroom use.", image: "assets/products/faber/Water Heaters.jpg", features: ["Instant heating", "Energy efficient", "Compact design", "Safe operation"] },
  { id: 61, name: "Water Purifiers", category: "Kitchen Appliances", brand: "Faber", description: "Advanced water purification systems for clean drinking water.", image: "assets/products/faber/Water Purifiers.jpg", features: ["Multi-stage purification", "Safe drinking water", "Easy maintenance", "Healthy"] },
  { id: 62, name: "Small Appliances", category: "Kitchen Appliances", brand: "Faber", description: "Range of small kitchen appliances for convenient cooking.", image: "assets/products/faber/Small Appliances.jpg", features: ["Convenient", "Compact design", "Versatile", "Quality construction"] },
  
  // Wilo Pumps Products (4)
  { id: 63, name: "Cooling & Air Conditioning", category: "Pumps", brand: "Wilo Pumps", description: "Pump solutions for cooling towers and air conditioning systems.", image: "assets/products/wilo/Cooling and air conditioning.jpg", features: ["Energy efficient", "Reliable operation", "Low maintenance", "Quiet"] },
  { id: 64, name: "Drainage & Sewage", category: "Pumps", brand: "Wilo Pumps", description: "Submersible pumps for drainage and sewage applications.", image: "assets/products/wilo/Drainage and sewage.jpg", features: ["Submersible", "Clog-free", "Durable", "Reliable"] },
  { id: 65, name: "Heating Systems", category: "Pumps", brand: "Wilo Pumps", description: "Circulation pumps for heating systems and hot water supply.", image: "assets/products/wilo/Heating.jpg", features: ["Energy efficient", "Quiet operation", "Reliable", "Long life"] },
  { id: 66, name: "Water Supply", category: "Pumps", brand: "Wilo Pumps", description: "High-performance water supply pumps for residential and commercial use.", image: "assets/products/wilo/Water supply.jpg", features: ["High performance", "Pressure control", "Energy saving", "Durable"] },
  
  // Ardex Endura Products (5)
  { id: 67, name: "Tile & Stone Installations", category: "Tiles and Construction Materials", brand: "Ardex Endura", description: "Professional tile adhesives and installation systems.", image: "assets/products/ardex/Tile & Stone Installations.jpg", features: ["Professional grade", "Strong bonding", "Easy application", "Long-lasting"] },
  { id: 68, name: "Waterproofing Systems", category: "Tiles and Construction Materials", brand: "Ardex Endura", description: "Complete waterproofing solutions for construction applications.", image: "assets/products/ardex/Waterproofing Systems.jpg", features: ["Complete protection", "Durable", "Easy application", "Reliable"] },
  { id: 69, name: "Flooring Solutions", category: "Tiles and Construction Materials", brand: "Ardex Endura", description: "Self-leveling compounds and flooring solutions for perfect surfaces.", image: "assets/products/ardex/Flooring Solutions.jpg", features: ["Self-leveling", "Perfect finish", "Fast setting", "Durable"] },
  { id: 70, name: "Flooring Adhesives", category: "Tiles and Construction Materials", brand: "Ardex Endura", description: "High-strength adhesives for all types of flooring installations.", image: "assets/products/ardex/Flooring Adhesives.jpg", features: ["High strength", "Versatile", "Fast setting", "Reliable bonding"] },
  { id: 71, name: "Concrete Repair, Anchors & Grouts", category: "Tiles and Construction Materials", brand: "Ardex Endura", description: "Specialized products for concrete repair and structural grouting.", image: "assets/products/ardex/Concrete Repair, Anchors & Grouts.jpg", features: ["Structural repair", "High strength", "Durable", "Professional grade"] }
];

const categories = ["All", "Bathroom Fittings", "Kitchen Fittings", "Kitchen Appliances", "Plumbing", "Building Materials"];

// Helper functions
function getProductsByBrand(brandName) {
  return products.filter(p => p.brand === brandName);
}

function getProductsByCategory(category) {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

function getBrandBySlug(slug) {
  return brands.find(b => b.id === slug);
}

function filterProducts(options = {}) {
  let result = [...products];
  
  if (options.category && options.category !== "All") {
    result = result.filter(p => p.category === options.category);
  }
  
  if (options.brand && options.brand !== "All") {
    result = result.filter(p => p.brand === options.brand);
  }
  
  if (options.search) {
    const q = options.search.toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    );
  }
  
  return result;
}
