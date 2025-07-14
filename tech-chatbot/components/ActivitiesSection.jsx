export default function ActivitiesSection() {
    return (
        <section id="earn" className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-green-800">How You Earn</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-search text-green-700 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-green-800">1. Visit Animals</h3>
                        <p className="text-gray-600">Browse our collection of virtual animals and select one to visit.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-tasks text-green-700 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-green-800">2. Complete Activities</h3>
                        <p className="text-gray-600">Feed, play with, or learn about the animals to earn coins.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-gift text-green-700 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-green-800">3. Redeem Rewards</h3>
                        <p className="text-gray-600">Exchange your coins for gift cards, donations, or other rewards.</p>
                    </div>
                </div>

                {/* Rewards Section */}
                <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-4 text-green-800">Available Rewards</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span>$5 Amazon Gift Card - 1000 coins</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span>$10 PayPal Cash - 2000 coins</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span>Animal Charity Donation - 500 coins</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-2"></i>
                                    <span>Exclusive Animal Badges - 300 coins</span>
                                </li>
                            </ul>
                            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-2 px-6 rounded-full">
                                View All Rewards
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
                            <img
                                src="https://source.unsplash.com/random/600x400/?gift,cards"
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