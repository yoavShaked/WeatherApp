import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function calculateAvg(data){
    return _.round(_.sum(data) / data.length);
}

export default  (props) => {
    return (
        <div>
            <Sparklines width={160} hight={120} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{calculateAvg(props.data)} {props.units}</div>
        </div>
    );
}