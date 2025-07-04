import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Learn Kenyan Civics
                <span className="block text-green-600">The Fun Way</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Interactive civic education platform designed for Kenyan students. 
                Master your rights, understand governance, and become an informed citizen through 
                engaging quizzes and simulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Learning 🚀
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose SiasaFiti?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We make civic education engaging, accessible, and relevant to your life as a Kenyan student.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card hover className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
                <p className="text-gray-600">
                  Test your knowledge of the Constitution, governance, and your rights as a Kenyan citizen.
                </p>
              </Card>
              
              <Card hover className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Budget Simulation</h3>
                <p className="text-gray-600">
                  Experience the challenges of county budget allocation and understand public finance.
                </p>
              </Card>
              
              <Card hover className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Local News</h3>
                <p className="text-gray-600">
                  Stay updated with governance news and developments in your county.
                </p>
              </Card>
              
              <Card hover className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                <p className="text-gray-600">
                  Content tailored to your age, location, and learning progress.
                </p>
              </Card>
              
              <Card hover className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Achievement System</h3>
                <p className="text-gray-600">
                  Earn badges and certificates as you progress through your civic education journey.
                </p>
              </Card>
              
              <Card hover className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Connect with fellow students and participate in civic discussions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
                <div className="text-gray-600">Students Learning</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Quiz Questions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">47</div>
                <div className="text-gray-600">Counties Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Become a Civic Champion?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of Kenyan students who are already learning about their rights and responsibilities.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}