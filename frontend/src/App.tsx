import './App.css'
import ProjectList from './ProjectList.tsx'
import CategoryFilter from './CategoryFilter.tsx'
import WelcomeBand from './WelcomeBand.tsx'
import { useState } from 'react';

function App() {
      const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <>
    <div className="containe-mt-4">
      <div className="row bg-primary text-white">
        <WelcomeBand/>
      </div>
      <div className="row">
        <div className="col-md-5">
          <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
        </div>
        <div className="col-md-5">
          <ProjectList selectedCategories={selectedCategories}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
