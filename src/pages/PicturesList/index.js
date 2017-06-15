import React, {Component} from 'react';
import styles from './pictureList.css';
import List from '../../components/list';
import Button from '../../components/button';
import fetch from 'isomorphic-fetch';
import {getPicturesList} from '../../api/api';


class PicturesList extends Component {
    static self = this;
    static propTypes = {};
    state = {
        photos: [],
        page: 0
    };

    showMorePictures=()=>{
        this.setState({
            page: this.state.page + 1
        });

        getPicturesList(this.state.page +1).then((data) => {
            console.log(data.photos);
            this.setState({photos: this.state.photos.concat(data.photos)});
        });
    };

    componentDidMount() {
        getPicturesList(this.state.page).then((data) => {
            console.log(data.photos);
            this.setState({photos: data.photos});
        });
    }

    render() {

        return <div className={styles.listWrapper}>
            <List name="first 20 photos"
                  photos={this.state.photos}
                  className={styles.list}/>
            <Button onClick = {this.showMorePictures}
                    className={styles.showMoreBtn}>
               + Show more
            </Button>
        </div>
    }
}

export default PicturesList;