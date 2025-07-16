export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="/images/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-green-800">About Coffee & Cats</h2>
            <p className="text-gray-600 mb-4">
              Coffee & Cats nació con un propósito claro: combinar el amor por los gatos con la calidez de una cafetería.
              Somos un equipo de amantes de los animales, voluntarios, veterinarios y baristas comprometidos con un solo objetivo: cambiar vidas, una taza y un ronroneo a la vez.
            </p>
            <p className="text-gray-600 mb-6">
              Desde nuestra apertura en 2022, hemos rescatado más de 100 gatos y ayudado a decenas de ellos a encontrar un hogar definitivo.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full">Nuestra Misión</button>
              <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 py-2 px-6 rounded-full">Partners</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}