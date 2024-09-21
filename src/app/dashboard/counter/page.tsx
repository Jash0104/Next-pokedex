import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: 'Shopping-cart',
  description: 'Counter Page',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span className="">Productos en el carrito</span>
      <CartCounter value={ 3 } />
    </div>
  );
}