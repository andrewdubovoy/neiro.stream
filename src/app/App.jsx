import '../shared/styles/global.css';
import '../shared/styles/routeTransitions.css';
import { useEffect, useState } from 'react';
import { HomePage } from '../pages/home';
import StreamsPage from '../pages/streams';
import StreamPage from '../pages/stream';
import StudioPage from '../pages/studio';
import LoginPage from '../pages/login';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let Page = HomePage;
  if (route === '#streams' || route === '#watch') Page = StreamsPage;
  else if (route && route.startsWith('#stream-')) Page = StreamPage;
  else if (route === '#studio') Page = StudioPage;
  else if (route === '#login') Page = LoginPage;

  // use route as key to trigger CSS entrance animation
  return (
    <div className="routeContainer" key={route}>
      <Page />
    </div>
  );
}

export default App;
