import './app.css';
import {Card} from './Components/Card';
import {Images} from './Components/Images';

const children = <Images/>;

function App() {
  return (
    <>
      <Card>{children}</Card>
      <Card/>
    </>
  );
}

export default App;

