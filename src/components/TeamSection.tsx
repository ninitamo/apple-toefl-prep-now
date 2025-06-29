
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the founders behind ToeflPrep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
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
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We believe everyone deserves access to high-quality TOEFL preparation materials.
              Our team combines decades of testing expertise with cutting-edge technology to create
              the most effective and accessible TOEFL practice platform available today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
