
import gallery1 from '../../../assets/Gallery/food-2.jpg' 
import gallery2 from '../../../assets/Gallery/food-3.jpg' 
import gallery3 from '../../../assets/Gallery/food-5.jpg' 
import gallery4 from '../../../assets/Gallery/food-9.jpg' 
import gallery5 from '../../../assets/Gallery/food-10.jpg'
import gallery6 from '../../../assets/Gallery/food-8.jpg'
const Gallery = () => {
  return <div className='bg-black text-white p-2 '>
 <h3 className='text-center  fw-bold py-md-3 py-1 '>Food Gallery</h3>
 <div className='container-fluid'>
    <div className='row '>
<div className='col-md-3 col-5 '>
    <div className='p-1 '><img src= {gallery1} className='w-100 h-75 rounded'  /></div>
    <div className='p-1'><img src= {gallery2} className='w-100 h-75 rounded' /></div>
</div>
<div className='col-md-5 col-7  row-span'><img src= {gallery6} className='w-100 h-100 rounded' /></div>
<div className='col-md-4 col-12 d-grid '>
    <div className='col-md-12 col-12  p-1'><img src= {gallery3} className='w-100 h-100 rounded' /></div>
    <div className='col-md-12  d-flex w-100 h-100 '>
        <div className='p-1'><img src= {gallery4} className='w-100 h-100 rounded' /></div>
        <div className='p-1'><img src= {gallery5} className='w-100 h-100 rounded' /></div>
    </div>
</div>
  </div>
  </div>
  </div>;
};

export default Gallery;
