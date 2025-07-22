// SEO Utils para Nexus Gaming Ecuador
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'product' | 'article';
}

export const defaultSEO = {
  siteName: "Nexus Gaming Ecuador",
  siteUrl: "https://nexusgaming.ec",
  defaultTitle: "Nexus Gaming Ecuador - Tienda Gaming Virtual #1 en Ecuador",
  defaultDescription: "🎮 Tienda Gaming Virtual líder en Ecuador. PCs Gaming, Laptops Gaming, Componentes y Periféricos. ✅ Envíos bajo pedido ✅ Garantía ✅ Precios competitivos ✅ Síguenos en Instagram",
  defaultKeywords: "tienda gaming virtual ecuador, pc gaming online ecuador, laptop gaming entrega domicilio, componentes pc envios ecuador, perifericos gaming virtual, nexus gaming instagram",
  defaultImage: "/og-image.jpg",
  instagramHandle: "@nexusgaming.ec",
  contactEmail: "info@nexusgaming.ec",
  phone: "+593-99-123-4567"
};

// SEO para páginas específicas
export const pageSEO = {
  home: {
    title: "Nexus Gaming Ecuador - Tienda Gaming Virtual #1 | Envíos bajo Pedido",
    description: "🎮 Tienda Gaming Virtual en Ecuador. PCs Gaming, Laptops Gaming y Periféricos con envíos bajo pedido. ✅ Síguenos en Instagram ✅ WhatsApp ✅ Garantía oficial",
    keywords: "tienda gaming virtual ecuador, pc gaming online, laptop gaming domicilio, envios bajo pedido gaming"
  },
  
  products: {
    title: "Productos Gaming Online | Nexus Gaming Ecuador - Catálogo Virtual",
    description: "🛒 Catálogo completo de productos gaming online: PCs armados, componentes, periféricos. Compra desde Instagram o WhatsApp con envíos bajo pedido.",
    keywords: "productos gaming online, catalogo gaming virtual, compra gaming instagram"
  },
  
  gamingPCs: {
    title: "PCs Gaming | Nexus Gaming Ecuador - Computadoras Gaming Envío Domicilio",
    description: "💻 PCs Gaming pre-armados con envío a domicilio bajo pedido. Configuraciones gaming desde básicas hasta extremas. Pedidos por Instagram y WhatsApp.",
    keywords: "pc gaming envio domicilio, computadora gaming pedido, gaming desktop online ecuador"
  },
  
  components: {
    title: "Componentes PC Gaming | Nexus Gaming Ecuador - Hardware Online",
    description: "🔧 Componentes PC Gaming online: Procesadores, GPUs, RAM, SSD. Envíos bajo pedido a todo Ecuador. Contacto por Instagram @nexusgaming.ec",
    keywords: "componentes pc online ecuador, hardware gaming virtual, procesador gaming envio"
  },
  
  peripherals: {
    title: "Periféricos Gaming Online | Nexus Gaming Ecuador - Accesorios Gaming",
    description: "🎮 Periféricos Gaming con envío: Teclados mecánicos, Mouse gaming, Audífonos. Tienda virtual con entregas bajo pedido en Ecuador.",
    keywords: "perifericos gaming online, teclado gaming envio, mouse gaming virtual ecuador"
  },
  
  laptops: {
    title: "Laptops Gaming Online | Nexus Gaming Ecuador - Notebooks Gaming Envío",
    description: "💻 Laptops Gaming con envío a domicilio: ROG, MSI, Acer Predator. Tienda virtual con entregas bajo pedido. Síguenos en Instagram.",
    keywords: "laptop gaming envio domicilio, notebook gaming online ecuador, portatil gaming virtual"
  }
};

// Tipos para breadcrumbs
interface BreadcrumbItem {
  name: string;
  url?: string;
}

// Función para generar breadcrumbs
export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const paths = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Inicio', url: '/' }
  ];
  
  let currentPath = '';
  paths.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === paths.length - 1;
    
    breadcrumbs.push({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      ...(isLast ? {} : { url: currentPath })
    });
  });
  
  return breadcrumbs;
}

// Schema.org estructurado para productos
export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  currency: string;
  availability: string;
  brand: string;
  image: string;
  sku?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "sku": product.sku,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": "Nexus Gaming Ecuador"
      }
    },
    ...(product.rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": product.reviewCount || 1
      }
    })
  };
}
