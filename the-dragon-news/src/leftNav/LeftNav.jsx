import React, { useContext, useEffect, useState } from 'react';
import './LeftNav.css';
import { Link, useNavigation } from 'react-router-dom';
import Snipper from '../Snippers/Snipper';
import { MdOutlineDateRange } from "react-icons/md";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    const navigation = useNavigation();

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
            .catch(error=>console.log(error));
    },[])
    return (
        <div className='left-side'>

            <h4>All Category</h4>
            <div className={navigation.state==="loading"? <Snipper></Snipper>:''}>
            {
                
                categories.map(category => <p className={`nav-left-side ${category.id==0 && 'active'}`}
                key={category.id}
                >
                    <Link to={`/category/${category.id}`} className='left-side-url'>{category.name}</Link>

                </p>)
            }
            </div>
            <div>
                <div className='left-side-img'>
                    <img src="../../src/assets/editorsInsight1.png" alt="thumbnail" />
                    <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                    <div className='text-secondary'><small><MdOutlineDateRange /> 2022-08-24</small></div>
                </div>
                <div className='left-side-img'>
                    <img src="../../src/assets/editorsInsight2.png" alt="thumbnail" />
                    <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                    <div className='text-secondary'><small><MdOutlineDateRange /> 2022-08-24</small></div>
                </div>
                <div className='left-side-img'>
                    <img src="../../src/assets/editorsInsight3.png" alt="thumbnail" />
                    <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
                    <div className='text-secondary'><small><MdOutlineDateRange /> 2022-08-24</small></div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;