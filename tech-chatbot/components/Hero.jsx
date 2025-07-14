export default function Hero() {
  return (
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Care for Animals & Earn Rewards</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Visit, feed, and play with virtual animals to earn coins you can redeem for real rewards!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Get Started <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </section>
  );
}