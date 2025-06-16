
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Award, number: "500+", label: "Projects Completed" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Target, number: "99%", label: "Success Rate" }
  ];

  const values = [
    "Bespoke software solutions tailored to your industry",
    "Agile development methodology for faster delivery",
    "Transparent communication throughout the project lifecycle",
    "Comprehensive post-launch support and maintenance",
    "Cutting-edge technology stack and industry best practices",
    "Scalable solutions that grow with your business needs"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                About CodeExpert
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a team of passionate developers and designers dedicated to creating exceptional 
                bespoke software solutions. With over a decade of experience in the industry, we've helped 
                businesses across different sectors achieve their digital transformation goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise spans across modern web technologies, mobile development, AI solutions, 
                and cloud infrastructure. We believe in delivering not just code, but complete solutions 
                that drive measurable business growth and competitive advantage.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose CodeExpert?</h3>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/80 border-orange-200 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Image Placeholder */}
            <Card className="bg-white/80 border-orange-200 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <Users className="w-16 h-16 mx-auto mb-4 text-orange-500" />
                    <p className="text-lg font-medium">Our Expert Team</p>
                    <p className="text-sm text-gray-600">Dedicated professionals ready to elevate your business</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
