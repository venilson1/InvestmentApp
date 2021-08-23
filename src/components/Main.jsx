export default function Main({children, title, income}) {
  return (
    <main className="bg-purple-100">
      <div className="container mx-auto p-4">
        <div className="text-center p-4 mb-4">
          <h1 className="text-3xl font-semibold text-center p-2">{title}</h1>
          <h3>Rendimento Total: {`R$ ${income.result}`} {`(${income.percetage}%)`} </h3>
        </div>
         {children}
      </div>
    </main>
  )
}
