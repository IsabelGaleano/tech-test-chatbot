export default function Footer() {
  return (
        <footer className="bg-green-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="md:flex justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-paw text-2xl"></i>
                  <span className="text-xl font-bold">AnimalVenture</span>
                </div>
                <p className="text-green-200">Connecting animal lovers with rewarding experiences.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Explore</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
                    <li><a href="#animals" className="text-green-200 hover:text-white">Animals</a></li>
                    <li><a href="#earn" className="text-green-200 hover:text-white">Earn</a></li>
                    <li><a href="#about" className="text-green-200 hover:text-white">About</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-green-200 hover:text-white">Terms</a></li>
                    <li><a href="#" className="text-green-200 hover:text-white">Privacy</a></li>
                    <li><a href="#" className="text-green-200 hover:text-white">Cookies</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-green-200 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-green-200 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-green-200 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-green-200 hover:text-white text-xl"><i className="fab fa-tiktok"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-200">
              <p>&copy; 2023 AnimalVenture. All rights reserved.</p>
            </div>
          </div>
        </footer>
  );
}