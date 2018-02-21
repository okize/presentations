// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Layout,
  Fill,
  Link,
  Fit,
  ListItem,
  Image,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';
import Typist from 'react-typist';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
import 'normalize.css';

/* eslint-disable */
const SetStateFunctionCode = require('!raw-loader!./assets/SetStateFunction.example');
const SetStateObjectCode = require('!raw-loader!./assets/SetStateObject.example');
const ErrorBoundaryCode = require('!raw-loader!./assets/ErrorBoundary.example');
const FragmentOldCode = require('!raw-loader!./assets/FragmentOld.example');
const FragmentNew1Code = require('!raw-loader!./assets/FragmentNew1.example');
const FragmentNew2Code = require('!raw-loader!./assets/FragmentNew2.example');
const FragmentNew3Code = require('!raw-loader!./assets/FragmentNew3.example');
const StrictModeCode = require('!raw-loader!./assets/StrictMode.example');
const PortalPage = require('!raw-loader!./assets/PortalPage.example');
const PortalApp = require('!raw-loader!./assets/PortalApp.example');
const PortalModal = require('!raw-loader!./assets/PortalModal.example');
/* eslint-enable */

const images = {
  errOld: require('./assets/old_react_errors.png'),
  err: require('./assets/missing_error_boundary.gif'),
  bambiThumper: require('./assets/bambi_thumper.gif'),
};

const customColors = {
  primary: '#110f10',
  secondary: '#f7f6f5',
  tertiary: '#13c6ae',
  quartenary: '#fee019',
};

const customFonts = {
  primary: 'Avenir Next',
  secondary: 'Futura'
};

