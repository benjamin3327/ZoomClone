import './components/styling/style.css';
import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom
} from "@100mslive/react-sdk";
import Room from "./components/Room";
import JoinRoom from './components/LandingPage/JoinForm';
import fetchToken from "./components/fetchToken";

const App = () => {
    const hmsActions = useHMSActions();
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const handleSubmit = async (userName) => {
    const token = await fetchToken(userName);
    hmsActions.join({ authToken: token, userName });
  };

  return (
    <>{isConnected ? <Room /> : <JoinRoom handleSubmit={handleSubmit} />}</>
  );
};

export default App;
