import React, { Component } from "react";


export class EachAsset extends Component {
  
  

  render() {

    let {title,description,imageUrl, newsUrl, author ,date} = this.props;
    return (
    //   <div className="card my-3" >
    //     <img src={imageUrl} className="card-img-top" alt="..."  />
    //     <div className="card-body">
    //       <h5 className="card-title">{title}</h5>
    //       <p className="card-text">
    //         {description}
    //       </p>
    //       <p class="card-text"><small class="text-muted">by {author} on {date}</small></p>
    //       <a href={newsUrl} className="btn btn-dark">
    //         read more
    //       </a>
    //     </div>

    //   </div>
            <>
            <th scope="row">{title}</th>
            <td>{description}</td>
            <td>{imageUrl}</td>
            <td>{newsUrl}</td>
            <td>{author}</td>
            <td>{date}</td>


            </>

            // 



    

    );
  }
}

export default EachAsset;



