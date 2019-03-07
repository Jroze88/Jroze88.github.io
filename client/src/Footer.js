import React, { Component } from 'react';



class Footer extends Component {






    render() {

      const footer = {
        flexShrink : 'none',
        position: 'absolute',
        bottom: '0',
        width: '100vw',
        height: '10px',
        padding: '0'
      }
        return(

          <footer style={footer} id="sticky-footer" class="py-4 bg-dark text-white-50">
          <div style={{fontSize: '0.8em', padding: '0', margin: '0', height: '10px'}} class="container text-center">
            <small style={{fontSize: '0.8em'}}>Copyright &copy; <a style={{color: 'lightblue'}} href="https://cmon.com/products">CMON</a> A Song of Ice and Fire, <a style={{color: 'lightblue'}} href="https://asoiafcc.com">OnTheTableGaming</a>, <a style={{color: 'lightblue'}} href="/home">Jano Roze</a></small>
          </div>
        </footer>

        )}

     
    }



export default Footer