
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Cloud, 
  ShoppingCart, 
  Database,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Cross-Platform", "Native Performance"],
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent applications powered by machine learning and artificial intelligence to automate and optimize your business processes.",
      features: ["Machine Learning", "AI Integration", "Process Automation", "Data Analytics"],
      color: "from-orange-600 to-yellow-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for reliable, high-performance applications and data management.",
      features: ["AWS/Azure/GCP", "DevOps", "Scalable Architecture", "Security"],
      color: "from-red-600 to-orange-500"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "Complete e-commerce solutions with payment integration, inventory management, and comprehensive analytics.",
      features: ["Payment Gateway", "Inventory Management", "Analytics", "Mobile Commerce"],
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Efficient database architecture and optimization for high-performance data management and business intelligence.",
      features: ["SQL/NoSQL", "Performance Optimization", "Data Security", "Backup Solutions"],
      color: "from-red-500 to-orange-400"
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '50px'
          }
        );
        
        observer.observe(card);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <span className="text-orange-500 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Development Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end development services tailored to meet your unique business needs and drive growth across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-700 group hover:transform hover:-translate-y-2 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full text-orange-500 hover:text-white hover:bg-orange-500 group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
