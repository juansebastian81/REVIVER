import { useNavigate } from 'react-router';
import './Landing.css';

const Landing = () => {;

    const navigate = useNavigate();

    return (
        <div class="landing-page">
            <div class="landing-page-content">
                <h1>WELCOME TO LANDING PAGE</h1>
                <div>
                    <h2>We are a platform dedicated to exploring heart disease models.</h2>
                    <p>Test your knowledge with our interactive quiz and learn more about heart health.</p>
                </div>
                <button onClick={() => navigate('/heart')}>Go to Models</button>
            </div>
        </div>
    )
}

export default Landing;