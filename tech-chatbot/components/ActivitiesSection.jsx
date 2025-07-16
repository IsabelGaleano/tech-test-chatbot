export default function ActivitiesSection() {
    return (
        <section id="menu" className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-green-800">¿Quieres ayudar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-search text-green-700 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-green-800">1. Visítanos</h3>
                        <p className="text-gray-600">Visítanos y disfruta de un café.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-tasks text-green-700 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-green-800">2. Donaciones</h3>
                        <p className="text-gray-600">Apoya con donaciones en sitio o vía web.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-gift text-green-700 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-green-800">3. Voluntariado</h3>
                        <p className="text-gray-600">Sé voluntario y ayuda con los gatos</p>
                    </div>
                </div>

                {/* Rewards Section */}
                <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-4 text-green-800">Menú</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span className="text-gray-600">Cafés especiales: espresso, cappuccino, latte, cold brew</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span className="text-gray-600">Tés artesanales</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span className="text-gray-600">Postres caseros, repostería y opciones veganas</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span className="text-gray-600">Snacks ligeros para acompañar tu visita</span>
                                </li>
                            </ul>
                            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-2 px-6 rounded-full">
                                Ver Menú
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
                            <img
                                src="/images/menu.jpg"
                                alt="Rewards"
                                className="rounded-lg shadow-md max-h-64"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}