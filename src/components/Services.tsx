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
  Sparkles,
  Code,
  Target,
  Layout
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software applications built with modern technologies for optimal performance.",
      features: ["Web Development", "Mobile Development", "Enterprise Solutions", "Custom CRM/ERP"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Layout,
      title: "Digital Design",
      description: "Stunning and intuitive user interfaces and experiences tailored to your brand.",
      features: ["UI/UX Design", "Branding", "Graphic Design", "Prototyping"],
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent applications powered by artificial intelligence to automate and optimize your business processes.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "from-orange-600 to-yellow-500"
    },
    {
      icon: Globe,
      title: "SEO",
      description: "Improve your search engine ranking and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO"],
      color: "from-red-600 to-orange-500"
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach your target audience.",
      features: ["Social Media Marketing", "Content Marketing", "Email Marketing", "Paid Advertising"],
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Cloud,
      title: "Cloud Solution",
      description: "Scalable cloud infrastructure and deployment solutions for reliable, high-performance applications and data management.",
      features: ["Cloud Migration", "Cloud Security", "Managed Cloud Services", "Cloud Optimization"],
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <span className="text-orange-500 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Comprehensive Service Offerings Solutions Tailored to Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our development process is designed to deliver high-quality, customized solutions efficiently.
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
