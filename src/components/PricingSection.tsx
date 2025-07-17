
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const plans = [
    {
      name: "Weekly",
      price: "$8.99",
      period: "USD",
      description: "Full access weekly. No commitment, cancel anytime!",
      color: "from-blue-500 to-blue-600",
      features: [
        "Billed Weekly",
        "Unlimited recording time", 
        "Unlimited recording length",
        "Record audio or phone calls",
        "Background Recording in iOS",
        "Best-in-class Transcription and Summary",
        "Unlimited Summary Customizations",
        "Web based dashboard"
      ]
    },
    {
      name: "Monthly", 
      price: "$21.99",
      period: "USD",
      description: "Unlimited access monthly. Simple and flexible.",
      color: "from-gray-100 to-gray-200",
      textColor: "text-gray-900",
      features: [
        "Billed Monthly",
        "Unlimited recording time",
        "Unlimited recording length", 
        "Record audio or phone calls",
        "Background Recording in iOS",
        "Best-in-class Transcription and Summary",
        "Unlimited Summary Customizations",
        "Web based dashboard"
      ]
    },
    {
      name: "Annual",
      price: "$139.99", 
      period: "USD",
      description: "Best value per year. Save big and stay ahead!",
      color: "from-pink-500 to-purple-600",
      popular: true,
      features: [
        "Billed Yearly",
        "Unlimited recording time",
        "Unlimited recording length",
        "Record audio or phone calls", 
        "Background Recording in iOS",
        "Best-in-class Transcription and Summary",
        "Unlimited Summary Customizations",
        "Web based dashboard"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Start for free
          </h2>
          <p className="text-xl text-muted-foreground">
            Upgrade as you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-sm">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Popular
                </Badge>
              )}
              
              <CardHeader className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${plan.textColor || 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.textColor || 'text-white/90'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${plan.textColor || 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={`ml-2 text-sm ${plan.textColor || 'text-white/80'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 bg-card">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-sm font-semibold">
                  Download Wave
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
