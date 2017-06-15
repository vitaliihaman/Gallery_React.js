import React, {Component} from 'react';
import styles from './fullSizeScreen.css';
import {currPicture} from '../../api/api';


class FullSizeScreen extends Component {
    static propTypes = {};
    state = {
        imgUrl: ""
    };

    componentDidMount() {
        currPicture(this.props.match.params.id).then((data) => {
            this.setState({
                imgUrl: data.photo.image_url
            });
        });
    }

    render() {
        return <div className={styles.wrapGeneral}>
            <div className={styles.fullScreenWrapper}>
                {this.state.imgUrl ?
                    <img src={this.state.imgUrl}
                         className={styles.img}/>
                    : <div>loading...</div>}
            </div>
        </div>
    }
}
export default FullSizeScreen;