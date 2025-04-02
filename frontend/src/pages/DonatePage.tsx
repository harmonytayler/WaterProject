import WelcomeBand from '../components/WelcomeBand.tsx'
import {useNavigate, useParams} from 'react-router-dom';
import { useCart } from '../context/CartContext.tsx';
import { useState } from 'react';
import { CartItem } from '../types/CartItem.ts';

function DonatePage () {
    const navigate = useNavigate();
    const {projectName = '', projectId} = useParams();
    const {addToCart} = useCart();
    const [donationAmount, setDonationAmount] = useState<number>(0);

    const handleAddToCart = () => {
        const newItem: CartItem = {
            projectId: Number(projectId),
            projectName,
            donationAmount
        };
            addToCart(newItem);
            navigate('/cart');
        return (
            <>
                <WelcomeBand/>
                <h2>Donate to {projectName}</h2>
                <div>
                    <input 
                        type='number' 
                        placeholder="Enter donation amount" 
                        value={donationAmount} 
                        onChange={(x) => setDonationAmount(Number(x.target.value))}
                    />
                    <button onClick={() => navigate('/cart')}>Add to Cart</button>
                </div>
    
    {/* The -1 in the navigate takes you to whatever page you were last on. */}
                <button onClick={() => navigate(-1)}>Go Back</button>
            </>
        );
    }

    return (
        <>
            <WelcomeBand/>
            <h2>Donate to {projectName}</h2>
            <div>
                <input type='number' placeholder="Enter donation amount" value={donationAmount} onChange={(x) => setDonationAmount(Number(x.target.value))}/>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>

{/* The -1 in the navigate takes you to whatever page you were last on. */}
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    );
}

export default DonatePage;