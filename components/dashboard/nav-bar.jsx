export default function NavItem({ icon, text, active }) {
    return (
      <button 
        className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
          active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <span className="w-5 h-5 mr-3">{icon}</span>
        {text}
      </button>
    );
  }