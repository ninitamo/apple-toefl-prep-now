import React from "react";
import { Globe } from "lucide-react";

function WorldMapSection() {
    const continentData = [
        { name: "North America", institutions: "7400+", color: "bg-orange-500" },
        { name: "Europe", institutions: "2100+", color: "bg-orange-500" },
        { name: "Asia", institutions: "2250+", color: "bg-orange-500" },
        { name: "Oceania", institutions: "350+", color: "bg-orange-500" },
        { name: "South America", institutions: "450+", color: "bg-orange-500" },
        { name: "Africa", institutions: "125+", color: "bg-orange-500" },
    ];

    return (
        <div className="mb-16">
            {/* World Map Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center">
                        <Globe className="mr-3 h-8 w-8 text-blue-600" />
                        A Whole World of Opportunity
                    </h2>
                    <p className="text-xl text-slate-600">
                        See where TOEFL iBT is accepted!
                    </p>
                </div>

                {/* World Map Visualization */}
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {continentData.map((continent, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-200">
                                    <div
                                        className={`w-full h-3 ${continent.color} rounded-full mb-4`}
                                    ></div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                                        {continent.name}
                                    </h3>
                                    <p className="text-2xl font-bold text-orange-600 mb-1">
                                        {continent.institutions}
                                    </p>
                                    <p className="text-slate-600 text-sm">Institutions</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Statistics */}
                    <div className="text-center mt-8 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                            Total Global Acceptance
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600">12,000+</div>
                                <div className="text-slate-600">Institutions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600">160+</div>
                                <div className="text-slate-600">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldMapSection;
