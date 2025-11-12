import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-20 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AB-LORE</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in renewable energy solutions, committed to making sustainable power accessible and affordable for everyone.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower homes and businesses across Nigeria with reliable, affordable, and sustainable solar energy solutions that reduce dependence on conventional power sources while protecting the environment.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Nigeria's leading provider of solar energy products and services, driving the nation's transition to clean, renewable energy and creating a sustainable future for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose AB-LORE?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to delivering excellence in every aspect of our service
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We source only the highest quality solar products from trusted manufacturers with proven track records and comprehensive warranties.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our knowledgeable team provides expert guidance to help you choose the right solar solution for your specific needs and budget.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Affordable Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  We offer competitive prices on all our products, making it easier for you to switch to clean, renewable solar energy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                AB-LORE was founded with a simple yet powerful vision: to make solar energy accessible to every Nigerian household and business. We recognized the growing need for reliable, sustainable power solutions in a country where energy access remains a significant challenge.
              </p>
              <p>
                What started as a small operation has grown into a trusted name in the renewable energy sector. Today, we serve hundreds of satisfied customers across Nigeria, providing them with high-quality solar panels, inverters, batteries, and complete solar systems.
              </p>
              <p>
                Our commitment goes beyond just selling products. We believe in building lasting relationships with our customers, providing ongoing support, and contributing to Nigeria's sustainable energy future. Every product we sell represents a step towards energy independence and environmental responsibility.
              </p>
              <p>
                As we continue to grow, our mission remains the same: to power Nigerian homes and businesses with clean, reliable, and affordable solar energy solutions.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
