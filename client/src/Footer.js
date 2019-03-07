import React, { Component } from 'react';



class Footer extends Component {






    render() {

      const footer = {
        flexShrink : 'none'
      }
        return(

          <footer style={footer} id="sticky-footer" class="py-4 bg-dark text-white-50">
          <div class="container text-center">
            <small>Copyright &copy; Jano Roze</small>
          </div>
        </footer>

        )}

     
    }



export default Footer