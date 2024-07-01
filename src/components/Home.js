import React from 'react';
import './Home.css'; 
import backgroundImage1 from './home-img-1.png'; 
import iconImage1 from './Icon.png'; 
import iconImage2 from './icon2.png'; 
import iconImage3 from './Icon 3.png'; 
import iconImage4 from './Icon 4.png'; 
import RightAboutImage from './Right About.png'; 
import RectangleImage from './Rectangle 12347.png'; 
import ArrowImage from './arrow_outward.png'; 
import leftImage from './leftimage.png';
import rightImage from './rightimage1.png';
import leftImage1 from './Left Services.png'; // Adjust the path accordingly
import imageLeft from './imagenewleft.png'; // Adjust path accordingly
import imageRight from './imagenewright.png';
import visibilityIcon from './visibility.png';
import favoriteIcon from './favorite.png';
import personImage from './person1.png';
import personImage1 from './person2.png';
import personImage2 from './person3.png';
import personImage3 from './person4.png';/// Adjust the path accordingly
import arrowImage from './Arrow.png';
import arrowImage1 from './Arrow (1).png';

const Home = () => {
    return (
        <section className="home" id="home">
           <div className="container fade-in ">
    <div className="content fade-in" style={{ textAlign: 'left' }}>
        <p>Education Online Course</p>
        <h2>Step into the world of infinite Learning Possibilities</h2>
        <p>We believe in the boundless power of Education to shape lives and open doors to endless possibilities. Step into our virtual classroom.</p>
        <div className="cta-button fade-in">
            <button className="get-started-btn fade-in">Get started</button>
        </div>
    </div>


                <div className="image ">
                    <img src={backgroundImage1} className="main-background-image" alt="Background" />
                </div>
            </div>

            <div className="additional-content scale-up">
                <div className="row">
                    <div className="column">
                        <div className="icon-heading">
                            <img src={iconImage1} className="icon" alt="Icon 1" />
                            <h2>Diverse Course Catalog</h2>
                            <p>Explore an extensive array of courses covering everything.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="icon-heading">
                            <img src={iconImage2} className="icon" alt="Icon 2" />
                            <h2>Expert Instructors</h2>
                            <p>Our courses are led by seasoned educators and industry.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="icon-heading">
                            <img src={iconImage3} className="icon" alt="Icon 3" />
                            <h2>Interactive Learning</h2>
                            <p>Engage with dynamic lessons, quizzes, and interactive assignments.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="icon-heading">
                            <img src={iconImage4} className="icon" alt="Icon 4" />
                            <h2>Flexibility & Accessibility</h2>
                            <p>Customize your learning experience with flexible scheduling</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new-section">
                <div className="container">
                    <div className="left-content">
                        <p>Education Online Course</p>
                        <h2>Where Education Meets Convenience, Welcome Aboard!</h2>
                        <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative</p>
                         <br></br>
                    
                        <img src={iconImage2} className="icon" alt="Icon 2" />
                        <h3>Expert Instructors</h3>
                        <p>Our courses are led by seasoned educators and industry.</p>
                        <img src={iconImage3} className="icon" alt="Icon 3" />
                        <h3>Interactive Learning</h3>
                        <p>Engage with dynamic lessons, quizzes, and interactive assignments.</p>        
                    </div>
                    <div className="right-image">
                        <img src={RightAboutImage} className="new-section-image" alt="Right About Image" />
                    </div>
                </div>

                <div className="centered-content">
                    <p>Education Online Course</p>
                    <br></br>
                    <h2>Your Gateway to Lifelong Learning Starts Here</h2>
                    <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative learning journey tailored just for you.</p>
                </div>
                <br></br> <br></br>
                <div className="row">
                    <div className="column">
                        <div className="icon-heading">
                            <img src={RectangleImage} className="iconr" alt="Rectangle Icon"/>
                            <h3>Diverse Course Catalog</h3>
                            <img src={ArrowImage} className="iconr" alt="Arrow Icon" />
                        </div>
                    </div>  <br></br>
                    <div className="column">
                        <div className="icon-heading">
                            <img src={RectangleImage} className="iconr" alt="Rectangle Icon" />
                            <h3>Global Learning Community</h3>
                            <img src={ArrowImage} className="iconr" alt="Arrow Icon" />
                        </div>
                    </div>
                </div> <br></br>

                <div className="row">
                    <div className="column">
                        <div className="icon-heading">
                            <img src={RectangleImage} className="iconr" alt="Rectangle Icon" />
                            <h3>Diverse Course Catalog</h3>
                            <img src={ArrowImage} className="iconr" alt="Arrow Icon" />
                        </div>
                    </div> <br></br>
                    <div className="column">
                        <div className="icon-heading">
                            <img src={RectangleImage} className="iconr" alt="Rectangle Icon" />
                            <h3>Global Learning Community</h3>
                            <img src={ArrowImage} className="iconr" alt="Arrow Icon" />
                        </div>
                    </div>
                </div> <br></br>

                <div className="row">
                    <div className="column">
                        <div className="icon-heading">
                            <img src={RectangleImage} className="iconr" alt="Rectangle Icon" />
                            <h3>Diverse Course Catalog</h3>
                            <img src={ArrowImage} className="iconr" alt="Arrow Icon" />
                        </div>
                    </div> <br></br>
                    <div className="column">
                        <div className="icon-heading">
                            <img src={RectangleImage} className="iconr" alt="Rectangle Icon" />
                            <h3>Global Learning Community</h3>
                            <img src={ArrowImage} className="iconr" alt="Arrow Icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container1">
      <img src={leftImage} alt="Left" className="left-image" />
      <div className="right-image-container">
        <img src={rightImage} alt="Right" className="right-image" />
        <div className="overlay" style={{ textAlign: 'left', fontSize: 11 }}>
          <h1>Join the Education Revolution, Our Virtual Campus!</h1>
          <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative</p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
    <div className="container2">
            <div className="left1">
                <img src={leftImage1} alt="Left1" className="left-image1" />
            </div>
            <div className="right">
                <br></br>
                <p>Education Online Course</p>
                <h1>Empower Your Mind, Our Knowledge Hub</h1>
                <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom
                    </p><br></br><br></br>
                <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative</p>
                <div className="buttons">
                    <button className="button">Join Now</button>
                    <button className="button">Read More</button>
                </div>
            </div>
        </div>
        <div className="container3">
            <div className="start">
                <p>Education Online Course</p>
                <h1>Online Learning Hacks, Strategies for Effective<br /> Virtual Education</h1>
                <p>
                    At [Your Online Learning Platform], we believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative learning journey tailored just for you.
                </p>
            </div>

            <div className="images">
            {/* Column 1 */}
            <div className="column">
                <img src={imageLeft} alt="Left Image" className="image-left" />
                <br />
                <h3>Learning Beyond Borders, The Global Impact of Online Education</h3>
                <br />
                <p>
                    Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative learning journey tailored just for you.
                </p>
                <br />
                <div className="button-container">
                    <button className="image-button">Read More</button>
                    <div className="additional-info">
                    <img src={visibilityIcon} alt="Visibility Icon" className="icon" style={{ height: '25px', width: '25px' }} />
                    <span className="info-text">786k</span> <br></br>
                        <img src={favoriteIcon} alt="Favorite Icon" className="icon" style={{ height: '25px', width: '25px' }} />
                        <span className="info-text">786k</span>
                    </div>
                </div>
            </div>

            {/* Column 2 */}
            <div className="column">
                <img src={imageRight} alt="Right Image" className="image-right" />
                <br />
                <h3>Learning Beyond Borders, The Global Impact of Online Education</h3>
                <br />
                <p>
                    We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries.
                </p>
                <br />
                <div className="button-container">
                   
                    <button className="image-button">Read More</button>
                    <div className="additional-info">
                    
                    <img src={visibilityIcon} alt="Visibility Icon" className="icon" style={{ height: '25px', width: '25px' }} />
                    <span className="info-text">786k</span>
                        <img src={favoriteIcon} alt="Favorite Icon" className="icon" style={{ height: '25px', width: '25px' }} />
                        <span className="info-text">786k</span>
                    </div>
                </div>
            </div>
        </div>
    <div className="container4">
            <div className="column" style={{textAlign:'left'}}>
                <p>Education Online Course</p><br></br>
                <h1>How Sokde - Education Online Course Shaped My Future</h1><br></br>
                <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom</p>
                <br></br>  <br></br>
                <div className="button-container1">
            <button className="column-button">Join Now</button>
            <button className="column-button">Learn More</button>
</div>

            </div>
            <div className="column">
            <div className="icons-container">
    <img src={arrowImage} alt="Arrow Icon" className="icon2"style={{ height: '20px', width: '20px' }}  />
    <img src={personImage} alt="Person Icon" className="icon1"style={{ height: '50px', width: '50px' }}  />
   </div>
    <p>“The courses are well-structured, engaging, and packed with valuable insights.”</p>
    <h2>Sukati Marjiyuki</h2>
    <div className="icons-container">
    <img src={arrowImage} alt="Arrow Icon" className="icon2"style={{ height: '20px', width: '20px' }}  />
    <img src={personImage1} alt="Person Icon" className="icon1"style={{ height: '50px', width: '50px' }}  />
    </div>
    <p>“The courses are well-structured, engaging, and packed with valuable insights.”</p>
    <h2>Parinem Sairimin</h2>
</div>

            <div className="column">
            <div className="icons-container">
            <img src={personImage2} alt="Person Icon" className="icon1"style={{ height: '50px', width: '50px' }}  />
            <img src={arrowImage1} alt="Arrow Icon" className="icon2" style={{ height: '20px', width: '20px' }} />
            </div>
                <p>“The courses are well-structured, engaging, and packed with valuable insights.”</p>
                <h2>Jessica Carmilanos</h2>
                <div className="icons-container">
                <img src={personImage3} alt="Person Icon" className="icon1"style={{ height: '50px', width: '50px' }}  />
                <img src={arrowImage1} alt="Arrow Icon" className="icon2"style={{ height: '20px', width: '20px' }}  />
                </div>
                <p>“The courses are well-structured, engaging, and packed with valuable insights.”</p>
                <h2>Dona Titanium Sey</h2>
            </div>
        </div>
    </div>
         </section>
         
    );
}

export default Home;
