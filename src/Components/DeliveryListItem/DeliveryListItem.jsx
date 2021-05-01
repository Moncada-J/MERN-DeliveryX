import React from 'react';
import {Link} from 'react-router-dom';
import './DeliveryListItem';

function DeliveryListItem({delivery}) {
    return (
            <div className='panel panel-default'>
                <div className="panel-heading">
                    <h3 className='panel-title'>{delivery.trackNum}</h3>
                </div>
            <div className='panel-footer DeliveryListItem-action-panel'>
            <Link className='btn btn-xs btn-info' to={{
            pathname: '/details',
            state: {delivery}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {delivery}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
        >
          REMOVE 
        </button>
      </div>
    </div>
    )
}

export default DeliveryListItem;