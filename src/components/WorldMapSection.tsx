
import { MapPin } from 'lucide-react';

const WorldMapSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            🌍 A Whole World of Opportunity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            TOEFL scores are accepted by thousands of universities and institutions worldwide
          </p>
        </div>

        <div className="relative">
          {/* World Map SVG with original colors */}
          <div className="flex justify-center mb-8">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full max-w-4xl h-auto"
              fill="none"
            >
              {/* Continents with original colors */}
              <g className="continents">
                {/* North America */}
                <path
                  d="M150 100 L250 80 L280 120 L300 150 L280 180 L220 200 L180 180 L150 150 Z"
                  fill="#10b981"
                  className="hover:fill-emerald-600 transition-colors cursor-pointer"
                />
                {/* Europe */}
                <path
                  d="M450 120 L520 110 L540 140 L520 160 L480 170 L450 150 Z"
                  fill="#3b82f6"
                  className="hover:fill-blue-600 transition-colors cursor-pointer"
                />
                {/* Asia */}
                <path
                  d="M550 100 L750 90 L800 130 L780 180 L720 200 L650 190 L600 170 L550 140 Z"
                  fill="#8b5cf6"
                  className="hover:fill-purple-600 transition-colors cursor-pointer"
                />
                {/* Africa */}
                <path
                  d="M420 200 L480 190 L500 220 L520 280 L480 320 L440 300 L420 260 Z"
                  fill="#f59e0b"
                  className="hover:fill-amber-600 transition-colors cursor-pointer"
                />
                {/* South America */}
                <path
                  d="M250 250 L300 240 L320 280 L310 350 L280 380 L250 360 L240 300 Z"
                  fill="#ef4444"
                  className="hover:fill-red-600 transition-colors cursor-pointer"
                />
                {/* Australia */}
                <path
                  d="M750 320 L820 310 L840 340 L820 360 L770 370 L750 350 Z"
                  fill="#06b6d4"
                  className="hover:fill-cyan-600 transition-colors cursor-pointer"
                />
              </g>
              
              {/* University markers */}
              <g className="universities">
                <circle cx="200" cy="140" r="4" fill="#1e40af" className="animate-pulse" />
                <circle cx="480" cy="135" r="4" fill="#1e40af" className="animate-pulse" />
                <circle cx="680" cy="145" r="4" fill="#1e40af" className="animate-pulse" />
                <circle cx="780" cy="335" r="4" fill="#1e40af" className="animate-pulse" />
                <circle cx="275" cy="300" r="4" fill="#1e40af" className="animate-pulse" />
              </g>
            </svg>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">11,500+</div>
              <div className="text-gray-700 dark:text-gray-300">Universities Accept TOEFL</div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
              <div className="text-gray-700 dark:text-gray-300">Countries Worldwide</div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300">Top 100 Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
