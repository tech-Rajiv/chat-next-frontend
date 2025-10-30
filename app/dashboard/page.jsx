import AllUsers from "../components/Chat/AllUsers";
import ChatVeiw from "../components/Chat/ChatVeiw";
import Tabs from "../components/Tabs";

export default function Dashboard() {
  return (
    <div>
      <Tabs />
      <h1>Welcome to your Dashboard 🎉</h1>
      <AllUsers />
    </div>
  );
}
