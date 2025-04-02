import { useState } from 'react';
import ProjectList from '../components/ProjectList.tsx'
import CategoryFilter from '../components/CategoryFilter.tsx'
import WelcomeBand from '../components/WelcomeBand.tsx'
import CartSummary from '../components/CartSummary.tsx';


function ProjectsPage () {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return (
        <div className="container-mt-4">
            <CartSummary/>
            <WelcomeBand/>
            <div className="row">
                <div className="col-md-5">
                    <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                </div>
                <div className="col-md-5">
                    <ProjectList selectedCategories={selectedCategories}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;