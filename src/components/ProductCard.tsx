type Props = {
  name: string
  price: string
  affiliate: string
}

export default function ProductCard({ name, price, affiliate }: Props) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-500">{price}</p>

      <a
        href={affiliate}
        target="_blank"
        className="bg-green-600 text-white px-4 py-2 rounded mt-2 inline-block"
      >
        Check price
      </a>
    </div>
  )
}