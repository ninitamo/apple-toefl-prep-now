
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nino Kezherashvili",
      role: "Developer/Content Researcher",
      // description: "Experience in working for IT sectore for almost 5 years. Passionate about giving education.",
      image: "/placeholder.svg"
    },
    {
      name: "Salome Kereselidze",
      role: "Graphic Designer/Content Researcher",
      // description: "Garap",
      image: "/placeholder.svg"
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the founders behind REDU.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  {/* <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are passionate enthusiasts dedicated to making high-quality TOEFL preparation accessible to everyone. By combining our love for language learning with advanced AI technology, we deliver innovative and personalized test solutions that help learners succeed efficiently and confidently.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
              Please note, our platform is not affiliated with or officially endorsed by ETS, the makers of the TOEFL test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
