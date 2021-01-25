import React from 'react';
//import Formsy from 'formsy-react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import FormsyText from 'formsy-material-ui/lib/FormsyText';
//import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component{

  render(){

      return(
        <MuiThemeProvider>
          <Formsy.Form>
            <div>
              <FormsyText
                name="email"
                required
                validations="isEmail"
                validationError="Email inválido"
                floatingLabelText="Escribe tu email"
              />
            </div>

            <div>
              <FormsyText
                name="password"
                required
                type="password"
                floatingLabelText="Esribe tu password"
              />
            </div>

            <div>
              <RaisedButton
                type="submit"
                label="iniciar sesión"
              />
            </div>
          </Formsy.Form>
        </MuiThemeProvider>
      );
  }
}
