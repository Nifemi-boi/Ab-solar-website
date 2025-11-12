import { Product } from '@/types/product';

export const products: Product[] = [
  // Solar Panels
  {
    id: 'sp-1',
    name: '450W Monocrystalline Solar Panel',
    category: 'solar-panels',
    price: 85000,
    capacity: '450W',
    description: 'High-efficiency monocrystalline solar panel with 21% efficiency rate. Perfect for residential installations.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    rating: 4.8,
    inStock: true,
    specs: {
      'Power Output': '450W',
      'Efficiency': '21%',
      'Warranty': '25 years',
      'Dimensions': '2108 x 1048 x 40mm'
    }
  },
  {
    id: 'sp-2',
    name: '550W Bifacial Solar Panel',
    category: 'solar-panels',
    price: 115000,
    capacity: '550W',
    description: 'Premium bifacial technology captures sunlight from both sides for maximum energy generation.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
    rating: 4.9,
    inStock: true,
    specs: {
      'Power Output': '550W',
      'Efficiency': '22.8%',
      'Warranty': '30 years',
      'Type': 'Bifacial'
    }
  },
  {
    id: 'sp-3',
    name: '350W Polycrystalline Solar Panel',
    category: 'solar-panels',
    price: 65000,
    capacity: '350W',
    description: 'Cost-effective polycrystalline panel ideal for large-scale installations.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
    rating: 4.5,
    inStock: true
  },

  // Inverters
  {
    id: 'inv-1',
    name: '2.5kVA Hybrid Solar Inverter',
    category: 'inverters',
    price: 185000,
    capacity: '2.5kVA',
    description: 'Intelligent hybrid inverter with MPPT technology. Supports solar, grid, and battery backup.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
    rating: 4.7,
    inStock: true,
    specs: {
      'Capacity': '2.5kVA / 2000W',
      'Input Voltage': '12V DC',
      'Output': '230V AC',
      'Efficiency': '93%'
    }
  },
  {
    id: 'inv-2',
    name: '5kVA Pure Sine Wave Inverter',
    category: 'inverters',
    price: 325000,
    capacity: '5kVA',
    description: 'High-capacity pure sine wave inverter for powering sensitive equipment and entire homes.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
    rating: 4.9,
    inStock: true,
    specs: {
      'Capacity': '5kVA / 4000W',
      'Battery Voltage': '48V',
      'Surge Power': '8000W'
    }
  },
  {
    id: 'inv-3',
    name: '3.5kVA MPPT Solar Inverter',
    category: 'inverters',
    price: 245000,
    capacity: '3.5kVA',
    description: 'Advanced MPPT solar charge controller with WiFi monitoring capability.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    rating: 4.6,
    inStock: true
  },

  // Batteries
  {
    id: 'bat-1',
    name: '200Ah Lithium Battery',
    category: 'batteries',
    price: 425000,
    capacity: '200Ah',
    description: 'Long-lasting lithium-ion battery with 6000+ cycle life. Maintenance-free and lightweight.',
    image: 'https://images.unsplash.com/photo-1550411294-098f04faddcf?w=600&h=400&fit=crop',
    rating: 4.9,
    inStock: true,
    specs: {
      'Capacity': '200Ah @ 12.8V',
      'Cycle Life': '6000+ cycles',
      'Weight': '22kg',
      'Warranty': '10 years'
    }
  },
  {
    id: 'bat-2',
    name: '220Ah Tubular Deep Cycle Battery',
    category: 'batteries',
    price: 145000,
    capacity: '220Ah',
    description: 'Reliable tubular battery with excellent deep discharge performance. Industry-proven technology.',
    image: 'https://images.unsplash.com/photo-1586952405118-c47e88a4c1fc?w=600&h=400&fit=crop',
    rating: 4.4,
    inStock: true,
    specs: {
      'Capacity': '220Ah @ 12V',
      'Type': 'Tubular Lead-Acid',
      'Life Expectancy': '5-7 years'
    }
  },
  {
    id: 'bat-3',
    name: '150Ah Gel Battery',
    category: 'batteries',
    price: 195000,
    capacity: '150Ah',
    description: 'Sealed maintenance-free gel battery ideal for solar applications.',
    image: 'https://images.unsplash.com/photo-1591358144083-fc2c5cf83648?w=600&h=400&fit=crop',
    rating: 4.6,
    inStock: false
  },

  // Charge Controllers
  {
    id: 'cc-1',
    name: '60A MPPT Charge Controller',
    category: 'charge-controllers',
    price: 85000,
    capacity: '60A',
    description: 'Maximum Power Point Tracking controller for optimal solar panel efficiency. LCD display included.',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=400&fit=crop',
    rating: 4.7,
    inStock: true,
    specs: {
      'Current': '60A',
      'System Voltage': '12V/24V/48V Auto',
      'Max PV Input': '150V',
      'Efficiency': '98%'
    }
  },
  {
    id: 'cc-2',
    name: '40A PWM Solar Charge Controller',
    category: 'charge-controllers',
    price: 35000,
    capacity: '40A',
    description: 'Affordable PWM controller with overcharge and deep discharge protection.',
    image: 'https://images.unsplash.com/photo-1597453738966-820383ce8b48?w=600&h=400&fit=crop',
    rating: 4.3,
    inStock: true
  },

  // Surge Breakers
  {
    id: 'sb-1',
    name: 'DC Surge Protection Device 1000V',
    category: 'surge-breakers',
    price: 28000,
    description: 'Essential lightning and surge protection for your solar system. Protects against voltage spikes.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
    rating: 4.8,
    inStock: true,
    specs: {
      'Max Voltage': '1000V DC',
      'Response Time': '<25ns',
      'Protection Class': 'Type 2'
    }
  },
  {
    id: 'sb-2',
    name: 'AC Surge Protector 20kA',
    category: 'surge-breakers',
    price: 22000,
    description: 'Heavy-duty AC surge protection for inverter output and home appliances.',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=400&fit=crop',
    rating: 4.6,
    inStock: true
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'Solar Panel Mounting Kit',
    category: 'accessories',
    price: 45000,
    description: 'Complete aluminum mounting rails and hardware for 4-6 solar panels. Corrosion-resistant.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'acc-2',
    name: 'MC4 Solar Connectors (10 pairs)',
    category: 'accessories',
    price: 8500,
    description: 'Premium weatherproof MC4 connectors for secure solar panel connections.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'acc-3',
    name: '4mm² Solar Cable (50m Roll)',
    category: 'accessories',
    price: 32000,
    description: 'UV-resistant, double-insulated solar cable rated for outdoor use.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
    rating: 4.6,
    inStock: true
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'solar-panels', name: 'Solar Panels' },
  { id: 'inverters', name: 'Inverters' },
  { id: 'batteries', name: 'Batteries' },
  { id: 'charge-controllers', name: 'Charge Controllers' },
  { id: 'surge-breakers', name: 'Surge Breakers' },
  { id: 'accessories', name: 'Accessories' },
];
