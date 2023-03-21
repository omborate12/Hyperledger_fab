import React, { Component } from 'react'
import EachAsset from './EachAsset'
import PropTypes from 'prop-types'

export class Display extends Component {
    //  articles = [];

     static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : 'science',
        Taluka : "Dhule",
        TrueVal : 0

     }
     static propTypes = {
          country : PropTypes.string,
          pageSize : PropTypes.number,
          category : PropTypes.string
     }

    constructor(props){
        super(props);
        // alert("constructor runs in news component");
        document.title = "Chainify-Assets"+this.props.category;
        this.state = {
            articles : [], 
            Landid : '',
            District : '',
            Taluka : 'Dhule',
            TrueVal : '0',

            page : 1

        };

        this.handleChangeTaluka = this.handleChangeTaluka.bind(this);
        this.handleSubmitTaluka = this.handleSubmitTaluka.bind(this);
        
      }

      handleChangeTaluka(event) {
        this.setState({Taluka: event.target.value});
      }
      handleSubmitTaluka(event){
        this.setState({TrueVal : '1'});
        event.preventDefault();
      }


  async componentDidMount(){
    this.setState({
      loading : true
    })
    let url2 = `http://localhost:4002/getQuery`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2185a8911b84cdbb8456ce360d5f9f8&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url2);
    console.log(data);
    let parsedData  = await data.json();
    console.log(parsedData);
    this.setState({
    //   articles: parsedData.articles,
      articles: parsedData,

      loading : false
    })
  }
  
  render() {
    return (

      <div className='container my-3 bg-cover'>
        <br></br>
        <br></br>

        <b className='text-white'>Apply filters</b>
        <br></br>
        

        <div >
        <form className=" text-white"  >
  <div class="form-row">
    
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label >land id</label>
      <input type="text" class="form-control"  placeholder="land id" ></input>
      
    </div>
    
    <div class="col-md-3 mb-3">
      <label >District</label>
      <input type="text" class="form-control"  placeholder="State" ></input>
      
    </div><div class="col-md-3 mb-3">
      <label >Taluka</label>
      <input type="text" class="form-control"  placeholder="Taluka"  onChange={this.handleChangeTaluka}></input>
      
    </div>
    
  </div>
  
  <button class="btn btn-primary col-md-6" type="submit" >Search by landid</button>
  <button class="btn btn-primary col-md-3" type="submit">Search by District</button>
  <button class="btn btn-primary col-md-3" type="submit" onClick={this.handleSubmitTaluka}>Search by Taluka</button>

</form>
        </div>


        {/* <h1 className='text-center' style={{marginTop : "100px"}} >News Monkey - Top headlines</h1> */}
        {/* {this.state.loading && <Spinner/>} */}
        <div className="row bg-cover" style={{marginTop : "100px"}}>
        
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Land Id</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Land Value</th>
      <th scope="col">is Commercial</th>
      <th scope="col">District</th>
      <th scope="col">Taluka</th>

    </tr>
  </thead>
  <tbody>
    
    {this.state.articles.map((element)=>{
            // console.log(element);
            console.log(this.state.TrueVal);
         if(this.state.TrueVal == '1'){
          if(element.Record.Tal == this.state.Taluka){
            return <tr className='text-white' key = {element.Key}>
                <EachAsset title = {element.Key?.slice(0, 45)} description = { element.Record.owner?.slice(0, 60)} imageUrl = {element.Record.price} newsUrl = {element.Record.commercial} author={element.Record.district} date = {(element.Record.Tal)}/>
                
                {/* <EachAsset title = {element.title?.slice(0, 45)} description = { element.description?.slice(0, 60)} imageUrl = {element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2022-05/pp91hu2o_mahesh_625x300_31_May_22.jpg"} newsUrl = {element.url} author={element.author} date = {(element.publishedAt)}/> */}
            </tr>
          }
         }
         else{

           return <tr className='text-white' key = {element.Record.district}>
                <EachAsset title = {element.Key?.slice(0, 45)} description = { element.Record.owner?.slice(0, 60)} imageUrl = {element.Record.price} newsUrl = {element.Record.commercial} author={element.Record.district} date = {(element.Record.Tal)}/>
                
                {/* <EachAsset title = {element.title?.slice(0, 45)} description = { element.description?.slice(0, 60)} imageUrl = {element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2022-05/pp91hu2o_mahesh_625x300_31_May_22.jpg"} newsUrl = {element.url} author={element.author} date = {(element.publishedAt)}/> */}
            </tr>
            }
                
        })}
    
  </tbody>
</table>
        




           
        </div>
       <div className='container d-flex justify-content-between'>
        <button disabled ={this.state.page<=1} type="button" className='btn btn-dark ' onClick={this.handlePrevClick}>&larr; prev</button>
        <button type="button" className='btn btn-dark' onClick={this.handleNextClick}>next &rarr;</button>
       </div>

      </div>
    )
  }
}

export default Display