/*
 * @Description: 与第三方库协同
 * @Author: F-Stone
 * @Date: 2021-11-17 18:13:34
 * @LastEditTime: 2021-11-17 18:37:13
 * @LastEditors: F-Stone
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Chosen extends React.Component {
    componentDidMount() {
      // eslint-disable-next-line no-undef
      this.$el = $(this.el);
      this.$el.chosen();
  
      this.handleChange = this.handleChange.bind(this);
      this.$el.on('change', this.handleChange);
    }
    
    componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.$el.trigger("chosen:updated");
      }
    }
  
    componentWillUnmount() {
      this.$el.off('change', this.handleChange);
      this.$el.chosen('destroy');
    }
    
    handleChange(e) {
      this.props.onChange(e.target.value);
    }
  
    render() {
      return (
        <div>
          <select className="Chosen-select" ref={el => this.el = el}>
            {this.props.children}
          </select>
        </div>
      );
    }
  }
  
  function Example() {
    return (
      <Chosen onChange={value => console.log(value)}>
        [
            <option>vanilla</option>
            <option>chocolate</option>
            <option>strawberry</option>
        ]
      </Chosen>
    );
  }
  
  ReactDOM.render(
    <Example />,
    document.getElementById('root')
  );
