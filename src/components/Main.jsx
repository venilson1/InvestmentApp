export default function Main({children}) {
  return (
    <main className="bg-purple-100">
      <div className="container mx-auto p-4 bg-pink-100">
        {children}
      </div>
    </main>
  )
}
