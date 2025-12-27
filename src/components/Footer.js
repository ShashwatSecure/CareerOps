import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#231F41", color: "#fff" }} className="py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo and Tagline */}
        <div>
          <div className="text-2xl font-bold text-white mb-4">
            Career<span className="text-yellow-400">Ops</span>
          </div>
          <p className="text-gray-300">
            Guiding your educational journey every step of the way.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-yellow-400 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-semibold text-yellow-400 mb-3">Get in Touch</h4>
          <p className="text-gray-300 text-sm mb-2">📍 Aurora Water Front, SaltLake Sector-V, Kolkata, India</p>
          <p className="text-gray-300 text-sm mb-2">📞 +91 7903439563, +91 6299780200</p>
          <a href="https://wa.me/917903439563" className="text-gray-300 text-sm mb-2 block hover:text-white">
            +91 7903439563 (WhatsApp)
          </a>
          <p className="text-gray-700">
                  <a href="mailto:info@careerops.in" className="text-gray-300 underline hover:text-blue-600">info@careerops.in</a>
                </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} CareerOps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
