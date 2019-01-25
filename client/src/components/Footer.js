import React, { Component } from 'react';
import './footer.css'



class Footer extends Component {






    render() {

        const footerStyles = {
            marginMin : {
            margin: '3px'
            },
            text : {
                color: 'rgb(95, 92, 92)'
            }
        }
        return(


            <footer style={{backgroundColor : 'rgb(0, 0, 0, 0)'}}  class="page-footer font-small blue pt-4">

    {/* <!-- Footer Links --> */}
    <div class="container-fluid text-center text-md-left">

      {/* <!-- Grid row --> */}
      <div style={footerStyles.marginMin} class="row">

        {/* <!-- Grid column --> */}
        <div style={footerStyles.marginMin} class="col-md-12 mt-md-0 mt-12">

          {/* <!-- Content --> */}
        
          <strong>Let's talk!</strong><br></br>
        Wanna get in touch or talk about a project?<br></br>
        Feel free to contact me via email at <a style={footerStyles.text} className='footerlink' href="mailto:Jroze.Contact@example.com?Subject=Hello!" target="_top">Jroze.Contact@Gmail.com</a><br></br>
        Or by clicking the <a style={footerStyles.text} className='footerlink' href='/contact'>Contact</a> link!

        </div>
        </div>
        {/* <!-- Grid column --> */}

        <hr style={footerStyles.marginMin} class="clearfix w-100 d-md-none pb-3" />


      {/* <!-- Grid row --> */}

    </div>
    {/* <!-- Footer Links -->

    <!-- Copyright --> */}
    <div style={footerStyles.marginMin} class="footer-copyright text-center py-3">© 2018 Copyright:
      <a style={footerStyles.text} href="https://github.io/Jroze88"> Jano Roze</a>
    </div>
    {/* <!-- Copyright --> */}

  </footer>
  /* <!-- Footer --> */

            
    /* <footer style={{display: 'none'}} className="page-footer">


    <div className='text-center py-3 footertext'>
        <strong>Let's talk!</strong><br></br>
        Wanna get in touch or talk about a project?<br></br>
        Feel free to contact me via email at <a className='footerlink' href="mailto:Jroze.Contact@example.com?Subject=Hello!" target="_top">Jroze.Contact@Gmail.com</a><br></br>
        Or by clicking the <a className='footerlink' href='/contact'>Contact</a> link!
    </div>
  
    <div className="footer-copyright footertext cp text-center py-3">© 2018 Copyright:
      <a className='footerlink' href="https://github.com/Jroze88/Jroze88.github.io"> Jano Roze</a>
    </div>
    
  
  </footer> */

        )}

     
    }



export default Footer