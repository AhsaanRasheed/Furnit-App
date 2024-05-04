import './App.css';
import one from './assets/one.webp';
import two from './assets/two.webp';
import three from './assets/three.webp';
import four from './assets/four.webp';
import five from './assets/five.webp';
import six from './assets/six.webp';
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
function App() {
  const DUMMY_DATA=  [
    {
    id: 1,
    title: 'Developer & expert in java c++' ,
    company: 'costal motors',
    category: 'developer',
    location: 'Spain',
    jobtype: 'fulltime',
    language: 'Fluent',
    experienceLevel: 'fresher',
    image: one,
    price: 1500
  },
  {
    id: 2,
    title: 'Animator & Expert in maya 3D' ,
    company: 'slack',
    category: 'developer',
    location: 'Spain',
    jobtype: 'parttime',
    language: 'Fluent',
    experienceLevel: 'intermediate',
    image: two,
    price: 2000
  },
  {
    id: 3,
    title: 'Marketing Specialist in SEO & SMM' ,
    company: 'pearson',
    category: 'coder',
    location: 'USA',
    jobtype: 'freelance',
    language: 'Conversational',
    experienceLevel: 'internship',
    image: three,
    price: 3000
  },
  {
    id: 4,
    title: 'Developer & Expert in javascript c+' ,
    company: 'securitii',
    category: 'coder',
    location: 'Spain',
    jobtype: 'freelance',
    language: 'Conversational',
    experienceLevel: 'internship',
    image: four,
    price: 4000
  },
  {
    id: 5,
    title: 'Lead & Product Designer' ,
    company: 'uforia',
    category: 'coder',
    location: 'USA',
    jobtype: 'fulltime',
    language: 'Native',
    experienceLevel: 'expert',
    image: five,
    price: 5000
  },
  {
    id: 6,
    title: 'Web Developer' ,
    company: 'cowlar',
    category: 'finance',
    location: 'USA',
    jobtype: 'freelance',
    language: 'Basic',
    experienceLevel: 'fresher',
    image: six,
    price: 6000
  },  
  ];
  
  const [data, setData] = useState(DUMMY_DATA);
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [type, settype] = useState('');
  const [level, setlevel] = useState('');
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('')
  const [price, setprice] = useState('')
  const [minprice, setminprice] = useState('')
  const [maxprice, setmaxprice] = useState('')

  const filterBy = (selectedCategory, selectedLocation, selectedtype, selectedlevel, selectedlanguage, selectedPrice) => {
    console.log(selectedPrice)
    const filteredData = DUMMY_DATA.filter(item => {
      const matchCategory = selectedCategory === '' || item.category === selectedCategory;
      const matchLocation = selectedLocation === '' || item.location === selectedLocation;
      const matchJobType = selectedtype === '' || item.jobtype === selectedtype;
      const matchLevel = selectedlevel === '' || item.experienceLevel === selectedlevel;
      const matchlanguage = selectedlanguage === '' || item.language === selectedlanguage;
      const matchprice = selectedPrice === '' || (item.price >= selectedPrice[0] && item.price <= selectedPrice[1])
      return matchCategory && matchLocation && matchJobType && matchLevel && matchlanguage && matchprice;
    });
    
    setData(filteredData);
    setCategory(selectedCategory);
    setLocation(selectedLocation);
    settype(selectedtype);
    setlevel(selectedlevel)
    setLanguage(selectedlanguage)
    setprice(selectedPrice)
  };
  
  const resetData = ()=>{
      setData(DUMMY_DATA)
      filterBy('', '', '', '', '', '')
    }



  
  
    const [values, setValues] = useState([1000, 6000]);
  
    const handleSliderChange = (newValues) => {
      setminprice(newValues[0])
      setmaxprice(newValues[1])
      console.log(minprice)
      console.log(maxprice)
      filterBy(category, location, type, level, language, newValues)
    };
  

  return (
  
    <div className="App">
      <div className='dropdown_bar'>

        <h1>Filter By:</h1>

        <div className='line'></div>
        
        <div className='filters'>
          <div>
            <h3>Keyword Or Title</h3>
            <input type="text" id="myInput" onChange={(e)=> setSearch(e.target.value)} placeholder="Search by Keywords" title="Type in a name" />
          </div>

          <div className='div1'>
            <h3 className='one'>Category</h3>
            <div class="dropdown">
              {
                category !== '' ? <button class="dropbtn">{category}</button> : <button class="dropbtn">Category</button>
              }
              
              <div class="dropdown-content">
                <a onClick={()=>filterBy('developer', location, type, level, language, price)}>Developer</a>
                <a onClick={()=>filterBy('coder',location, type, level, language, price)}>Coder</a>
                <a onClick={()=>filterBy('finance',location, type, level, language, price)} >Finance</a>            
              </div>   
            </div>
          </div>

          <div>
            <h3 className='one'>Location</h3>
            <div class="dropdown">
              {
                location !== '' ? <button class="dropbtn">{location}</button> : <button class="dropbtn">Location</button>
              }
              <div class="dropdown-content">
                <a onClick={()=>filterBy(category,'Spain', type, level,  language, price)}>Spain</a>
                <a onClick={()=>filterBy(category,'USA', type, level, language, price)}>USA</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className='one'>English Fluency</h3>
            <div class="dropdown">
              {
                language !== '' ? <button class="dropbtn">{language}</button> : <button class="dropbtn">Language Fluency</button>
              }
              <div class="dropdown-content">
                <a onClick={()=>filterBy(category,location, type, level, 'Fluent', price)}>Fluent</a>
                <a onClick={()=>filterBy(category,location, type, level, 'Conversational', price)}>Conversational</a>
                <a onClick={()=>filterBy(category,location, type, level, 'Native', price)}>Native</a>
                <a onClick={()=>filterBy(category,location, type, level, 'Basic', price)}>Basic</a>
              </div>
            </div>
          </div>

          
          

        </div>

        <div className="dropdown">
          
          <h3>Job Type: </h3>
          <br></br>
          <div >
            <div className='check'>
              <input onClick={()=>filterBy(category,location ,'fulltime', level, language, price)} type="radio" id="fulltime" name="name" value="fulltime" />
              <label for="fulltime"> Full time</label> <br />
            </div>
            <div className='check'>
              <input onClick={()=>filterBy(category,location ,'parttime', level, language, price)} type="radio" id="parttime" name="name" value="parttime" />
              <label for="parttime"> Part time</label><br />
            </div>
            <div className='check'>
              <input onClick={()=>filterBy(category,location ,'freelance', level, language, price)} type="radio" id="freelance" name="name" value="freelance" />
              <label for="freelance"> Free Lance</label>
            </div>
          </div>

          <h3 className='one1'>Experience level: </h3>
            <br></br>
            
            <div className='checkbox'>
            
            <div className="check">
            <input onClick={()=>filterBy(category,location, type, 'internship', language, price)} type="radio" id="internship" name="name1" value="internship" />
            <label for="internship"> Internship</label> <br />
            </div>  
            
            <div className="check">

            <input onClick={()=>filterBy(category,location, type, 'fresher', language, price)} type="radio" id="fresher" name="name1" value="fresher" />
            <label for="fresher"> Fresher</label><br />
            </div>
            
            <div className="check">

            <input onClick={()=>filterBy(category,location, type, 'intermediate', language, price)} type="radio" id="intermediate" name="name1" value="intermediate" />
            <label for="intermediate"> intermediate</label>
            </div>
            
            <div className="check">

            <input onClick={()=>filterBy(category,location, type, 'expert', language, price)} type="radio" id="expert" name="name1" value="expert" />
            <label for="expert"> Expert</label>
            </div>
            
            </div>


            <div className='one2' >
            <Slider
              min={1000}
              max={6000}
              range
              step={1000  }
              defaultValue={values}
              style={{width:'120px'}}
              onChange={handleSliderChange}
              />
            <div style={{ marginTop: 20 }}>
              <span>{minprice}</span>
              <span> - </span>
              <span style={{ marginLeft: 20 }}>{maxprice}</span>
            </div>
            </div>

            
        </div>    

          <div className='centre'>

          <button onClick={()=> resetData()} class="dropbtn1" style={{height:'40px'}}>Reset Filter</button>
        </div>
      

        


        
    
          
        


        <ul>
          {data.filter((item)=>{
            return search.toLowerCase === '' ? item : item.title.toLowerCase().includes(search) 
          }).map((item)=>{
            return (
              <div style={{display:'flex', border:"2px solid #DBE8E5", padding: '1%', justifyContent:'space-between', margin:'2%', width:"50%"}}>
              <img src={item.image} alt='not sown' style={{width:'60px', height:'60px', padding:"3%"}}/>
              <div>
                <h3 style={{color: '#00BF58'}}>{item.jobtype}</h3>
                <p style={{color: '#212529'}}>{item.title}</p>
              </div>

              <div> 
                <h3 style={{color: '#212529'}}>{item.location}</h3>
                <h2 style={{color: '#212529'}}>{item.experienceLevel}</h2>
              </div>
            </div>
            );
          })
          }    
        </ul>
        </div>
    </div>
  );
}

export default App;
