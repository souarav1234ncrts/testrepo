import isAuthenticated from "./authenticate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
       (isAuthenticated())? (
         <Component {...props} />
        ) 
        :
(
        <Redirect to="/" />
        )
      
    }}
  />
);
export default PrivateRoutes;
