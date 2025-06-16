
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
      icon: Mail,
      title: "Email Us",
      value: "hello@codeexpertz.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "Come say hello at our office"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:-translate-y-1 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-cyan-400 font-semibold mb-2">{info.value}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="Project Inquiry" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-400 text-sm">We're here to help</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-white font-semibold">Global Reach</h3>
                    <p className="text-gray-400 text-sm">Serving clients worldwide</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  While we're based in San Francisco, we work with clients from around the globe. 
                  Remote collaboration is our specialty, and we're always just a video call away.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-slate-700">
              <h3 className="text-white font-semibold mb-3">Ready to get started?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Book a free consultation call to discuss your project and get a custom quote.
              </p>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
