import useStore from "@/app/store";

export default function ProductCard({ name, price, description, img_url, id }) {
  const { addToCart } = useStore();
  return (
    <div className="flex flex-col justify-around w-[300px] h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg min-w-full" src={img_url} alt="${name}" />
      </a>
      <div className="p-5 grow flex flex-col">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <a
            href="#"
            onClick={() => addToCart({ id, name, img_url, price })}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price/100}
          </span>
        </div>
      </div>
    </div>
  );
}
