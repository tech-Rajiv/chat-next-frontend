import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <div className="p-5 shadow flex justify-between">
      <h2 className="text-[#96A78D] font-semibold">Chat App</h2>
      <LogoutButton />
    </div>
  );
}
