import { Button } from "@/components/ui/button";
import { Clock, Sliders, Ruler, Users } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Email Container */}
      <div className="max-w-[600px] mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="px-8 py-12 text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            # Weekly Newsletter
          </h1>
          <h2 className="text-xl font-semibold text-blue-600 mb-6">
            Don't miss out our BIG news!
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="px-8 py-8 text-center bg-white">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Go to your account!
          </Button>
        </div>

        {/* Features Section */}
        <div className="px-8 py-12 bg-gray-50">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-blue-600 mb-2 uppercase tracking-wide">
              NEW RELEASES
            </h3>
            <h2 className="text-3xl font-bold text-slate-900">
              # Checkout our amazing features
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Timer Feature */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Timer</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Keep track of your time with our advanced timer
                    functionality. Perfect for productivity and time management.
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Feature */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Sliders className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Slider</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Intuitive slider controls for precise adjustments. Enhance
                    your workflow with smooth, responsive interactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Measure Feature */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Ruler className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Measure tool
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Accurate measurement tools for all your design needs. Get
                    precise dimensions and spacing every time.
                  </p>
                </div>
              </div>
            </div>

            {/* Users Feature */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Users</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive user management system. Collaborate seamlessly
                    with team members and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="px-8 py-8 text-center bg-white">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Go to your account!
          </Button>
        </div>

        {/* Footer */}
        <div className="px-8 py-8 bg-gray-100 text-center">
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            You received this email because you signed up for our newsletter. We
            respect your privacy and will never share your information with
            third parties.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium underline transition-colors duration-200"
          >
            Unsubscribe
          </a>
        </div>
      </div>

      {/* Mobile spacing */}
      <div className="h-8"></div>
    </div>
  );
}
