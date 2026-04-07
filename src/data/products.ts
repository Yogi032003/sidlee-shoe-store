export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  story: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'The Sid Lee Crest',
    brand: 'Limited Edition',
    price: 120,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    category: 'Archive',
    story: 'A reimagining of our creative roots. Designed to leave a mark wherever you walk.'
  },
  {
    id: '2',
    name: 'AdWear Velocity',
    brand: 'Originals',
    price: 180,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop',
    category: 'Performance',
    story: 'Engineered for the fast-paced world of advertising. Fast, responsive, and unapologetic.'
  },
  {
    id: '3',
    name: 'Queen St. Runner',
    brand: 'Sid Lee X Concepts',
    price: 210,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
    category: 'Streetwear',
    story: 'Inspired by the textures of our 75 Queen office. A piece of architectural history for your feet.'
  },
  {
    id: '4',
    name: 'Monolith High-Top',
    brand: 'Archive',
    price: 250,
    image: 'https://images.unsplash.com/photo-1512374382149-4332c6c75d61?q=80&w=1915&auto=format&fit=crop',
    category: 'Archive',
    story: 'Bold, brutalist, and beautiful. A statement piece that commands attention.'
  },
  {
    id: '5',
    name: 'The Creative Flux',
    brand: 'Performance',
    price: 160,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop',
    category: 'Streetwear',
    story: 'Adapting to every environment. For the multidisciplinary mind.'
  },
  {
    id: '6',
    name: 'Sanctuary Low',
    brand: 'Originals',
    price: 140,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop',
    category: 'Lifestyle',
    story: 'Inspired by the reflective surfaces of our flagship stores. Clean lines, pure vision.'
  }
];
