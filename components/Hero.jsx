export default function Hero() {
  return (
    <section className="bg-green-100 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-600">Únete a Nuestra Causa Felina</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Coffee & Cats es un lugar mágico donde el aroma del café se mezcla con el ronroneo de gatos rescatados.
          Aquí puedes relajarte, disfrutar de una bebida deliciosa, compartir un momento especial con nuestros gatos y, si conectas con alguno, ¡iniciar su proceso de adopción!
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
           Donar <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </section>
  );
}