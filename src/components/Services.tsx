
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

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Cross-Platform", "Native Performance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent applications powered by machine learning and artificial intelligence to automate and optimize your business.",
      features: ["Machine Learning", "AI Integration", "Automation", "Data Analytics"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for reliable, high-performance applications.",
      features: ["AWS/Azure", "DevOps", "Scalable", "Secure"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Complete e-commerce solutions with payment integration, inventory management, and analytics.",
      features: ["Payment Gateway", "Inventory", "Analytics", "Mobile Ready"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization for high-performance data management.",
      features: ["SQL/NoSQL", "Optimization", "Backup", "Security"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive development solutions tailored to meet your unique business needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:-translate-y-2 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group/btn"
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
