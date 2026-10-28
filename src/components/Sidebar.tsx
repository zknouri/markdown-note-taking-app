export default function Sidebar() {
  return (
    <nav className="bg-olive-500 h-lvh p-2">
      <button className="block bg-cyan-500 hover:bg-cyan-400 rounded-md p-2 mb-2 font-bold text-stone-50 cursor-pointer">Create New Note</button>
      <input type="text" className="bg-white w-full p-0.5 rounded-md"/>
    </nav>
  );
}
