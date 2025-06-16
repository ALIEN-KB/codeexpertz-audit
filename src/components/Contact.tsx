import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      value: "4V7F+QFV opposite Faizan-e-Madina, Mohalla Rehmanpura, Narowal",
      description: "Visit us at our office"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "codeexpertss@gmail.com",
      description: "Send us your project requirements"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "03156801933, 0333-5576831",
      description: "Connect with us anytime"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-orange-500" />
            <span className="text-orange-500 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with bespoke software solutions? We'd love to discuss 
            your project and show you how we can help you stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group hover:transform hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-orange-600 font-semibold mb-2">{info.value}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="Project Inquiry" 
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  rows={5}
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 font-semibold mb-3">Registered in</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Narowal, Pakistan
                </p>
                <h3 className="text-gray-900 font-semibold mb-3">Company number:</h3>
                <p className="text-gray-700 text-sm">
                  03156801933
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-200">
              <h3 className="text-gray-900 font-semibold mb-3">Follow Us</h3>
              {/* Add social media icons here if needed */}
              <p className="text-gray-700 text-sm mb-4">
                Connect with us on social media for updates and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