const theme = createTheme(customColors, customFonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide', 'zoom']} progress="bar" transitionDuration={400} theme={theme}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            React 16
          </Heading>
          <Heading size={4} textColor='tertiary'>Some things you should know</Heading>
          <br />
          <Heading style={{ fontSize: '20px'}} textColor='quartenary'>...and some stuff that doesn't matter</Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Fiber
          </Heading>
          <Text textColor='tertiary'>The new React reconciliation algorithm</Text>
          <Text textColor='secondary'>Ground-up rewrite; keeps the public API almost unchanged</Text>
          <br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/" textColor='quartenary'>A look inside an API-compatible rewrite</Link>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Async rendering
          </Heading>
          <Text size={5} textColor='tertiary'>(not enabled by default yet)</Text>
          <List>
            <ListItem style={{ marginBottom: '25px'}}>Ability to split interruptible work in chunks</ListItem>
            <ListItem style={{ marginBottom: '25px'}}>Ability to prioritize, rebase and reuse work in progress</ListItem>
            <ListItem>Ability to yield back and forth between parents and children to support layout in React</ListItem>
          </List>
          <strong>Watch:&nbsp;</strong>
          <Link href="https://www.youtube.com/watch?v=ZCuYPiUIONs" textColor='quartenary'>A Cartoon Intro to Fiber</Link>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} style={{ color: 'red' }}>
            Error Boundaries
          </Heading>
          <Text textColor='secondary'>
            If you remember one thing, make it this
          </Text>
        </Slide>

        <Slide>
          <List>
            <ListItem style={{ marginBottom: '25px'}}>Previously runtime errors in rendering could leave React in a broken state</ListItem>
            <ListItem style={{ marginBottom: '25px'}}>Confusing errors were produced:</ListItem>
            <Image src={images.errOld} style={{height: '85%', width: '85%'}} />
            <ListItem style={{ marginTop: '25px'}}>Now, React will unmount the entire tree instead of displaying corrupted date</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            If you don't implement a boundary?
          </Heading>
          <br />
          <Appear>
            <Image src={images.err} style={{height: '125%', width: '125%'}} />
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1} textColor='secondary'>
            componentDidCatch
          </Heading>
          <br />
          <CodePane
            lang="jsx"
            source={ErrorBoundaryCode}
            theme="light"
            textSize={14}
          />
          <br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://rollbar.com/blog/react-error-boundaries/" textColor='quartenary'>Error Boundaries in React 16</Link>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Fragments
          </Heading>
          <Text fit textColor="tertiary">Now you can return multiple elements from render!</Text>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Pre-React 16
          </Heading>
          <Text textColor="secondary">The only way to return a list of children was by wrapping the child elements in an extra element, usually a `div` or `span`</Text>
          <br />
          <CodePane
            lang="jsx"
            source={FragmentOldCode}
            theme="light"
            textSize={14}
          />
        </Slide>

        <Slide>
          <Heading fit size={1} lineHeight={1} textColor='secondary'>
            Now, arrays are ok
          </Heading>
          <br /><br />
          <CodePane
            lang="jsx"
            source={FragmentNew1Code}
            theme="light"
            textSize={14}
          />
        </Slide>

        <Slide>
          <Heading fit size={1} lineHeight={1} textColor='secondary'>
            Strings are ok too
          </Heading>
          <br /><br />
          <CodePane
            lang="jsx"
            source={FragmentNew3Code}
            theme="light"
            textSize={14}
          />
          <br /><br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://reactjs.org/docs/react-component.html#render" textColor='quartenary'>Full list of supported return types</Link>
        </Slide>

        <Slide>
          <Heading fit size={1} lineHeight={1} textColor='secondary'>
            Another option
          </Heading>
          <br /><br />
          <CodePane
            lang="jsx"
            source={FragmentNew2Code}
            theme="light"
            textSize={14}
          /><br />
          <Appear>
            <CodePane
              lang="jsx"
              source={`const Fragment = (props) => props.children;`}
              theme="light"
              textSize={14}
            />
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Portals
          </Heading>
          <br />
          <Text textColor='tertiary'>
            Allow you to render children <br />
            into a DOM node outside  <br />
            of the parent component
          </Text>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Given this html
          </Heading>
          <br />
          <CodePane
            lang="html"
            source={PortalPage}
            theme="light"
            textSize={14}
          />
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            And an app like this
          </Heading>
          <br />
          <CodePane
            lang="jsx"
            source={PortalApp}
            theme="light"
            textSize={14}
          />
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Our Modal could be...
          </Heading>
          <br />
          <CodePane
            lang="jsx"
            source={PortalModal}
            theme="light"
            textSize={14}
          />
        </Slide>

        <Slide>
          <List>
            <ListItem style={{ marginBottom: '25px'}}>Although a portal may be anywhere in the DOM tree, it behaves like a normal React child in every other way</ListItem>
            <ListItem>An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree</ListItem>
          </List>
          <br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://reactjs.org/docs/portals.html" textColor='quartenary'>ReactDOM.createPortal docs</Link>
          <br /><br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://alligator.io/react/using-new-portal-feature-in-react/" textColor='quartenary'>A more complex use-case with stacking context</Link>
          <br /><br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202" textColor='quartenary'>Using a React 16 Portal to do something cool</Link>
        </Slide>



        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Future deprecations <br />to keep in mind
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} lineHeight={1} textColor='secondary'>
            setState
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} lineHeight={2} textColor='tertiary'>Don't do this:</Heading>
              <CodePane
                lang="jsx"
                source={SetStateObjectCode}
                theme="light"
                textSize={14}
              />
            </Fill>
            <Fit>&nbsp;&nbsp;&nbsp;</Fit>
            <Fill>
              <Heading size={6} lineHeight={2} textColor='tertiary'>Do this:</Heading>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={SetStateFunctionCode}
                  theme="light"
                  textSize={14}
                />
              </Appear>
            </Fill>
          </Layout>
          <br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b" textColor='quartenary'>Functional setState is the future of React</Link>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Deprecated lifecycle methods
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} lineHeight={2} textColor='tertiary'>Don't use:</Heading>
              <Appear order={1}>
                <Text style={{ marginBottom: '20px', fontSize: '30px' }} textColor='secondary'>componentWillMount</Text>
              </Appear>
              <Appear order={3}>
                <Text style={{ marginBottom: '20px', fontSize: '30px' }} textColor='secondary'>componentWillUpdate</Text>
              </Appear>
              <Appear order={5}>
                <Text style={{ marginBottom: '20px', fontSize: '30px' }} textColor='secondary'>componentWillReceiveProps</Text>
              </Appear>
            </Fill>
            <Fill>
              <Heading size={6} lineHeight={2} textColor='tertiary'>Instead use:</Heading>
              <Appear order={2}>
                <Text style={{ marginBottom: '20px', fontSize: '30px' }} textColor='secondary'>componentDidMount</Text>
              </Appear>
              <Appear order={4}>
                <Text style={{ marginBottom: '20px', fontSize: '30px' }} textColor='secondary'>componentDidUpdate</Text>
              </Appear>
              <Appear order={6}>
                <Text style={{ marginBottom: '20px', fontSize: '30px' }} textColor='secondary'>getDerivedStateFromProps</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Less interesting stuff
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Strict Mode
          </Heading>
          <Text textColor='secondary'>
            If one of the child components, rendered in the StrictMode subtree, uses some of the lifecycle methods
            mentioned in the previous slide, you will then see an error message in dev console
          </Text>
          <br />
          <CodePane
            lang="jsx"
            source={StrictModeCode}
            theme="light"
            textSize={14}
          />
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Custom DOM Elements (don't do this):
          </Heading>
          <br />
          <CodePane
            lang="jsx"
            source={'<div foo="bar" />'}
            theme="light"
            textSize={14}
          />
          <br /><br />
          <Layout>
            <Fill>
              <Heading size={6} lineHeight={2} textColor='tertiary'>React 15:</Heading>
              <CodePane
                lang="jsx"
                source={'<div />'}
                theme="light"
                textSize={14}
              />
            </Fill>
            <Fit>&nbsp;&nbsp;&nbsp;</Fit>
            <Fill>
              <Heading size={6} lineHeight={2} textColor='tertiary'>React 16:</Heading>
              <CodePane
                lang="jsx"
                source={'<div foo="bar" />'}
                theme="light"
                textSize={14}
              />
            </Fill>
          </Layout>
          <br />
          <strong>Read:&nbsp;</strong>
          <Link size={6} href="https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html" textColor='quartenary'>DOM Attributes in React 16</Link>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Stuff you probably <br />don't need to know about
          </Heading>
        </Slide>

        <Slide>
          <strong>SSR:&nbsp;</strong><br />
          <Link size={6} href="https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67" textColor='quartenary'>What’s New With Server-Side Rendering in React 16</Link>
          <br /><br />
          <strong>Context:&nbsp;</strong><br />
          <Link size={6} href="https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b" textColor='quartenary'>React's new Context API</Link><br />
          <Link size={6} href="https://github.com/diegohaz/awesome-react-context" textColor='quartenary'>A curated list related to the new React Context API</Link>
        </Slide>
      </Deck>
    );
  }
}
