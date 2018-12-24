import React, {Component} from "react";
import { Table } from 'antd';
import {AddressLink, TransactionHashLink} from "../../../../common/Links";
import {FormattedDate, FormattedTime, injectIntl} from "react-intl";
import {TRXPrice} from "../../../../common/Price";
import {ONE_TRX} from "../../../../../constants";
import {Truncate} from "../../../../common/text";
import {tu, tv} from "../../../../../utils/i18n";
import {Client} from "../../../../../services/api";
import {Client20} from "../../../../../services/api";
import {connect} from "react-redux";
import {upperFirst} from 'lodash'
import {dateFormat} from '../../../../../utils/DateTime'
import {setLastprice} from '../../../../../actions/exchange'
import {TronLoader} from "../../../../common/loaders";

class TranList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [],
      timer:null,
      isLoading:true
      //time: null
    }
  }


  async componentDidMount() {
    let { selectData } = this.props
    let {timer} = this.state;
    await this.getData()
    this.getColumns();
    clearInterval(timer);
    this.setState({
      timer: setInterval(() => {
        this.getData();
      }, 10000)
    });
    
  }

  componentDidUpdate(prevProps) {
    const { selectData } = this.props
    const {timer} = this.state;
    if((prevProps.selectData.exchange_id != selectData.exchange_id)){
      clearInterval(timer);
      this.setState({
        isLoading:true
      })
      this.getData();
      this.setState({
        timer: setInterval(() => {
          this.getData();
        }, 10000)
      });
    }
  }

  componentWillUnmount() {
    const {timer} = this.state
    clearInterval(timer);
  }

  getData = async () => {
    const {selectData,setLastprice} = this.props
    if(selectData.exchange_id){
      const {code,data} = await Client20.getTransactionList({limit: 20,start:0, pairID: selectData.exchange_id});
      this.setState({
        isLoading:false
      })
      if(code === 0 && data){
        this.setState({dataSource: data.rows})
        let row0 = data.rows ? data.rows[0] : {price:0,type:0}
        if(row0){
          let obj = {
            value: row0.price,
            type: row0.order_type
          }
          setLastprice(obj)
        }
        
      }
    }
  }

  getColumns() {
    let {dataSource,isLoading} = this.state;
    let {intl,selectData} = this.props;
    let first_token =  selectData.fShortName ? '(' + selectData.fShortName + ')' : '';
    const columns = [
      {
        title: upperFirst(intl.formatMessage({id: 'trc20_trans_record_header_time'})),
        dataIndex: 'orderTime',
        key: 'orderTime',
        render: (text, record, index) => {
          return <span>
            {dateFormat(record.orderTime)}
          </span>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'trc20_trans_record_header_price'})),
        dataIndex: 'price',
        key: 'price',
        render: (text, record, index) => {
          return  <span className={[record.order_type === 1 ? 'col-red':'col-green']}>{record.price}</span>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'trc20_trans_record_header_amount'})+first_token),
        dataIndex: 'volume',
        key: 'volume',
        align: 'center',
        render: (text, record, index) => {
          return  record.volume + ' ' + record.unit
        }
      }
    ]

    
    return (
      <div>
      {isLoading ?  <TronLoader/> :
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowKey={(record, index) => {
                return index
            }}
        />
      }
      </div>
          
    )
  }

  render() {
    let {dataSource, columns} = this.state;
    if (!dataSource || dataSource.length === 0) {
      return (
        <div className="p-3 text-center no-data">{tu("no_transactions")}</div>
      );
    }
    return (
      <div className="exchange__tranlist">
          {this.getColumns()}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    selectData: state.exchange.data,
    activeLanguage:  state.app.activeLanguage,
  };
}

const mapDispatchToProps = {
  setLastprice
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(TranList));