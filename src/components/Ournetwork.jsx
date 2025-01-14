import whatdoyouImg from '../assets/whatdoyouthink.jpg';
import whatcanyourImg from '../assets/whatcanyourcompanydo.jpg';
import whatcanyoudoImg from '../assets/whatcanyoudo.jpg';
import signuptoournewsImg from '../assets/signuptoournews.jpg';

function Ournetwork(params) {
    return (
        <section className='pfw-ournetwork'>
            <div className='pfw-text'>
                <h2 className='title-black'>Our network</h2>
                <p className='desc-intro'><strong>Join our network and keep in touch with our events, campaigns and resources.</strong></p>
            </div>
            <ul className="pfw-network-cards">
                <li>
                    <a className="pfw-card" href="#">
                        <img src={whatcanyoudoImg} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">What can you do?</h3>
                            <p className='small-card-desc'>If you're an aspiring woman...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="pfw-card" href="#">
                        <img src={whatdoyouImg} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">What do you think?</h3>
                            <p className='small-card-desc'>This survey will enable the POWERful Women team to define how women in the energy sector need support...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="pfw-card" href="#">
                        <img src={whatcanyourImg} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">What can your company do?</h3>
                            <p className='small-card-desc'>If you're an energy company or leader...</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="pfw-card" href="#">
                        <img src={signuptoournewsImg} alt="placeholder" />
                        <div className="pfw-card-text">
                            <h3 className="pfw-card-title-bg">Sign up to our newsletter</h3>
                            <p className='small-card-desc'>We will send you only relevant information.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Ournetwork;

/*
TODO:
- add image alt text
*/ 