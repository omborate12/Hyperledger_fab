import React, { Component } from 'react'

export default class Transact extends Component {
  render() {
    // let {Type,From,To,Transaction_id,Time} = this.props

    return <div>
      <div className="container my-4 text-white mb-24"> 
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary  " data-bs-theme="dark"> */}
      {/* <div class="container text-center">
     <div class="row my-3" >
            <div class="col">{Type}</div>
            <div class="col">{From}</div>
            <div class="col">{To}</div>
            <div class="col">{Transaction_id}</div>
            <div class="col">{Time}</div>
     </div> */}
     <br>
     </br>
     <br></br>
     <div className="row my-3 mb-24" >
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>Type</div>
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>From</div>
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>To</div>
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>Transaction ID</div>
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>Asset value</div>
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>Date</div>
            <div class="col" style={{ color: 'skyblue',fontWeight: 'bold' }}>Time</div>
     </div>
     
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Tarun</div>
            <div class="col"style={{ color: 'white' }}>Om</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$24000</div>
            <div class="col"style={{ color: 'white' }}>1 January 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Raj</div>
            <div class="col"style={{ color: 'white' }}>Pratik</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$72500</div>
            <div class="col"style={{ color: 'white' }}>11 February 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Anuj</div>
            <div class="col"style={{ color: 'white' }}>Sachin</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$33500</div>
            <div class="col"style={{ color: 'white' }}>15 March 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Tarun</div>
            <div class="col"style={{ color: 'white' }}>Om</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$24000</div>
            <div class="col"style={{ color: 'white' }}>1 January 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Raj</div>
            <div class="col"style={{ color: 'white' }}>Pratik</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$72500</div>
            <div class="col"style={{ color: 'white' }}>11 February 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Anuj</div>
            <div class="col"style={{ color: 'white' }}>Sachin</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$33500</div>
            <div class="col"style={{ color: 'white' }}>15 March 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Tarun</div>
            <div class="col"style={{ color: 'white' }}>Om</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$24000</div>
            <div class="col"style={{ color: 'white' }}>1 January 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Raj</div>
            <div class="col"style={{ color: 'white' }}>Pratik</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$72500</div>
            <div class="col"style={{ color: 'white' }}>11 February 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Anuj</div>
            <div class="col"style={{ color: 'white' }}>Sachin</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$33500</div>
            <div class="col"style={{ color: 'white' }}>15 March 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Tarun</div>
            <div class="col"style={{ color: 'white' }}>Om</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$24000</div>
            <div class="col"style={{ color: 'white' }}>1 January 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Raj</div>
            <div class="col"style={{ color: 'white' }}>Pratik</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$72500</div>
            <div class="col"style={{ color: 'white' }}>11 February 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Anuj</div>
            <div class="col"style={{ color: 'white' }}>Sachin</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$33500</div>
            <div class="col"style={{ color: 'white' }}>15 March 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Tarun</div>
            <div class="col"style={{ color: 'white' }}>Om</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$24000</div>
            <div class="col"style={{ color: 'white' }}>1 January 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Raj</div>
            <div class="col"style={{ color: 'white' }}>Pratik</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$72500</div>
            <div class="col"style={{ color: 'white' }}>11 February 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <hr style={{ color: 'white' }}/>
     <div class="row my-3 pb-40" >
            <div class="col" style={{ color: 'white' }}>Transfer</div>
            <div class="col"style={{ color: 'white' }}>Anuj</div>
            <div class="col"style={{ color: 'white' }}>Sachin</div>
            <div class="col"style={{ color: 'white' }}>ABC121</div>
            <div class="col"style={{ color: 'white' }}>$33500</div>
            <div class="col"style={{ color: 'white' }}>15 March 2023</div>
            <div class="col"style={{ color: 'white' }}>12:40:32</div>
     </div>
     <div class="row my-3 pb-40" >
            <div class="col" style={{ color: 'white' }}></div>
            <div class="col"style={{ color: 'white' }}></div>
            <div class="col"style={{ color: 'white' }}></div>
            <div class="col"style={{ color: 'white' }}></div>
            <div class="col"style={{ color: 'white' }}></div>
            <div class="col"style={{ color: 'white' }}></div>
            <div class="col"style={{ color: 'white' }}></div>
     </div>
     <br></br>
    
     
     
    



</div>
    {/* </nav> */}
      </div>


    // </div>
  }
}