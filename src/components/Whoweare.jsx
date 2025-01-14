import stripeImage from '../assets/stripe-img.jpg';

function Whoweare(params) {
    return (
        <section className='pfw-intro'>
            <div className='pfw-text'>
                <h2 className='title-black'>Who we are</h2>
                <p className='desc-intro'>
                    <strong>Launched in 2014, POWERful Women (PfW) is a professional initiative to create a gender-balanced, diverse and inclusive UK energy sector. </strong>
                    Working with business leaders, D&I experts, government, the regulators and aspiring women, we want to accelerate change so that we have diverse talent for the energy transition.
                </p>
            </div>
            <div className='pfw-img'>
                <img src={stripeImage} alt="placeholder" />
            </div>
        </section>
    )
}

export default Whoweare;

/*
TODO:
- add image alt text
*/ 