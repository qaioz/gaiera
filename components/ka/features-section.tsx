import { Smartphone, Zap, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      title: "შექმენით მობილური აპლიკაცია",
      description: "შექმენით და გამოაქვეყნეთ თქვენი მობილური აპლიკაცია App Store-სა და Play Store-ში.",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: "იგრძენით სუპერაპის ძალა",
      description:
        "მარტივად გადაიტანეთ და ჩასვით ფუნქციონალი, როგორიცაა ელექტრონული მაღაზია, ჯავშანი, ღონისძიებები და სხვა, ჩაშენებული გადახდებით.",
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: <Info className="h-6 w-6 text-purple-500" />,
      title: "GaiEra-ს შესახებ",
      description:
        "GaiEra არის პლატფორმა, რომელიც მომხმარებლებს საშუალებას აძლევს მარტივად შექმნან პერსონალიზებული ციფრული გამოცდილებები. მისი მისიაა მოიტანოს სუპერძალები ციფრული არსებობის შექმნაში, შინაარსის მორგება მომხმარებლის ქცევაზე, რაც ყველა ინტერაქციას უნიკალურს და მიმზიდველს ხდის.",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: <Settings className="h-6 w-6 text-green-500" />,
      title: "უნიკალური მორგება",
      description:
        "მძლავრი მორგება მარტივი პანელიდან: ადვილად მოარგეთ განლაგება, ფუნქციები, ფერები, თემები, პოპ-აპ ბარათები და სხვა.",
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
  ]

  return (
    <section className="bg-gray-100 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">რატომ უნდა გამოიყენოთ GaiEra</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.color} p-6 rounded-lg`}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${feature.iconColor}`}>{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              {index === 1 && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">🛒</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">📅</span>
                  </div>
                </div>
              )}
              {index === 2 && (
                <Button className="bg-purple-500 hover:bg-purple-600 text-white mt-4">
                  სცადეთ ალფა ახლავე - უფასოდ
                </Button>
              )}
              {index === 0 && (
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">🍎</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">🤖</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
