import EducationCard from "../../components/EducationCard";

const AboutMe = () => {
  const educationCards = [
    {education: "Formação 1", acronym: "UFPE", fullName: "Instituição 1", courseType: "Graduação", initialYear:1999, finalYear:2004 },
    {education: "Formação 2", acronym: "UFPE", fullName: "Instituição 2", courseType: "Graduação", initialYear:2000, finalYear:2005 },
    {education: "Course 1", acronym: "UFPE", fullName: "Instituição 3", courseType: "Graduação", initialYear:1999, finalYear:2004 },
    {education: "Course 2", acronym: "UFPE", fullName: "Instituição 4", courseType: "Graduação", initialYear:1999, finalYear:2004 }
  ]
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
        <div className="flex flex-col p-3">
          <div className="grid grid-cols-2 gap-4">
    {educationCards.map((item)=>EducationCard(item))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
