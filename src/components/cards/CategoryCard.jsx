/* eslint-disable react/prop-types */
export default function CategoryCard({ category, onClick }) {
  return (
    <div 
      className="border px-5 py-3 rounded cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
}
