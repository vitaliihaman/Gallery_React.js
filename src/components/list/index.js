import React, {Component} from 'react';
import style from './list.css';
import {Link} from 'react-router-dom';



class List extends Component{
    static propTypes={};
    
    render(){

        return <div>
            
            <ul name={this.props.name}
                className={style.list}>
                {this.props.photos.map((element,i)=>{
                     return <li key = {i}>
                         <Link to={`/${element.id}`}>
                             <img src={element.image_url}/>
                         </Link>
                     </li>
                    })}
            </ul>
            
            
        </div>
    }
    
}

export default List;
