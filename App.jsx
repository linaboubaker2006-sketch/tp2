import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

const etudiants = [
  {
    email: "slim@example.com",
    prenom: "Slim",
    nom: "Boubaker",
    telephone: "20111222",
    filiere: "GLSI"
  },
  {
    email: "sarra@example.com",
    prenom: "Sarra",
    nom: "Trabelsi",
    telephone: "22123456",
    filiere: "Informatique"
  },
  {
    email: "mariem@example.com",
    prenom: "Mariem",
    nom: "Khalfallah",
    telephone: "55123456",
    filiere: "Réseaux"
  }
];

function App() {
  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2>Liste des étudiants</h2>

        <div className="students">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
