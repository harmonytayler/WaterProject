import { useEffect, useState } from "react";
import "./css/CategoryFilter.css"

function CategoryFilter ({
    selectedCategories,
    setSelectedCategories,
    }: {
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}) {
    const [categories, setCategories] = useState<string[]>([]);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
            const response = await fetch(`https://waterproject-htayler-backend.azurewebsites.net/Water/GetProjectTypes`);
            const data = await response.json();
            setCategories(data);
            }
            catch (error) {
                console.error("Error fetching categories", error);
            }
        }

        fetchCategories();
    }, []);
    
    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedCategories = selectedCategories.includes(event.target.value) 
            ? selectedCategories.filter((x) => x !== event.target.value) 
            : [...selectedCategories, event.target.value];
        setSelectedCategories(updatedCategories);
    }

    return (
        <>
            <div className="category-filter">
                <h3>Project Types</h3>
                <div className="category-list">
                    {categories.map((c) => (
                        <div key={c} className="category-item">
                            <input 
                                type="checkbox" 
                                id={c}
                                value={c}
                                className="category-checkbox"
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor={c}>{c}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );    
}

export default CategoryFilter;