import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center mt-20 mb-5">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in ">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-orange-500" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                Code<span className="text-yellow-300">Expertz</span>
              </h1>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block mb-6">
              <span className="text-white font-medium">Supercharge your business growth with our bespoke solutions!</span>
            </div>
          </div>

          {/* Hero content */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in delay-200">
            End-to-end bespoke software development services for your unique business needs
            <br />
            <span className="text-yellow-300 block mt-2">
              Elevate performance with Code Expert
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            We deliver top-notch development services tailored to different industries, helping you stay ahead of the competition.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in delay-400">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Smartphone className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Mobile First</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Code className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Bespoke Solutions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now!
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className=" bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
