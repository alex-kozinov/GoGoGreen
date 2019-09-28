import React from 'react';
import  "./styles.css";
import "../../styles/main.css"
import akinator from '../../imgs/akinator.png';


export class Akinator extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <table className={'all_window'}>
                <tr className={'upper-side'}>
                    <div className={'question-shape dialog-colors texts-styles question-pos'}>
                        <p>Привет!</p>
                    </div>
                    <img src={akinator} className={'akinator-position'}/>
                </tr>
                <tr className={'lower-side'}>
                    <p>SEcond page</p>
                </tr>
            </table>
        );
    }
}

export default Akinator;