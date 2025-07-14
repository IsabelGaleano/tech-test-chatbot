export default function Navbar() {
  return (
        <nav className="bg-green-800 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <i className="fas fa-paw text-2xl"></i>
              <span className="text-xl font-bold">AnimalVenture</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-green-200">Home</a>
              <a href="#animals" className="hover:text-green-200">Animals</a>
              <a href="#earn" className="hover:text-green-200">Earn</a>
              <a href="#about" className="hover:text-green-200">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-700 px-3 py-1 rounded-full">
                <i className="fas fa-coins mr-1"></i>
                <span id="coins">250</span>
              </div>
              <button className="md:hidden" id="menu-btn">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 hover:bg-green-700">Home</a>
              <a href="#animals" className="block px-3 py-2 hover:bg-green-700">Animals</a>
              <a href="#earn" className="block px-3 py-2 hover:bg-green-700">Earn</a>
              <a href="#about" className="block px-3 py-2 hover:bg-green-700">About</a>
            </div>
          </div>
        </nav>
  );
}