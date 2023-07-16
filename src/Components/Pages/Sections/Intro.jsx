import img1 from '../../../assets/img-1.jpg'
import img2 from '../../../assets/img-2.jpg'

const Intro = () => {
    return (
        <div>
             <section className='container-fluid mt-5 my-lg-4' >
    <div className='row p-lg-5 mt-lg-5 py-5 bg-secondary'>
    
    <div className='col-lg-6 col-sm-12 p-lg-3 p-3 mt-lg-5 mt-4'>
            <h3 className='fw-bolder pt-5 pt-lg-4  mt-5 text-info text-center'>A warm & Friendly Atmosphere With  Mexican Foods</h3>
            <p className='p-2 text-white'>Discover the facts, different taste and recipes that making Mexican food so irresistible, is that it is a blend of different cultures. Distinct blend of spices, seasonings and vibrant colors create a beautiful presentation. Many of the traditional Mexican dishes still represent deep, pre-hispanic origins, making them truly unique.</p>
        </div>
            <div className='col-lg-3 col-sm-12 p-3 p-lg-3 mt-lg-5 mt-1 '>
                <img className='w-100 border-1 rounded' src={img1} alt="side img-1" />
            </div>
            <div className='col-lg-3 col-sm-12 p-3 p-lg-3 mt-lg-5 mt-1'>   
            <img className='w-100 border-1 rounded' src={img2} alt="side img-2" /></div>
    
    </div>
 </section>
        </div>
    );
};

export default Intro;