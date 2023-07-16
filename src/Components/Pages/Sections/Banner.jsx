import BGimg from '../../../assets/bg-2.png'
import { Button} from 'react-bootstrap';
const Banner = () => {
    return (
        <div>
                    <section className='container-fluid m-0 p-0'>
<img  src={BGimg} alt="cafe-image" className='img-fluid position-absolute' style={{width:"100%", height:"50%"}}   />
<div className='position-relative py-lg-5 py-2 pe-lg-5 p-3 text-white text-end container '> <h2 className='fw-bolder text-warning'>Eat Drink and Be Happy</h2>
 <p className='my-2 text-info'>Enjoy the Richness of Mexican Foods.</p>
 <p className='my-2 '>Treat your Inner BEAST with a Feast.</p>
 <Button variant="primary" className='p-2 fw-bold  text-warning'> Cafe Fajitas </Button>

 </div>
 </section>
        </div>
    );
};

export default Banner;