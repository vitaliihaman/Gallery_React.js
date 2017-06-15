import React, {Component} from 'react';
import style from './list.css';
import {Link} from 'react-router-dom';


class List extends Component {
    static propTypes = {};


    render() {

        return <div>
            <ul name={this.props.name}
                className={style.list}>
                {this.props.photos.map((element, i)=> {
                    return <li key={i} className={style.wrapElement}>
                        <div className={style.elements}>
                            {element.name}
                        </div>
                        <Link to={`/${element.id}`}>
                            <img src={element.image_url}
                                 className={style.elements}/>
                        </Link>
                        <div className={style.elements}>
                            Author:{element.user.fullname}
                        </div>
                    </li>
                })}
            </ul>
        </div>
    }
}

export default List;
