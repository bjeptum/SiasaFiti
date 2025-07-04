import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Welcome back, Student! 👋
            </h1>
            <p className="text-lg text-gray-600">
              Continue your civic education journey. You're making great progress!
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">75%</div>
              <div className="text-sm text-gray-600">Overall Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Quizzes Completed</div>
              <div className="text-xs text-gray-500 mt-1">+3 this week</div>
            </Card>
            
            <Card className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">850</div>
              <div className="text-sm text-gray-600">Points Earned</div>
              <div className="text-xs text-gray-500 mt-1">Level 4 Citizen</div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card hover className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Constitution Quiz</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Test your knowledge of Kenya's Constitution
                </p>
                <Button size="sm" className="w-full">
                  Start Quiz
                </Button>
              </Card>

              <Card hover className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Budget Challenge</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Allocate your county's annual budget
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Try Simulation
                </Button>
              </Card>

              <Card hover className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">County Updates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Latest news from your county government
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read News
                </Button>
              </Card>

              <Card hover className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn about your fundamental rights
                </p>
                <Button variant="ghost" size="sm" className="w-full">
                  Explore Rights
                </Button>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Recent Achievements 🏆</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium">Constitution Master</div>
                    <div className="text-sm text-gray-600">Completed all basic constitution quizzes</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💰</span>
                  </div>
                  <div>
                    <div className="font-medium">Budget Apprentice</div>
                    <div className="text-sm text-gray-600">Successfully allocated your first county budget</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📚</span>
                  </div>
                  <div>
                    <div className="font-medium">Knowledge Seeker</div>
                    <div className="text-sm text-gray-600">Completed 10 quizzes in a row</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Recommended for You 💡</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium">Devolution in Kenya</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Learn how power is shared between national and county governments
                  </p>
                  <Button size="sm" variant="outline">Start Learning</Button>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-medium">Electoral Process</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Understand how elections work in Kenya
                  </p>
                  <Button size="sm" variant="outline">Start Learning</Button>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-medium">Public Participation</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Discover how citizens can participate in governance
                  </p>
                  <Button size="sm" variant="outline">Start Learning</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}