export default function Dashboard() {
    return (
      <main className="min-h-screen bg-gray-50 font-nunito p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-green-700">
            Welcome to SiasaFiti 🎉
          </h1>
  
          <p className="text-lg text-gray-700 mb-6">
            This is your interactive civic education dashboard for Kenyan students.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-2">📚 Quizzes</h2>
              <p>Take quizzes on rights, governance, and the Constitution.</p>
            </div>
  
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-2">💰 Budget Simulation</h2>
              <p>Try your hand at allocating a county budget.</p>
            </div>
  
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-2">📰 County News</h2>
              <p>Get the latest updates from your county government.</p>
            </div>
  
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-2">🎯 Personalized Learning</h2>
              <p>Content tailored by your age and location.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }  