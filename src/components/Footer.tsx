import { Code, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const services = [
    "Software Development",
    "Digital Design",
    "AI Solutions",
    "SEO",
    "Digital marketing",
    "Cloud Solution"
  ];

  const company = [
    "Our work",
    "Privacy Policy",
    "Terms and Conditions"
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/LOGO.webp" alt="Code Expert Logo" style={{ height: '48px', width: 'auto' }} />
              <span className="text-2xl font-bold text-white">
                Code<span className="text-orange-400">Expertz</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              End-to-end bespoke software development services for your unique business needs. 
              We deliver top-notch solutions tailored to different industries.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">4V7F+QFV opposite Faizan-e-Madina, Mohalla Rehmanpura, Narowal</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">codeexpertss@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">03156801933</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">0333-5576831</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Location */}
      <div className="w-full h-80">
        <iframe
          src="https://maps.google.com/maps?q=4V7F%2BQFV%20opposite%20Faizan-e-Madina%2C%20Mohalla%20Rehmanpura%2C%20Narowal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {currentYear} Code Expert.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
