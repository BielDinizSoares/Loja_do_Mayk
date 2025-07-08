// components/VendaModal.tsx
import { Produto} from '@/types/types'
import { PaymentForm } from './paymentForm'


interface Props {
  produto: Produto | null
  onClose: () => void
}

export function VendaModal({ produto, onClose }: Props) {
  
  if (!produto) return null

  return (
    // Lucas: Modal fecha ao clicar fora
    <div
      className="fixed inset-0 top-10 bg-black/30 flex justify-center items-start pt-12"
      onClick={onClose} // Clique fora fecha
    >
      <div
        className="w-full max-w-2xl bg-[#fff8dc] py-6 px-10 h-[800px] overflow-y-auto flex flex-col items-center rounded-lg border-gray-700 border-2 shadow-2xl text-black"
        onClick={(e) => e.stopPropagation()} // Clique dentro não fecha
      >
        <div className="max-w-[85%] w-full border border-gray-400 rounded-md px-5 py-4 shadow-2xl mb-1">
          <img
            src={produto.Iimage}
            alt={produto.title}
            className="object-cover rounded-xl max-w-full max-h-full bg-center bg-no-repeat px-8 mx-auto min-w-full"
          />
          <h2 className="text-xl font-bold mt-4">{produto.title}</h2>
          <p className="text-gray-600 mt-2 flex flex-col md:text-lg text-base font-medium break-words max-h-20">
            {produto.description}
          </p>
          <p className="text-lg font-semibold mt-2 text-white bg-green-600 max-w-32 rounded-2xl px-2">
            R$ {produto.price.toFixed(2)}
          </p>
        </div>

     
          <PaymentForm  produto={produto}/>
        

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded w-60 disabled:opacity-50 mt-3 mx-auto"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}