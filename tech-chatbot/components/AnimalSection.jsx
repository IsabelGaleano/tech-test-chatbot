export default function AnimalSection() {
  return (
       <section id="animals" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Meet Our Animals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Animal Card 1 */}
              <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                <img src="https://source.unsplash.com/random/600x400/?lion" alt="Lion" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Leo the Lion</h3>
                  <p className="text-gray-600 mb-4">Visit Leo daily to earn 10 coins. Complete special tasks for bonus rewards!</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium"><i className="fas fa-coins mr-1"></i> 10 coins/day</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">Visit Now</button>
                  </div>
                </div>
              </div>

              {/* Animal Card 2 */}
              <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                <img src="https://source.unsplash.com/random/600x400/?panda" alt="Panda" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Pandy the Panda</h3>
                  <p className="text-gray-600 mb-4">Feed Pandy bamboo to earn 15 coins. Watch videos to unlock special treats!</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium"><i className="fas fa-coins mr-1"></i> 15 coins/day</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">Visit Now</button>
                  </div>
                </div>
              </div>

              {/* Animal Card 3 */}
              <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                <img src="https://source.unsplash.com/random/600x400/?dolphin" alt="Dolphin" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Dolly the Dolphin</h3>
                  <p className="text-gray-600 mb-4">Play with Dolly in her pool to earn 20 coins. Complete quizzes for extra!</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium"><i className="fas fa-coins mr-1"></i> 20 coins/day</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">Visit Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}