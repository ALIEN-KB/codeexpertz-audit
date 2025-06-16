import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Work = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to success: see our solutions in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-8 flex items-center justify-center h-96 shadow-lg border border-gray-200">
              <img src="/workImg-unihub.jpeg" alt="Work Image" className="max-h-full max-w-full object-contain rounded-lg shadow-md" />
            </div>
          </div>

          {/* Project Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Uni Hub</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Code Expert created an outstanding and multipurpose campus platform for a client. Whether you want to know about the events happening in the campus, or looking to get some services done or simply wish to buy or sell some stuff, UniHub got you covered.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Case Details
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work; 