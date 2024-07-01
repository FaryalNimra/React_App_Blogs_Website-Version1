import React from 'react';
import './About.css'; 
import leftImage1 from './home-img-1.png'; // Adjust the path accordingly
import backgroundImage from '././leftimage.png'; 
import backgroundImage1 from './why.png'; 
import leftImage from './leftimage.png';
import rightImage from './rightimage1.png';
import ArrowImage1 from './Rectangle 12347.png'; 
import icon from './1.png'
import icon1 from './2.png'
import icon2 from './3.png'



const About = () => {
    return (
        <section className="about" id="about">
            
    <div className="container2">
            <div className="left1">
                <img src={leftImage1} alt="Left1" className="left-image1" />
            </div>
            <div className="right">
                <br></br>
                <h1>Transform the World!</h1><br></br>
                <p>Lorem ipsum dolor sit amet consectetur. Aenean lectus convallis molestie cras nulla sed elit odio. Dignissim sit est proin turpis ipsum a odio accumsan. In faucibus tempor morbi at diam leo vulputate viverra. Vel sagittis faucibus ornare sit.
                </p><br></br><br></br>
                <div className="buttons">
                    <button className="button">Join Now</button>
                    <button className="button">Subscribe</button>
                </div><br></br><br></br>
            <p>Have any questions?</p>
            <p>Contact us!</p><br></br>
            <h2>+996 (4343) 4325665</h2>
            </div>
        </div>
        <div className="new-section">
                <div className="container">
                    <div className="left-content">
                        <p>Who we are</p><br></br>
                        <h1>About us</h1><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur. Purus eros sit morbi nulla natoque. Euismod convallis mi urna rutrum placerat ut sit vel. Volutpat turpis quis hac fringilla tristique nisi eleifend lorem. Amet viverra quis sed sit lobortis odio. Nibh est vitae iaculis urna nunc quis et. Sed quis scelerisque pharetra fames. Pulvinar et ante morbi aliquam. Ac in tincidunt porttitor vitae adipiscing mi a aenean. Senectus non dis sagittis odio. Luctus metus ut donec pellentesque nam. Elementum tincidunt congue duis sed non malesuada. Enim id rhoncus elit sem ullamcorper rhoncus.
                        Id morbi consectetur non fusce non. Morbi in eget et ultricies quis netus. Quis tortor morbi pharetra nibh dictum faucibus consequat. Congue etiam faucibus quis.</p>
                         <br></br>     
                    </div>
                    <div className="right-image">
                        <img src={backgroundImage} className="new-section-image" alt="Right About Image" />
                    </div>     
                </div>
                <div className="buttons">
                    <button className="button">Read More</button>
                    <button className="button">Subscribe</button>
                </div>
                
            </div>
            <div className="custom-div">
                <br></br>
            <p className="main-paragraph">Become one of us!</p><br></br>
            <h1 className="main-heading">Members Benefit</h1><br></br>
            <p className="main-paragraph">The National Hookah Community Association (NHCA) is a 501(c)6 non-profit organization that<br></br> protects and serves its members who are facing threats from new legislation at the local, state, and federal level.
            </p>
            <div className="three-columns">
                <div className="column">
                <h1 className="main-heading"><img src={icon} alt="Icon" className="icon" />Lorem ipsum dolor<br></br> sit amet<br></br> consectetur. Ut.</h1>
                <p className="column-paragraph" style={{ color: 'white' }}> Lorem ipsum dolor sit amet consectetur. Elementum morbi commodo risus dignissim duis. Duis vitae amet risus ut massa. Cursus in id est porta faucibus at elementum placerat. Lorem nunc egestas sed nisi sapien. Integer leo vitae nulla eget vulputate id praesent. Pellentesque tellus fermentum vitae elementum libero etiam et. Eu scelerisque duis enim diam sed. Cras tellus in eu ac placerat donec semper egestas augue. Mauris arcu mauris ipsum ultrices faucibus aliquam. Et elit in ipsum porttitor. Felis nec facilisi aenean parturient in.</p>
                </div>
                <div className="column">
                <h1 className="main-heading"><img src={icon1} alt="Icon" className="icon" />Lorem ipsum dolor<br></br> sit amet<br></br> consectetur. Ut.</h1>
                <p className="column-paragraph" style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur. Elementum morbi commodo risus dignissim duis. Duis vitae amet risus ut massa. Cursus in id est porta faucibus at elementum placerat. Lorem nunc egestas sed nisi sapien. Integer leo vitae nulla eget vulputate id praesent. Pellentesque tellus fermentum vitae elementum libero etiam et. Eu scelerisque duis enim diam sed. Cras tellus in eu ac placerat donec semper egestas augue. Mauris arcu mauris ipsum ultrices faucibus aliquam. Et elit in ipsum porttitor. Felis nec facilisi aenean parturient in.</p>
                </div>
                <div className="column">
                <h1 className="main-heading"><img src={icon2} alt="Icon" className="icon" />Lorem ipsum dolor<br></br> sit amet<br></br> consectetur. Ut.</h1>
                <p className="column-paragraph" style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur. Elementum morbi commodo risus dignissim duis. Duis vitae amet risus ut massa. Cursus in id est porta faucibus at elementum placerat. Lorem nunc egestas sed nisi sapien. Integer leo vitae nulla eget vulputate id praesent. Pellentesque tellus fermentum vitae elementum libero etiam et. Eu scelerisque duis enim diam sed. Cras tellus in eu ac placerat donec semper egestas augue. Mauris arcu mauris ipsum ultrices faucibus aliquam. Et elit in ipsum porttitor. Felis nec facilisi aenean parturient in.</p>
                </div>
            </div>
        </div>
        <div className="white-background">
            <div className="centered-content">
                <h1>Our latest blog posts</h1><br></br>
                <p>The National Hookah Community Association (NHCA) is a 501(c)6 non-profit organization that<br></br> protects and serves its members who are facing threats from new legislation at the local, state, and federal level.
                </p>
            </div>
            <div className="row">
                <div className="column">
                    <img src={backgroundImage} className="new-section-image" alt="Right About Image" /><br></br><br></br>
                    <h1>The culture of hookah</h1>
                    <br></br>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                    <br></br><br></br>
                        <button className="button-left">May 20th 2020</button>
                        <button className="button-right">Read More</button>
                    </div>
                </div>
                <div className="column">
                    <img src={backgroundImage} className="new-section-image" alt="Right About Image" /><br></br><br></br>
                    <h1>Tools, Resources, and Education
                    </h1><br></br>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.....</p>
                    <div className="buttons">
                    <br></br><br></br>
                        <button className="button-left">May 20th 2020</button>
                        <button className="button-right">Read More</button>
                    </div>
                </div>
                <div className="column">
                    <img src={backgroundImage} className="new-section-image" alt="Right About Image" /><br></br><br></br>
                    <h1>Few Words From Director’s Desk</h1><br></br>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className="buttons">
                    <br></br><br></br>
                        <button className="button-left">May 20th 2020</button>
                        <button className="button-right">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="new-section">
                <div className="container">
                    <div className="left-content">
                        <p>still thinking</p><br></br>
                        <h1>Why us?</h1><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur. Commodo duis ut venenatis risus. Et nulla volutpat volutpat eu aliquam et velit tortor odio. Eu tincidunt nulla dignissim id fringilla magna nunc egestas. Leo eget nulla vel interdum eget ac sed id. Est risus malesuada integer augue enim pharetra. Ac dui morbi adipiscing lectus morbi.
                        Senectus gravida quam at magna nisl adipiscing sagittis sem pretium. Scelerisque dis quam congue sit vel ut nisi. Vel blandit in potenti quam vestibulum aliquet amet. Varius lorem elit viverra ac. Nec metus accumsan arcu donec molestie donec morbi at vitae. Amet mi massa habitant lectus morbi. At sit interdum ultrices praesent fermentum risus hendrerit ipsum semper. Hac sagittis potenti nec sapien egestas a a felis.</p>
                         <br></br>     
                    </div>
                    <div className="right-image">
                        <img src={backgroundImage1} className="new-section-image" alt="Right About Image" />
                    </div>     
                </div>
                <div className="buttons">
                <button className="button" style={{ backgroundColor: '#23329B', marginLeft: '20px' }}>Read More</button>

                </div>
                
            </div>
            <div className="container1">
      <img src={leftImage} alt="Left" className="left-image" />
      <div className="right-image-container">
        <img src={rightImage} alt="Right" className="right-image" />
        <div className="overlay">
          <h1>Join the Education Revolution, Our Virtual Campus!</h1>
          <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom, where knowledge knows no boundaries, and embark on a transformative</p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
    <div className="centered1">
    <h1>FAQ</h1><br></br>
    <p style={{ textAlign: 'center' }}>Frequently asked questions about hookah and associations.</p>
    <div className="faq-content">
        <div className="faq-item">
        <br></br><br></br>
            <h2>
                <img src={ArrowImage1} className="icon1" alt="Arrow Icon" />
                Is enjoying hookah the same as smoking cigarettes?
            </h2>
            <p>No. All tobacco products have risks but comparing hookah to cigarettes is erroneous and misleading.
                Hookah is heated at a temperature that is four times cooler than a burning cigarette and creates an aerosol that is 75% water (60%) and glycerol (15%). By contrast, cigarette smoke is 75% tar, carbon monoxide, and nicotine.
                Most people enjoy hookah in moderation, far less often than typical smokers light up a cigarette. In the United States, for example, 90% of people who enjoy hookah do so no more than once per month. In comparison, the average American cigarette smoker will smoke 14 cigarettes per day.
                Hookah takes time to prepare and cannot be transported easily or used “on the go.” Hookah is a unique cultural and social experience, whose history, ingredients, and use make it incomparable to other tobacco products characterized by high-frequency use.</p>
        </div>
        <div className="faq-item">
            <h2>
                <img src={ArrowImage1} className="icon1" alt="Arrow Icon" />
                Does the water bowl act to purify the hookah aerosol?
            </h2>
            
        </div>
        <div className="faq-item">
            <h2>
                <img src={ArrowImage1} className="icon1" alt="Arrow Icon" />
                Is a one-hour hookah session the same as smoking 100 or 200 cigarettes?
            </h2>
            
        </div>
        <div className="faq-item">
            <h2>
                <img src={ArrowImage1} className="icon1" alt="Arrow Icon" />
                Is hookah contributing to youth tobacco use?
            </h2>
        
        </div>
        <div className="faq-item">
            <h2>
                <img src={ArrowImage1} className="icon1" alt="Arrow Icon" />
                Is there a difference between flavored and unflavored hookah?
            </h2>
        </div>
    </div>
    <div className="buttons">
                <button className="button" style={{ backgroundColor: ' #F54E4E', marginLeft: '150px' }}>Read More</button>

                </div>
</div>

         </section>
         
    );
}

export default About;
