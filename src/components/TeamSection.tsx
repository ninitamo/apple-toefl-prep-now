
import { Linkedin, Mail, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Nino Kezherashvili',
      role: 'Developer/Content Researcher',
      description: 'Former ETS consultant with 15+ years experience in standardized test development and English language assessment.',
      image: '/placeholder.svg',
      links: {
        linkedin: '#',
        email: 'sarah@toeflprep.com',
        website: '#'
      }
    },
    {
      name: 'Salome Kereselidze',
      role: 'Graphic Designer/Content Researcher',
      description: 'TESOL certified instructor and former TOEFL examiner with expertise in academic English and test preparation methodologies.',
      image: '/placeholder.svg',
      links: {
        linkedin: '#',
        email: 'michael@toeflprep.com',
        website: '#'
      }
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">
            Meet Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Dedicated professionals committed to your TOEFL success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-medium text-slate-800 mb-2">
                  {member.name}
                </h3>

                <p className="text-blue-600 font-medium mb-4 text-sm">
                  {member.role}
                </p>

                {/* <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {member.description}
                </p> */}

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.links.linkedin}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Linkedin className="h-4 w-4 text-slate-600 group-hover/icon:text-blue-600" />
                  </a>
                  <a
                    href={`mailto:${member.links.email}`}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Mail className="h-4 w-4 text-slate-600 group-hover/icon:text-emerald-600" />
                  </a>
                  <a
                    href={member.links.website}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-100 flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Globe className="h-4 w-4 text-slate-600 group-hover/icon:text-purple-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
