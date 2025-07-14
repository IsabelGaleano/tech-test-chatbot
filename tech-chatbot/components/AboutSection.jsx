export default function AboutSection() {
  return (
       <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img
                  src="https://source.unsplash.com/random/600x400/?wildlife,conservation"
                  alt="About Us"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-green-800">About AnimalVenture</h2>
                <p className="text-gray-600 mb-4">
                  AnimalVenture was created to combine a love for animals with opportunities to earn rewards.
                  Our platform supports real-world animal conservation efforts by donating a portion of all revenue.
                </p>
                <p className="text-gray-600 mb-6">
                  Since 2022, we've helped users earn over $50,000 in rewards while contributing $10,000 to animal charities worldwide.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full">Our Mission</button>
                  <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 py-2 px-6 rounded-full">Charity Partners</button>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}