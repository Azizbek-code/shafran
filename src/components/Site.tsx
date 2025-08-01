import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Droplets, Leaf, Star, ShoppingCart } from 'lucide-react';

const ShafranLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: "Anorli Shafran Suvi",
      description: "Shafran",
      price: "zor savol",
      image: "🍊",
      color: "from-orange-200 to-orange-100"
    },
    {
      name: "Apple Fruit Water",
      description: "Crisp apple essence in purified spring water",
      price: "$3.49",
      image: "🍎",
      color: "from-red-200 to-pink-100"
    },
    {
      name: "Watermelon Fresh",
      description: "Hydrating watermelon juice for summer refreshment",
      price: "$4.49",
      image: "🍉",
      color: "from-pink-200 to-red-100"
    },
    {
      name: "Grape Water",
      description: "Delicate grape-infused mineral water",
      price: "$3.99",
      image: "🍇",
      color: "from-purple-200 to-purple-100"
    },
    {
      name: "Pineapple Juice",
      description: "Tropical pineapple packed with natural enzymes",
      price: "$5.49",
      image: "🍍",
      color: "from-yellow-200 to-yellow-100"
    },
    {
      name: "Coconut Water",
      description: "Pure coconut water with natural electrolytes",
      price: "$4.99",
      image: "🥥",
      color: "from-blue-200 to-cyan-100"
    }
  ];

  const scrollToSection = (sectionId :any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Shafran
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('order')}
                className="bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Order Now
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {['Home', 'About', 'Products', 'Contact', 'Order'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-700 hover:text-green-600 font-medium py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-green-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Pure Taste.
                <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent block">
                  Natural Energy.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the refreshing world of Shafran - where nature meets innovation in every sip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('products')}
                  className="bg-gradient-to-r from-green-500 to-green-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Products
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-green-400 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-md">
                {[
                  { icon: "🍊", name: "Orange Fresh", color: "from-orange-400 to-orange-200" },
                  { icon: "🍎", name: "Apple Water", color: "from-red-400 to-pink-200" },
                  { icon: "🍉", name: "Watermelon", color: "from-pink-400 to-red-300" },
                  { icon: "🥥", name: "Coconut Pure", color: "from-blue-400 to-cyan-300" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${item.color} p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-4xl mb-2 text-center">{item.icon}</div>
                    <h3 className="font-semibold text-gray-800 text-center">{item.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About <span className="text-green-500">Shafran</span>
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Launched in 2025, Shafran represents a new era of healthy hydration. Our mission is simple yet profound: 
              to deliver the purest, most refreshing beverages that nourish your body and energize your spirit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We believe that what you drink should be as natural and vibrant as life itself. Every bottle is crafted 
              with premium ingredients, sustainable practices, and an unwavering commitment to your wellbeing.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">100% Natural</h3>
                <p className="text-gray-600">No artificial additives or preservatives</p>
              </div>
              <div className="text-center">
                <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Pure Hydration</h3>
                <p className="text-gray-600">Optimal hydration for active lifestyles</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Carefully sourced, expertly crafted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Our <span className="text-green-500">Products</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${product.color} p-8 text-center`}>
                  <div className="text-6xl mb-4">{product.image}</div>
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-gradient-to-r from-green-500 to-green-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Order?
          </h2>
          <p className="text-xl text-green-100 mb-12">
            Experience the pure taste of nature. Order your favorite Shafran beverages today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Order Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Call to Order
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Get in <span className="text-green-500">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl">
              <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">123 Fresh Street<br />Natural City, NC 12345</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl">
              <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl">
              <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">hello@shafran.com</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl">
              <div className="flex justify-center gap-4 mb-4">
                <Facebook className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600" />
                <Instagram className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600" />
                <Twitter className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
              <p className="text-gray-600">@ShafranBeverages</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-green-400 mb-4">Shafran</div>
          <p className="text-gray-400 mb-4">Pure Taste. Natural Energy.</p>
          <p className="text-gray-500">© 2025 Shafran Beverages. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShafranLanding;