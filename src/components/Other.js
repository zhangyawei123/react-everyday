import React, {Component} from 'react';
import { Pagination,Checkbox  } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 1 },
    { label: 'Pear', value: 2 },
    { label: 'Orange', value: 3 },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];
class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        }
        this.BoxonChange = this.BoxonChange.bind(this)
    }
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }
    BoxonChange(checkedValues) {
        console.log(checkedValues);
    }
    render() {
        return (
            <div>
                <Pagination showQuickJumper defaultCurrent={this.state.current} total={500} onChange={this.onChange.bind(this)} />
                <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.BoxonChange} />
                <br /><br />
                <CheckboxGroup options={options} defaultValue={[1]} onChange={this.BoxonChange} />
                <br /><br />
                <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.BoxonChange} />
            </div>
        );
    }
}


export default Other;
