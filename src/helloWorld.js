import { withLDConsumer } from 'launchdarkly-react-client-sdk';

// Pass the flags prop and return an element based on the state of the feature flag key
const HelloWorld = ({ flags }) => {
    console.log("this was fired helow world",flags )
    
    return flags.showNews  ? <div>Flag on</div> : <div>Flag off</div>;
};

export default withLDConsumer()(HelloWorld);