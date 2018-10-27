import React, { Component}  from 'react';
import './clickygame.css'
import $ from 'jquery';



class ClickyGame extends Component {




    render() {

        return(

            <div class="grid">
        <ul class="list">
          <li class="card ani1">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani2">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani3">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani4">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani5">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani6">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani7">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani8">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani0">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
          <li class="card ani9">
                <a href="#"></a>
                <span id="SPAN_3">stuff</span>
          </li>
        </ul>
        
        <button class="stack">Stack</button>
        <button class="spread">Spread</button>
        
      </div>



        )
    }}

    export default ClickyGame