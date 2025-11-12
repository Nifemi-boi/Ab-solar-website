import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
                  Sustainable Energy Solutions
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Power Your World{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Sustainably
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-md">
                  High-quality solar panels, inverters, and batteries at affordable prices. Join the renewable energy revolution with AB-LORE.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button size="lg" className="gap-2">
                      Browse Products
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <img
                  src={heroImage}
                  alt="Solar panels on residential roof"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">High Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Premium solar products with industry-leading efficiency ratings
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Trusted Quality</h3>
                <p className="text-sm text-muted-foreground">
                  All products come with comprehensive warranties and support
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce your carbon footprint with clean renewable energy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our selection of premium solar energy products designed for reliability and performance
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get in touch with our experts to find the perfect solar solution for your needs
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Contact Us Today
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
