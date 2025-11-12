import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What size of solar panel do I need for my home?',
      answer: 'It depends on your energy consumption. Typically, a 3-bedroom home uses around 2–3 kW of solar panels. To determine your exact needs, calculate your daily electricity usage in kWh and consult with our experts who can help design the right system for you.',
    },
    {
      question: "What's the difference between lithium and tubular batteries?",
      answer: 'Lithium batteries are lighter, more efficient, require less maintenance, and have a longer lifespan (6000+ cycles) compared to tubular batteries. However, they cost more upfront. Tubular batteries are more affordable initially but are heavier, require regular maintenance, and have a shorter lifespan (5-7 years). The choice depends on your budget and long-term energy needs.',
    },
    {
      question: 'How long do solar panels last?',
      answer: 'Most quality solar panels last 20–25 years with minimal performance loss. Premium panels can maintain 80-85% of their original efficiency even after 25 years. They require very little maintenance and come with comprehensive warranties covering manufacturing defects and performance guarantees.',
    },
    {
      question: 'Can I use my existing inverter with solar panels?',
      answer: "Yes, if it's a hybrid or solar-compatible inverter with MPPT (Maximum Power Point Tracking) technology. If you have a regular inverter, you'll need to add a solar charge controller to your system to properly manage the solar input and battery charging. Our team can assess your current setup and recommend the best solution.",
    },
    {
      question: 'How much sunlight do I need for solar panels to work?',
      answer: 'Solar panels perform best in direct sunlight but still produce energy under cloudy conditions, though at reduced efficiency. In Nigeria, most regions receive adequate sunlight year-round (4-6 peak sun hours daily), making solar energy a viable option. The panels work during daylight hours, and excess energy is stored in batteries for nighttime use.',
    },
    {
      question: 'Do I need surge breakers in a solar setup?',
      answer: 'Yes, surge protection is essential in a solar system. Surge breakers prevent electrical damage during voltage spikes, power surges, or lightning strikes. They protect your expensive equipment like inverters, charge controllers, and batteries. We recommend both DC surge protection (for solar panel arrays) and AC surge protection (for the inverter output).',
    },
    {
      question: 'Can I install a solar system myself?',
      answer: "While some components are DIY-friendly, it's highly recommended to hire a certified installer for a complete solar system. Professional installation ensures safety, optimal performance, proper electrical connections, and compliance with local regulations. Improper installation can be dangerous and may void equipment warranties. We can connect you with certified installers in your area.",
    },
    {
      question: 'What maintenance do solar panels require?',
      answer: 'Solar panels require minimal maintenance. Clean them 2-4 times a year to remove dust, leaves, or bird droppings that may reduce efficiency. Check connections and wiring annually for any wear or damage. Inverters and charge controllers should be inspected periodically. Battery maintenance depends on type: lithium batteries are maintenance-free, while tubular batteries require regular water top-ups and terminal cleaning.',
    },
    {
      question: 'How much can I save with solar energy?',
      answer: 'Savings vary based on your current electricity costs, system size, and usage patterns. Most homeowners see 50-90% reduction in electricity bills. In Nigeria, where grid power can be unreliable and diesel generators costly, solar systems typically pay for themselves within 3-5 years through fuel savings and reduced generator maintenance.',
    },
    {
      question: 'What is MPPT and why is it important?',
      answer: 'MPPT (Maximum Power Point Tracking) is a technology that maximizes the power output from your solar panels. MPPT charge controllers are 20-30% more efficient than traditional PWM controllers, especially in varying weather conditions. They adjust the electrical operating point to extract the maximum available power from the solar array, ensuring you get the most energy from your investment.',
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Currently, we focus on providing high-quality solar products. However, we work with a network of certified professional installers who we can recommend based on your location. When you place an order, our team will connect you with trusted installation partners in your area.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, online payments, and cash on delivery for orders within Lagos. For large orders, we can arrange flexible payment plans. Contact us directly to discuss payment options that work best for you.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-20 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about solar energy products and systems
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
