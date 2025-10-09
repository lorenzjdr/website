function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-6xl font-bold mb-2">Lorenz De Robles</h1>
        <p className="text-gray-600 mt-4"></p>
      </header>
      
      <main>
        <div>
          <p className="text-lg mb-2">
            Section
          </p>
          <ul className="list-disc pl-5">
            <li className="mb-1">
             Item 1 
            </li>
            <li className="mb-1">
             Item 2 
            </li>
            <li className="mb-1">
             Item 2 
            </li>
          </ul>
          <p className="text-lg mb-2">
            Text
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;