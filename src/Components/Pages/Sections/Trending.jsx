
import img3 from '../../../assets/img-3.jpg'
import img5 from '../../../assets/img-5.jpg'
import img7 from '../../../assets/img-7.png'
import img9 from '../../../assets/img-9.png'
const Trending = () => {
    return (
        <div>
             <section className='container-fluid p-3 bg-info'>
    <h3 className='fw-bold text-center p-2 text-danger'>Trending Meals </h3>
    <div className='row p-3'>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img3} alt="trending images-1" /></div>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img9} alt="trending images-2" /></div>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img5} alt="trending images-3" /></div>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img7} alt="trending images-4" /></div>
    </div>
 </section>
        </div>
    );
};

export default Trending;