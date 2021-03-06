/* eslint-disable array-callback-return */

import React, { Component } from 'react';
import withLanguageProps from 'HOC/withLanguageProps';
import { AddressTable } from 'app/components/';
import { icxContract } from 'constants/icxContract'

const INIT_STATE = {

}

@withLanguageProps
class ContractList extends Component {
  constructor(props) {
    super(props);
    this.state = INIT_STATE;
  }

  selectAddress = (address) => {
    this.props.setContractAddress(address);
    this.props.fetchAbi(address);
  }

  render() {
    return (
      <div>
        <div className="dimmed"></div>
    		<div className="popup address">
    			<span className="close" onClick={this.props.closePopup}><em className="_img"></em></span>
    			<h1 className="title">{'컨트랙트 목록'}</h1>
          <AddressTable
            listArr={icxContract}
            selectAddress={this.selectAddress}
            {...this.props}/>
    		</div>
    	</div>
    );
  }
}

export default ContractList;
