import supportCard from '../assets/support-card.jpg';
import challengeCard from '../assets/challenge-card.jpg';
import connectCard from '../assets/connect-card.jpg';

function Ouraims(params) {
    return (
        <section className='pfw-ouraims'>
            <div className='pfw-text'>
                <h2 className='title-black'>Our aims</h2>
                <p className='desc-intro'><strong>Our target is for women to be in at least 40% of middle management and leadership roles in the UK energy sector by 2030.</strong></p> 
                <p className='desc-intro'><strong>We will deliver these in 3 ways:</strong></p>
            </div>
            <ul className="pfw-aim-cards">
                <li>
                    <a className="pfw-card" href="#">
                        <img src={supportCard} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">Support</h3>
                            <p className='small-card-desc'>POWERful Women aims to provide practical and useful SUPPORT to both companies and aspiring women...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="pfw-card" href="#">
                        <img src={challengeCard} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">Challenge</h3>
                            <p className='small-card-desc'>POWERful Women is committed to encouraging energy companies to improve gender diversity by highlighting those companies actively trying to make a difference...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="pfw-card" href="#">
                        <img src={connectCard} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">Connect</h3>
                            <p className='small-card-desc'>POWERful Women runs a number of online and in-person events throughout the year to provide practical learning, sharing and networking - for both aspiring women and companies...</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Ouraims;

/*
TODO:
- add image alt text
*/ 