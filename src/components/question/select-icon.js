import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import icons from '../../assets/dev-icons/icons.json'
import './imgTitle.css'

class SelectIcon extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
    }


  handleChange = event => {
      //this.setState({ [name]: event.target.checked });



  };

  render() {
    let icon = icons.map(icono =>{
      let className = `devicon-${icono.name}-${icono.versions.font}`
      console.log(className + ' log de SelectIcon-render');
      return (
        <div className="grid-item">
          <i className={className} key={icono.id}></i>
          <Checkbox
          checked={this.state.checked}
          onChange={this.handleChange}
          value={`devicon-${icono.name}-${icono.versions.font}`}
          key={icono.id}
          inputRef={this.props.inputRef}
        />
        </div>

      )
    })
    return (
      <div >
        <div className="grid-container" style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
            {icon}
        </div>
      </div>
    );
  }
}

export default SelectIcon;
