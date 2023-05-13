import { Heading } from '../../components/Heading/index.jsx';
import {Wrapper} from '../../styles/style.jsx'
import { Base } from '../Base/index.jsx';
import { mockBase } from '../Base/stories';

function Home() {
  return <Base {...mockBase} />
}

export default Home;
