export default function AnimalSection() {
  return (
       <section id="gatos" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Nuestros Gatos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Animal Card 1 */}
              <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                <img src="/images/gato1.jpg" alt="Leo" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Leo</h3>
                  <p className="text-gray-600 mb-4">Leo tiene mirada seria pero es un amor: le encanta dormir al sol y recibir caricias detrás de las orejas.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium"><i className="fas fa-paw text-2xl"></i> En adopción</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">Más</button>
                  </div>
                </div>
              </div>

              {/* Animal Card 2 */}
              <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                <img src="/images/gato2.jpg" alt="Summer" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Summer</h3>
                  <p className="text-gray-600 mb-4">Pandy es tranquila y amorosa. Le encanta acurrucarse en las mantas suaves y observar todo desde su rincón favorito.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium"><i className="fas fa-paw text-2xl"></i> En adopción</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">Más</button>
                  </div>
                </div>
              </div>

              {/* Animal Card 3 */}
              <div className="bg-green-100 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
                <img src="/images/gato3.jpg" alt="Bruno" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Bruno</h3>
                  <p className="text-gray-600 mb-4">Bruno es pura energía y curiosidad. Si buscas un gatito juguetón y divertido, Bruno es perfecto para ti!

</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium"><i className="fas fa-paw text-2xl"></i> En adopción</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">Más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}