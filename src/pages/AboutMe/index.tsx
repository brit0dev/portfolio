const AboutMe = () => {
  return (
    <section id="about-me">
      <h2 className="text-3xl bg-orange-200 p-1">Sobre Mim</h2>
      <div className="grid grid-cols-[38%_62%]">
        <div className="flex flex-col">
          <div className="my-6 mx-12 rounded-2xl h-[320px] overflow-hidden">
            <img
              src="https://ellun.com.br/wp-content/uploads/2020/06/shutterstock_374227048.jpg"
              alt="Foto de exemplo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <h3 className="font-bold text-xl mb-2">Bio</h3>
            <p>
              Sou um desenvolvedor fullstack apaixonado por criar soluções
              inovadoras e eficientes. Com experiência em diversas tecnologias,
              busco constantemente aprimorar minhas habilidades e contribuir
              para projetos desafiadores.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg">Formação 1</h3>
              <p>Instituição, Ano de Conclusão</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg">Formação 2</h3>
              <p>Instituição, Ano de Conclusão</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg">Curso 1</h3>
              <p>Plataforma, Ano</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg">Curso 2</h3>
              <p>Plataforma, Ano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
